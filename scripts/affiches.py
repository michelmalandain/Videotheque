"""Synchronise les affiches et métadonnées TMDB de films.html et series.html.
Conserve les données en cas d'absence de correspondance exacte ou d'erreur réseau.
"""
import json
import os
import re
import unicodedata
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == 'scripts' else Path(__file__).resolve().parent
PAGES = [ROOT / 'films.html', ROOT / 'series.html']
IMAGES = ROOT / 'affiches'
API_KEY = os.environ.get('TMDB_API_KEY')
if not API_KEY:
    raise SystemExit('Secret TMDB_API_KEY manquant dans GitHub Actions.')
IMAGES.mkdir(exist_ok=True)
CATALOGUE = re.compile(r'(const\s+catalogue\s*=\s*)(\[.*?\])(\s*;)', re.S)

def normalize(value):
    value = unicodedata.normalize('NFKD', value or '').encode('ascii', 'ignore').decode().casefold()
    return re.sub(r'[^a-z0-9]+', ' ', value).strip()

def fetch(url):
    with urlopen(Request(url, headers={'User-Agent': 'Cinemanland/1.0'}), timeout=25) as response:
        return response.read()

def tmdb(endpoint, params):
    return json.loads(fetch('https://api.themoviedb.org/3/' + endpoint + '?' + urlencode({'api_key': API_KEY, 'language': 'fr-FR', **params})))

def sync(entry):
    title = str(entry.get('title', '')).strip()
    year = str(entry.get('year', ''))
    kind = entry.get('kind', '')
    category = 'tv' if normalize(kind) == 'serie' else 'movie'
    date_key = 'first_air_date' if category == 'tv' else 'release_date'
    names = ('name', 'original_name') if category == 'tv' else ('title', 'original_title')
    try:
        params = {'query': title, 'first_air_date_year' if category == 'tv' else 'year': year}
        results = tmdb('search/' + category, params).get('results', [])
        exact = [x for x in results if str(x.get(date_key, '')).startswith(year) and any(normalize(x.get(n)) == normalize(title) for n in names)]
        if not exact:
            print(f'Conservé (aucune correspondance exacte) : {title} ({year})')
            return
        item = exact[0]
        details = tmdb(f'{category}/{item["id"]}', {})
        poster_path = details.get('poster_path') or item.get('poster_path')
        if poster_path:
            poster = entry.get('poster', '')
            if not re.fullmatch(r'affiches/[a-zA-Z0-9_.-]+\.jpg', poster):
                poster = 'affiches/' + normalize(title).replace(' ', '-') + '.jpg'
            image = fetch('https://image.tmdb.org/t/p/w500' + poster_path)
            target = ROOT / poster
            if not target.exists() or target.read_bytes() != image:
                target.write_bytes(image)
            entry['poster'] = poster
        genres = [g['name'] for g in details.get('genres', []) if g.get('name')]
        if genres:
            entry['genre'] = ', '.join(genres)
        overview = (details.get('overview') or '').strip()
        if overview:
            entry['summary'] = overview
        print(f'OK : {title} ({year})')
    except Exception as error:
        print(f'Conservé (erreur TMDB) : {title} ({year}) — {error}')

pages = []
unique = {}
for page in PAGES:
    if not page.exists():
        print(f'Page absente, ignorée : {page.name}')
        continue
    content = page.read_text(encoding='utf-8')
    match = CATALOGUE.search(content)
    if not match:
        raise SystemExit(f'Catalogue introuvable dans {page.name} : aucune modification effectuée.')
    try:
        entries = json.loads(match.group(2))
    except json.JSONDecodeError as error:
        raise SystemExit(f'Catalogue non JSON dans {page.name} : {error}')
    if not isinstance(entries, list):
        raise SystemExit(f'Catalogue incorrect dans {page.name}')
    pages.append((page, content, match, entries))
    for entry in entries:
        key = (normalize(entry.get('title', '')), str(entry.get('year', '')), normalize(entry.get('kind', '')))
        unique.setdefault(key, entry)
if not pages:
    raise SystemExit('Ni films.html ni series.html trouvé.')
for entry in unique.values():
    sync(entry)
for page, content, match, entries in pages:
    for entry in entries:
        key = (normalize(entry.get('title', '')), str(entry.get('year', '')), normalize(entry.get('kind', '')))
        entry.update(unique[key])
    updated = content[:match.start(2)] + json.dumps(entries, ensure_ascii=False, indent=2) + content[match.end(2):]
    if updated != content:
        page.write_text(updated, encoding='utf-8')
    print(f'{page.name} : {len(entries)} fiches contrôlées')
