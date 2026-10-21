import os
import json
import urllib.request
import urllib.parse
from pathlib import Path

API_KEY = os.environ["TMDB_API_KEY"]
DOSSIER = Path("affiches")
DOSSIER.mkdir(exist_ok=True)

catalogue = [
    ("peaky-blinders", "Peaky Blinders", "tv", 2013),
    ("spartacus", "Spartacus", "tv", 2010),
    ("rome", "Rome", "tv", 2005),
]

for fichier, titre, categorie, annee in catalogue:
    print(f"Recherche de {titre}...")

    params = urllib.parse.urlencode({
        "api_key": API_KEY,
        "query": titre,
        "language": "fr-FR",
        "first_air_date_year": annee,
    })

    url = f"https://api.themoviedb.org/3/search/{categorie}?{params}"

    try:
        with urllib.request.urlopen(url, timeout=20) as reponse:
            donnees = json.load(reponse)

        resultats = donnees.get("results", [])
        affiche = next(
            (r for r in resultats if r.get("poster_path")),
            None
        )

        if not affiche:
            print(f"Aucune affiche pour {titre}")
            continue

        adresse = (
            "https://image.tmdb.org/t/p/w500"
            + affiche["poster_path"]
        )

        urllib.request.urlretrieve(
            adresse,
            DOSSIER / f"{fichier}.jpg"
        )

        print(f"Affiche enregistree : {titre}")

    except Exception as erreur:
        print(f"Erreur pour {titre} : {erreur}")
        raise
