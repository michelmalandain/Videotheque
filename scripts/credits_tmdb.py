"""Complète les créateurs/réalisateurs et acteurs des fiches TMDB, sans modifier le reste."""
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


def get(endpoint, params=None):
    query = {'api_key': key, 'language': 'fr-FR', **(params or {})}
    url = 'https://api.themoviedb.org/3/' + endpoint + '?' + urlencode(query)
    with urlopen(Request(url, headers={'User-Agent': 'VideothequeMichel/1.0'}), timeout=25) as response:
        return json.load(response)


def normalize(text):
    return re.sub(r'(?<=[,{])\s*([a-zA-Z_][a-zA-Z_0-9]*)\s*:', r'"\1":', text)


def find_title(title, typ, year):
    results = get('search/' + typ, {'query': title, 'include_adult': 'false'}).get('results', [])
    datefield = 'first_air_date' if typ == 'tv' else 'release_date'
    matching = [r for r in results if str(r.get(datefield, '')).startswith(str(year))]
    return matching[0]['id'] if matching else None


# Chaque entrée du catalogue occupe une ligne, même lorsque summary est une clé JavaScript.
lines = body.splitlines(keepends=True)
updated = 0
for i, line in enumerate(lines):
    match = re.match(r'^(\s*)(\{.*\})(,?)(\s*)$', line.rstrip('\r\n'))
    if not match:
        continue
    try:
        obj = json.loads(normalize(match.group(2)))
        if obj.get('directors') and obj.get('cast'):
            continue
        typ = 'tv' if obj.get('kind') == 'Série' else 'movie'
        tmdb_id = find_title(obj['title'], typ, obj['year'])
        if not tmdb_id:
            print('Correspondance non trouvée :', obj['title'])
            continue
        details = get(f'{typ}/{tmdb_id}', {'append_to_response': 'credits'})
        credits = details.get('credits') or {}
        if typ == 'tv':
            directors = [p['name'] for p in details.get('created_by', []) if p.get('name')]
            # Certains programmes n'ont pas de créateur renseigné sur TMDB.
            if not directors:
                directors = list(dict.fromkeys(p['name'] for p in credits.get('crew', [])
                    if p.get('name') and p.get('job') in ('Executive Producer', 'Creator'))[:3])
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
            ending = '\r\n' if line.endswith('\r\n') else '\n' if line.endswith('\n') else ''
            lines[i] = match.group(1) + json.dumps(obj, ensure_ascii=False, separators=(',', ':')) + match.group(3) + ending
            updated += 1
            print('Fiche complétée :', obj['title'])
        time.sleep(0.2)
    except Exception as exc:
        print('Fiche ignorée (erreur) :', str(exc))
if updated:
    index.write_text(source[:start] + ''.join(lines) + source[end:], encoding='utf-8')
print(f'{updated} fiche(s) enrichie(s).')
