"""Complète réalisateurs, créateurs et distribution dans index.html via TMDB."""
import json
import os
import re
import time
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

root = Path(__file__).resolve().parent
if root.name == "scripts":
    root = root.parent
index = root / "index.html"
key = os.environ["TMDB_API_KEY"]
source = index.read_text(encoding="utf-8")
start = source.index("const catalogue=[") + len("const catalogue=[")
end = source.index("];", start)
body = source[start:end]
pattern = re.compile(r'^\s*\{\"title\":.*?\}(?=,?\s*$)', re.M)
entries = list(pattern.finditer(body.rstrip()))

def get(endpoint, params=None):
    query = {"api_key": key, "language": "fr-FR", **(params or {})}
    url = "https://api.themoviedb.org/3/" + endpoint + "?" + urlencode(query)
    req = Request(url, headers={"User-Agent": "VideothequeMichel/1.0"})
    with urlopen(req, timeout=20) as response:
        return json.load(response)

def find_title(title, kind, year):
    typ = "tv" if kind == "Série" else "movie"
    data = get("search/" + typ, {"query": title, "include_adult": "false"})
    results = data.get("results", [])
    if not results:
        return typ, None
    # Préférer l'année exacte, pour éviter les remakes.
    datefield = "first_air_date" if typ == "tv" else "release_date"
    matches = [r for r in results if str(r.get(datefield, "")).startswith(str(year))]
    return typ, matches[0]["id"] if matches else None

count = 0
for m in reversed(entries):
    original = m.group()
    try:
        # Les entrées utilisent des clés JS sans guillemets pour summary.
        normalized = re.sub(r'(?<=[,{])\s*([a-zA-Z_][a-zA-Z_0-9]*)\s*:', r'"\1":', original)
        obj = json.loads(normalized)
        if obj.get("directors") and obj.get("cast"):
            continue
        typ, tmdb_id = find_title(obj["title"], obj["kind"], obj["year"])
        if not tmdb_id:
            print("Introuvable :", obj["title"])
            continue
        details = get(f"{typ}/{tmdb_id}", {"append_to_response": "credits"})
        credits = details.get("credits", {})
        if typ == "movie":
            directors = [x["name"] for x in credits.get("crew", []) if x.get("job") == "Director"]
        else:
            directors = [x["name"] for x in details.get("created_by", [])]
        cast = [{"name": x["name"], "character": x.get("character", "")} for x in credits.get("cast", [])[:5]]
        addition = ',"directors":' + json.dumps(directors, ensure_ascii=False)
        addition += ',"cast":' + json.dumps(cast, ensure_ascii=False)
        body = body[:m.end()-1] + addition + body[m.end()-1:]
        print("Complété :", obj["title"])
        count += 1
        time.sleep(0.25)
    except Exception as exc:
        print("Échec pour une entrée :", str(exc))
if count:
    index.write_text(source[:start] + body + source[end:], encoding="utf-8")
print(f"{count} fiche(s) enrichie(s).")
