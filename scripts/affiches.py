"""Synchronise les affiches TMDB avec les entrées du catalogue index.html."""
import os
import re
import unicodedata
import json
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == 'scripts' else Path.cwd()
INDEX = ROOT / 'index.html'
IMAGES = ROOT / 'affiches'
API_KEY = os.environ['TMDB_API_KEY']
IMAGES.mkdir(exist_ok=True)
source = INDEX.read_text(encoding='utf-8')
start = source.index('const catalogue=[')
end = source.index('];', start)
head, catalogue, tail = source[:start], source[start:end], source[end:]
entries = re.compile(r'\{title:\s*\x27(?P<title>[^\x27]+)\x27,kind:\s*\x27(?P<kind>[^\x27]+)\x27,year:\s*(?P<year>\d{4})(?P<rest>[^\n]*?)\}', re.UNICODE)

def slugify(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', value).strip('-')

def fetch(url):
    with urlopen(Request(url, headers={'User-Agent': 'Videotheque/1.0'}), timeout=25) as response:
        return response.read()

def update(match):
    title, kind, year, rest = match.group('title', 'kind', 'year', 'rest')
    filename = slugify(title) + '.jpg'
    path = IMAGES / filename
    if not path.exists():
        category = 'tv' if kind == 'Série' else 'movie'
        params = {'api_key': API_KEY, 'query': title, 'language': 'fr-FR'}
        params['first_air_date_year' if category == 'tv' else 'year'] = year
        url = f'https://api.themoviedb.org/3/search/{category}?' + urlencode(params)
        try:
            results = json.loads(fetch(url)).get('results', [])
            result = next((item for item in results if item.get('poster_path')), None)
            if result:
                path.write_bytes(fetch('https://image.tmdb.org/t/p/w500' + result['poster_path']))
                print('Affiche téléchargée :', title)
            else:
                print('Aucune affiche trouvée :', title)
        except Exception as exc:
            print('Échec TMDB pour', title, ':', exc)
    if path.exists():
        local = 'affiches/' + filename
        if re.search(r",poster:'[^']*'", rest):
            rest = re.sub(r",poster:'[^']*'", ",poster:'" + local + "'", rest)
        else:
            rest += ",poster:'" + local + "'"
    return "{title:'" + title + "',kind:'" + kind + "',year:" + year + rest + "}"

updated, count = entries.subn(update, catalogue)
if count == 0:
    raise SystemExit('Aucun titre trouvé dans index.html : format du catalogue à vérifier.')
if updated != catalogue:
    INDEX.write_text(head + updated + tail, encoding='utf-8')
print(f'{count} titre(s) vérifié(s).')
