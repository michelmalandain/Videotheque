"""Complète les crédits TMDB des catalogues CINEMANLAND films.html et series.html.
Ne touche pas à index.html ni aux fiches déjà complètes.
"""
import json
import os
import re
import time
import unicodedata
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == 'scripts' else Path(__file__).resolve().parent
PAGES = (ROOT / 'films.html', ROOT / 'series.html')
KEY = os.environ.get('TMDB_API_KEY')
if not KEY:
    raise SystemExit('Secret TMDB_API_KEY manquant.')
CATALOGUE = re.compile(r'(const\s+catalogue\s*=\s*)(\[.*?\])(\s*;)', re.S)

def normalize(value):
    value = unicodedata.normalize('NFKD', str(value or '')).encode('ascii', 'ignore').decode().casefold()
    return re.sub(r'[^a-z0-9]+', ' ', value).strip()

def get(endpoint, params=None):
    query = {'api_key': KEY, 'language': 'fr-FR', **(params or {})}
    url = 'https://api.themoviedb.org/3/' + endpoint + '?' + urlencode(query)
    with urlopen(Request(url, headers={'User-Agent': 'Cinemanland/1.0'}), timeout=25) as response:
        return json.load(response)

def enrich(obj):
    if obj.get('directors') and obj.get('cast'):
        return False
    title = str(obj.get('title', '')).strip()
    year = str(obj.get('year', ''))
    typ = 'tv' if normalize(obj.get('kind')) == 'serie' else 'movie'
    date_field = 'first_air_date' if typ == 'tv' else 'release_date'
    title_fields = ('name', 'original_name') if typ == 'tv' else ('title', 'original_title')
    try:
        results = get('search/' + typ, {'query': title, 'include_adult': 'false'}).get('results', [])
        exact = [item for item in results if str(item.get(date_field, '')).startswith(year)
                 and any(normalize(item.get(field)) == normalize(title) for field in title_fields)]
        if not exact:
            print(f'Pas de correspondance exacte : {title} ({year})')
            return False
        details = get(f'{typ}/{exact[0]["id"]}', {'append_to_response': 'credits'})
        credits = details.get('credits') or {}
        if typ == 'tv':
            directors = [p['name'] for p in details.get('created_by', []) if p.get('name')]
            if not directors:
                directors = list(dict.fromkeys(p['name'] for p in credits.get('crew', [])
                    if p.get('name') and p.get('job') in ('Executive Producer', 'Creator')))[:3]
        else:
            directors = list(dict.fromkeys(p['name'] for p in credits.get('crew', [])
                if p.get('name') and p.get('job') == 'Director'))
        cast = [{'name': p['name'], 'character': p.get('character', '')}
                for p in credits.get('cast', [])[:5] if p.get('name')]
        changed = False
        if directors and not obj.get('directors'):
            obj['directors'] = directors
            changed = True
        if cast and not obj.get('cast'):
            obj['cast'] = cast
            changed = True
        print(('Crédits ajoutés' if changed else 'Crédits conservés') + f' : {title} ({year})')
        time.sleep(0.2)
        return changed
    except Exception as exc:
        print(f'Erreur TMDB pour {title} ({year}) : {exc}')
        return False

# Les deux pages peuvent contenir des fiches communes : on interroge TMDB une seule fois.
cache = {}
total = 0
for page in PAGES:
    if not page.is_file():
        raise SystemExit(f'Fichier manquant : {page.name}')
    source = page.read_text(encoding='utf-8')
    match = CATALOGUE.search(source)
    if not match:
        raise SystemExit(f'Catalogue introuvable dans {page.name}')
    try:
        catalogue = json.loads(match.group(2))
    except json.JSONDecodeError as exc:
        raise SystemExit(f'Catalogue illisible dans {page.name} : {exc}') from exc
    changed = 0
    for obj in catalogue:
        if obj.get('directors') and obj.get('cast'):
            continue
        identity = (normalize(obj.get('title')), str(obj.get('year')), normalize(obj.get('kind')))
        if identity in cache:
            reference = cache[identity]
            for field in ('directors', 'cast'):
                if not obj.get(field) and reference.get(field):
                    obj[field] = reference[field]
                    changed += 1
        else:
            if enrich(obj):
                changed += 1
            cache[identity] = obj
    if changed:
        replacement = json.dumps(catalogue, ensure_ascii=False, indent=2)
        page.write_text(source[:match.start(2)] + replacement + source[match.end(2):], encoding='utf-8')
    total += changed
    print(f'{page.name} : {changed} ajout(s) de crédits.')
print(f'Terminé : {total} ajout(s) au total.')
