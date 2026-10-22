"""Synchronise les affiches TMDB en vérifiant titre et année.

Les affiches existantes sont revalidées, sans être remplacées si TMDB
ne fournit pas une correspondance fiable.
"""
import json
import os
import re
import unicodedata
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
entries = re.compile(
    r'\{\s*(?P<q>[\'\"]?)title(?P=q)\s*:\s*(?P<tq>[\'\"])(?P<title>.*?)(?P=tq)'
    r'\s*,\s*(?P<kq>[\'\"]?)kind(?P=kq)\s*:\s*(?P<kv>[\'\"])(?P<kind>.*?)(?P=kv)'
    r'\s*,\s*(?P<yq>[\'\"]?)year(?P=yq)\s*:\s*(?P<year>\d{4})(?P<rest>.*?)\}',
    re.DOTALL,
)

def normalize(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode().casefold()
    return re.sub(r'[^a-z0-9]+', ' ', value).strip()

def slugify(value):
    return normalize(value).replace(' ', '-')

def fetch(url):
    with urlopen(Request(url, headers={'User-Agent': 'Videotheque/1.0'}), timeout=25) as response:
        return response.read()

def update(match):
    title, kind, year = match.group('title', 'kind', 'year')
    category = 'tv' if kind.casefold() in ('série', 'serie') else 'movie'
    params = {'api_key': API_KEY, 'query': title, 'language': 'fr-FR'}
    params['first_air_date_year' if category == 'tv' else 'year'] = year
    url = f'https://api.themoviedb.org/3/search/{category}?' + urlencode(params)
    try:
        results = json.loads(fetch(url)).get('results', [])
        date_field = 'first_air_date' if category == 'tv' else 'release_date'
        title_fields = ('name', 'original_name') if category == 'tv' else ('title', 'original_title')
        candidates = [item for item in results if item.get('poster_path')
                      and str(item.get(date_field, '')).startswith(year)
                      and any(normalize(item.get(field, '')) == normalize(title) for field in title_fields)]
        if not candidates:
            print(f'Aucune correspondance exacte (titre + année) : {title} ({year})')
            return match.group(0)
        result = candidates[0]
        filename = slugify(title) + '.jpg'
        path = IMAGES / filename
        new_image = fetch('https://image.tmdb.org/t/p/w500' + result['poster_path'])
        if not path.exists() or path.read_bytes() != new_image:
            path.write_bytes(new_image)
            print(f'Affiche synchronisée : {title} ({year}), TMDB #{result["id"]}')
        else:
            print(f'Affiche déjà correcte : {title} ({year})')
        local = 'affiches/' + filename
        full = match.group(0)
        poster_field = re.compile(r'(?P<key>[\'\"]?poster[\'\"]?\s*:\s*)(?P<quote>[\'\"])(?P<value>.*?)(?P=quote)', re.DOTALL)
        if poster_field.search(full):
            return poster_field.sub(lambda m: m.group('key') + m.group('quote') + local + m.group('quote'), full, count=1)
        return full[:-1].rstrip() + ('' if full[:-1].rstrip().endswith(',') else ',') + 'poster:' + json.dumps(local) + '}'
    except Exception as exc:
        print(f'Échec TMDB pour {title} : {exc}')
        return match.group(0)

updated, count = entries.subn(update, catalogue)
if count == 0:
    raise SystemExit('Aucun titre trouvé dans index.html : format du catalogue à vérifier.')
if updated != catalogue:
    INDEX.write_text(head + updated + tail, encoding='utf-8')
print(f'{count} titre(s) vérifié(s).')
