"""Enrichit les crédits TMDB du catalogue, y compris les fiches sur plusieurs lignes."""
import json
import os
import re
import time
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

root = Path(__file__).resolve().parent
if root.name == 'scripts':
    root = root.parent
index = root / 'index.html'
key = os.environ['TMDB_API_KEY']
source = index.read_text(encoding='utf-8')
start = source.index('const catalogue=[') + len('const catalogue=[')
end = source.index('];', start)
body = source[start:end]
# Certaines anciennes entrées utilisent des clés JavaScript sans guillemets.
normalized = re.sub(r'(?<=[,{])\s*([A-Za-z_][A-Za-z_0-9]*)\s*:', lambda m: '\n"' + m.group(1) + '":', body)
try:
    catalogue = json.loads('[' + normalized + ']')
except json.JSONDecodeError as exc:
    raise SystemExit(f'Catalogue illisible : {exc}') from exc

def get(endpoint, params=None):
    query = {'api_key': key, 'language': 'fr-FR', **(params or {})}
    url = 'https://api.themoviedb.org/3/' + endpoint + '?' + urlencode(query)
    with urlopen(Request(url, headers={'User-Agent': 'VideothequeMichel/1.0'}), timeout=25) as response:
        return json.load(response)

def find_title(title, typ, year):
    results = get('search/' + typ, {'query': title, 'include_adult': 'false'}).get('results', [])
    field = 'first_air_date' if typ == 'tv' else 'release_date'
    exact = [r for r in results if str(r.get(field, '')).startswith(str(year))]
    return (exact[0] if exact else None)

updated = 0
missing = 0
for obj in catalogue:
    if obj.get('directors') and obj.get('cast'):
        continue
    missing += 1
    title = obj.get('title', '')
    typ = 'tv' if obj.get('kind') == 'Série' else 'movie'
    try:
        result = find_title(title, typ, obj.get('year', ''))
        if not result:
            print('Correspondance non trouvée :', title)
            continue
        details = get(f"{typ}/{result['id']}", {'append_to_response': 'credits'})
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
        if changed:
            updated += 1
            print('Fiche complétée :', title)
        else:
            print('Aucun crédit disponible :', title)
        time.sleep(0.2)
    except Exception as exc:
        print('Erreur TMDB pour', title, ':', exc)

if updated:
    replacement = '\n' + ',\n'.join('  ' + json.dumps(obj, ensure_ascii=False, indent=2).replace('\n', '\n  ') for obj in catalogue) + '\n'
    index.write_text(source[:start] + replacement + source[end:], encoding='utf-8')
print(f'{missing} fiche(s) à compléter ; {updated} fiche(s) enrichie(s).')
