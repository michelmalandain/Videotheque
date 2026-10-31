// CINEMALAND — Banque de 1 000 questions.
// Base originale de 200 questions conservée ; 800 questions ajoutées.
// Attention : les nouvelles questions factuelles sont à relire avant publication définitive.
const questions = {
  "repliques": [
    {
      "q": "Dans quel film entend-on « Les cons, ça ose tout. » ?",
      "a": [
        "Un singe en hiver",
        "La Tour Montparnasse infernale",
        "The Artist",
        "Les Tontons flingueurs"
      ],
      "c": 3,
      "info": "Les Tontons flingueurs (1963).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Les cons, ça ose tout. » ?",
      "a": [
        "Jean-Pierre Melville",
        "Jacques Tati",
        "Jean-Marie Poiré",
        "Georges Lautner"
      ],
      "c": 3,
      "info": "Georges Lautner — Les Tontons flingueurs (1963).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Atmosphère ! Atmosphère ! » ?",
      "a": [
        "Les Bronzés",
        "Le Sens de la fête",
        "Hôtel du Nord",
        "Ridicule"
      ],
      "c": 2,
      "info": "Hôtel du Nord (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Atmosphère ! Atmosphère ! » ?",
      "a": [
        "Marcel Pagnol",
        "Marcel Carné",
        "Olivier Dahan",
        "Jean-Pierre Melville"
      ],
      "c": 1,
      "info": "Marcel Carné — Hôtel du Nord (1938).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « T’as d’beaux yeux, tu sais. » ?",
      "a": [
        "La Soupe aux choux",
        "Le Salaire de la peur",
        "Quai des brumes",
        "Mon oncle"
      ],
      "c": 2,
      "info": "Quai des brumes (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « T’as d’beaux yeux, tu sais. » ?",
      "a": [
        "Jean Renoir",
        "Yves Robert",
        "Marcel Carné",
        "Jean-Marie Poiré"
      ],
      "c": 2,
      "info": "Marcel Carné — Quai des brumes (1938).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « C’est cela, oui ! » ?",
      "a": [
        "Le Père Noël est une ordure",
        "Le Gendarme de Saint-Tropez",
        "Les Enfants du paradis",
        "Jules et Jim"
      ],
      "c": 0,
      "info": "Le Père Noël est une ordure (1982).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « C’est cela, oui ! » ?",
      "a": [
        "Jean-Marie Poiré",
        "Yves Robert",
        "Mathieu Kassovitz",
        "Alain Berbérian"
      ],
      "c": 0,
      "info": "Jean-Marie Poiré — Le Père Noël est une ordure (1982).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « C’est fin, c’est très fin, ça se mange sans faim. » ?",
      "a": [
        "Le Dîner de cons",
        "La Haine",
        "Le Père Noël est une ordure",
        "La Soupe aux choux"
      ],
      "c": 2,
      "info": "Le Père Noël est une ordure (1982).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « C’est fin, c’est très fin, ça se mange sans faim. » ?",
      "a": [
        "Olivier Dahan",
        "Marcel Pagnol",
        "Marcel Carné",
        "Jean-Marie Poiré"
      ],
      "c": 3,
      "info": "Jean-Marie Poiré — Le Père Noël est une ordure (1982).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Il nage bien, le chef. » ?",
      "a": [
        "Les Bronzés",
        "Les Quatre Cents Coups",
        "Ridicule",
        "Le Pari"
      ],
      "c": 0,
      "info": "Les Bronzés (1978).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Il nage bien, le chef. » ?",
      "a": [
        "Patrice Leconte",
        "Georges Lautner",
        "Yves Robert",
        "Charles Nemes"
      ],
      "c": 0,
      "info": "Patrice Leconte — Les Bronzés (1978).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Quand te reverrai-je, pays merveilleux ? » ?",
      "a": [
        "Le Grand Blond avec une chaussure noire",
        "Le Père Noël est une ordure",
        "Les Bronzés font du ski",
        "À bout de souffle"
      ],
      "c": 2,
      "info": "Les Bronzés font du ski (1979).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Quand te reverrai-je, pays merveilleux ? » ?",
      "a": [
        "Olivier Nakache et Éric Toledano",
        "Marcel Pagnol",
        "Didier Bourdon et Bernard Campan",
        "Patrice Leconte"
      ],
      "c": 3,
      "info": "Patrice Leconte — Les Bronzés font du ski (1979).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Prenez un chewing-gum, Émile. » ?",
      "a": [
        "Quai des brumes",
        "La Cité de la peur",
        "Le Schpountz",
        "Le Salaire de la peur"
      ],
      "c": 1,
      "info": "La Cité de la peur (1994).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Prenez un chewing-gum, Émile. » ?",
      "a": [
        "Henri Verneuil",
        "Alain Berbérian",
        "Patrice Leconte",
        "Jean-Pierre Jeunet"
      ],
      "c": 1,
      "info": "Alain Berbérian — La Cité de la peur (1994).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Vous voulez un whisky ? » ?",
      "a": [
        "Mon oncle",
        "OSS 117 : Rio ne répond plus",
        "Le Prénom",
        "La Cité de la peur"
      ],
      "c": 3,
      "info": "La Cité de la peur (1994).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Vous voulez un whisky ? » ?",
      "a": [
        "Olivier Dahan",
        "Alain Berbérian",
        "Gérard Oury",
        "Claude Autant-Lara"
      ],
      "c": 1,
      "info": "Alain Berbérian — La Cité de la peur (1994).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Il s’appelle Juste Leblanc. » ?",
      "a": [
        "Jules et Jim",
        "Le Schpountz",
        "Les Tontons flingueurs",
        "Le Dîner de cons"
      ],
      "c": 3,
      "info": "Le Dîner de cons (1998).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Il s’appelle Juste Leblanc. » ?",
      "a": [
        "Henri Verneuil",
        "Michel Hazanavicius",
        "Olivier Dahan",
        "Francis Veber"
      ],
      "c": 3,
      "info": "Francis Veber — Le Dîner de cons (1998).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Tea for two and two for tea. » ?",
      "a": [
        "Le Fabuleux Destin d’Amélie Poulain",
        "Le Salaire de la peur",
        "Un singe en hiver",
        "La Grande Vadrouille"
      ],
      "c": 3,
      "info": "La Grande Vadrouille (1966).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Tea for two and two for tea. » ?",
      "a": [
        "Jean-Marie Poiré",
        "Gérard Oury",
        "Jean-Pierre Jeunet",
        "Alain Chabat"
      ],
      "c": 1,
      "info": "Gérard Oury — La Grande Vadrouille (1966).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Les pauvres, c’est fait pour être très pauvres. » ?",
      "a": [
        "Intouchables",
        "Le Gendarme de Saint-Tropez",
        "La Folie des grandeurs",
        "Hôtel du Nord"
      ],
      "c": 2,
      "info": "La Folie des grandeurs (1971).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Les pauvres, c’est fait pour être très pauvres. » ?",
      "a": [
        "Jean-Marie Poiré",
        "Gérard Oury",
        "Dany Boon",
        "Claude Autant-Lara"
      ],
      "c": 1,
      "info": "Gérard Oury — La Folie des grandeurs (1971).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Elle va marcher beaucoup moins bien, forcément ! » ?",
      "a": [
        "OSS 117 : Rio ne répond plus",
        "La Traversée de Paris",
        "Le Corniaud",
        "La Folie des grandeurs"
      ],
      "c": 2,
      "info": "Le Corniaud (1965).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Elle va marcher beaucoup moins bien, forcément ! » ?",
      "a": [
        "Jean Renoir",
        "Henri-Georges Clouzot",
        "Gérard Oury",
        "Didier Bourdon et Bernard Campan"
      ],
      "c": 2,
      "info": "Gérard Oury — Le Corniaud (1965).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Salauds de pauvres ! » ?",
      "a": [
        "Intouchables",
        "La Traversée de Paris",
        "Le Sens de la fête",
        "Jules et Jim"
      ],
      "c": 1,
      "info": "La Traversée de Paris (1956).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Salauds de pauvres ! » ?",
      "a": [
        "Patrice Leconte",
        "Claude Autant-Lara",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Charles Nemes"
      ],
      "c": 1,
      "info": "Claude Autant-Lara — La Traversée de Paris (1956).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Tout condamné à mort aura la tête tranchée. » ?",
      "a": [
        "Le Fabuleux Destin d’Amélie Poulain",
        "Playtime",
        "Le Schpountz",
        "Les Tontons flingueurs"
      ],
      "c": 2,
      "info": "Le Schpountz (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Tout condamné à mort aura la tête tranchée. » ?",
      "a": [
        "Alain Berbérian",
        "Marcel Pagnol",
        "Jean-Marie Poiré",
        "François Truffaut"
      ],
      "c": 1,
      "info": "Marcel Pagnol — Le Schpountz (1938).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Elle est belle, ta femme ! » ?",
      "a": [
        "La Femme du boulanger",
        "La Cité de la peur",
        "Le Sens de la fête",
        "Astérix et Obélix : Mission Cléopâtre"
      ],
      "c": 0,
      "info": "La Femme du boulanger (1938).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Elle est belle, ta femme ! » ?",
      "a": [
        "Yves Robert",
        "Patrice Leconte",
        "Marcel Pagnol",
        "Michel Hazanavicius et Dominique Mézerette"
      ],
      "c": 2,
      "info": "Marcel Pagnol — La Femme du boulanger (1938).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Tu m’aimes ? » ?",
      "a": [
        "Le Gendarme de Saint-Tropez",
        "Le Mépris",
        "Les Trois Frères",
        "La Haine"
      ],
      "c": 1,
      "info": "Le Mépris (1963).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Tu m’aimes ? » ?",
      "a": [
        "Charles Nemes",
        "Jean-Pierre Melville",
        "Marcel Pagnol",
        "Jean-Luc Godard"
      ],
      "c": 3,
      "info": "Jean-Luc Godard — Le Mépris (1963).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Si vous n’aimez pas la mer... » ?",
      "a": [
        "Le Cercle rouge",
        "La Tour Montparnasse infernale",
        "À bout de souffle",
        "Les Quatre Cents Coups"
      ],
      "c": 2,
      "info": "À bout de souffle (1960).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Si vous n’aimez pas la mer... » ?",
      "a": [
        "Georges Lautner",
        "Mathieu Kassovitz",
        "Patrice Leconte",
        "Jean-Luc Godard"
      ],
      "c": 3,
      "info": "Jean-Luc Godard — À bout de souffle (1960).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Les temps sont durs pour les rêveurs. » ?",
      "a": [
        "Le Pari",
        "Le Fabuleux Destin d’Amélie Poulain",
        "Le Samouraï",
        "The Artist"
      ],
      "c": 1,
      "info": "Le Fabuleux Destin d’Amélie Poulain (2001).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Les temps sont durs pour les rêveurs. » ?",
      "a": [
        "Mathieu Kassovitz",
        "Jacques Tati",
        "Claude Autant-Lara",
        "Jean-Pierre Jeunet"
      ],
      "c": 3,
      "info": "Jean-Pierre Jeunet — Le Fabuleux Destin d’Amélie Poulain (2001).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Pas de bras, pas de chocolat. » ?",
      "a": [
        "OSS 117 : Rio ne répond plus",
        "Quai des brumes",
        "La Femme du boulanger",
        "Intouchables"
      ],
      "c": 3,
      "info": "Intouchables (2011).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Pas de bras, pas de chocolat. » ?",
      "a": [
        "Didier Bourdon et Bernard Campan",
        "Olivier Nakache et Éric Toledano",
        "Jean-Pierre Jeunet",
        "Henri Verneuil"
      ],
      "c": 1,
      "info": "Olivier Nakache et Éric Toledano — Intouchables (2011).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Quand on vient dans le Nord, on brait deux fois. » ?",
      "a": [
        "Le Dîner de cons",
        "Bienvenue chez les Ch’tis",
        "Hôtel du Nord",
        "La Classe américaine"
      ],
      "c": 1,
      "info": "Bienvenue chez les Ch’tis (2008).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Quand on vient dans le Nord, on brait deux fois. » ?",
      "a": [
        "Mathieu Kassovitz",
        "Jean-Pierre Jeunet et Marc Caro",
        "Dany Boon",
        "Michel Hazanavicius et Dominique Mézerette"
      ],
      "c": 2,
      "info": "Dany Boon — Bienvenue chez les Ch’tis (2008).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Okay ! » ?",
      "a": [
        "Les Visiteurs",
        "Playtime",
        "La Traversée de Paris",
        "Mon oncle"
      ],
      "c": 0,
      "info": "Les Visiteurs (1993).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Okay ! » ?",
      "a": [
        "François Truffaut",
        "Michel Hazanavicius",
        "Michel Hazanavicius et Dominique Mézerette",
        "Jean-Marie Poiré"
      ],
      "c": 3,
      "info": "Jean-Marie Poiré — Les Visiteurs (1993).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Jour ! Nuit ! » ?",
      "a": [
        "Le Salaire de la peur",
        "La Grande Vadrouille",
        "Les Visiteurs",
        "La Soupe aux choux"
      ],
      "c": 2,
      "info": "Les Visiteurs (1993).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Jour ! Nuit ! » ?",
      "a": [
        "Jean-Marie Poiré",
        "Jean-Luc Godard",
        "Charles Nemes",
        "Mathieu Kassovitz"
      ],
      "c": 0,
      "info": "Jean-Marie Poiré — Les Visiteurs (1993).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « C’est une bonne situation, ça, scribe ? » ?",
      "a": [
        "La Cité des enfants perdus",
        "Jules et Jim",
        "Astérix et Obélix : Mission Cléopâtre",
        "Le Prénom"
      ],
      "c": 2,
      "info": "Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « C’est une bonne situation, ça, scribe ? » ?",
      "a": [
        "Michel Hazanavicius et Dominique Mézerette",
        "Michel Hazanavicius",
        "Alain Chabat",
        "Jean-Pierre Jeunet et Marc Caro"
      ],
      "c": 2,
      "info": "Alain Chabat — Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Il fait au moins moins huit mille ! » ?",
      "a": [
        "Hôtel du Nord",
        "Astérix et Obélix : Mission Cléopâtre",
        "Les Trois Frères",
        "Les Quatre Cents Coups"
      ],
      "c": 1,
      "info": "Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Il fait au moins moins huit mille ! » ?",
      "a": [
        "François Truffaut",
        "Alain Chabat",
        "Jean-Luc Godard",
        "Jean-Marie Poiré"
      ],
      "c": 1,
      "info": "Alain Chabat — Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « J’aime me battre. » ?",
      "a": [
        "Le Père Noël est une ordure",
        "OSS 117 : Le Caire, nid d’espions",
        "Quai des brumes",
        "La Femme du boulanger"
      ],
      "c": 1,
      "info": "OSS 117 : Le Caire, nid d’espions (2006).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « J’aime me battre. » ?",
      "a": [
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Georges Lautner",
        "Michel Hazanavicius",
        "Alain Berbérian"
      ],
      "c": 2,
      "info": "Michel Hazanavicius — OSS 117 : Le Caire, nid d’espions (2006).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Le monde change. » ?",
      "a": [
        "OSS 117 : Rio ne répond plus",
        "Hôtel du Nord",
        "Les Quatre Cents Coups",
        "Intouchables"
      ],
      "c": 0,
      "info": "OSS 117 : Rio ne répond plus (2009).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Le monde change. » ?",
      "a": [
        "Michel Hazanavicius",
        "Michel Hazanavicius et Dominique Mézerette",
        "Patrice Leconte",
        "Alain Berbérian"
      ],
      "c": 0,
      "info": "Michel Hazanavicius — OSS 117 : Rio ne répond plus (2009).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Il a une chaussure noire. » ?",
      "a": [
        "Hôtel du Nord",
        "Le Dîner de cons",
        "Le Grand Blond avec une chaussure noire",
        "Les Bronzés font du ski"
      ],
      "c": 2,
      "info": "Le Grand Blond avec une chaussure noire (1972).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Il a une chaussure noire. » ?",
      "a": [
        "Jacques Tati",
        "Jean-Marie Poiré",
        "Yves Robert",
        "Didier Bourdon et Bernard Campan"
      ],
      "c": 2,
      "info": "Yves Robert — Le Grand Blond avec une chaussure noire (1972).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Je ne vous jette pas la pierre, Pierre. » ?",
      "a": [
        "Le Pari",
        "La Classe américaine",
        "Le Père Noël est une ordure",
        "Le Salaire de la peur"
      ],
      "c": 2,
      "info": "Le Père Noël est une ordure (1982).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Je ne vous jette pas la pierre, Pierre. » ?",
      "a": [
        "Jean-Marie Poiré",
        "Dany Boon",
        "Marcel Carné",
        "Patrice Leconte"
      ],
      "c": 0,
      "info": "Jean-Marie Poiré — Le Père Noël est une ordure (1982).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Il est mignon, monsieur Pignon. » ?",
      "a": [
        "Le Dîner de cons",
        "Delicatessen",
        "Astérix et Obélix : Mission Cléopâtre",
        "Le Salaire de la peur"
      ],
      "c": 0,
      "info": "Le Dîner de cons (1998).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Il est mignon, monsieur Pignon. » ?",
      "a": [
        "Marcel Carné",
        "Francis Veber",
        "Didier Bourdon et Bernard Campan",
        "Alain Berbérian"
      ],
      "c": 1,
      "info": "Francis Veber — Le Dîner de cons (1998).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « C’est une question de principe ! » ?",
      "a": [
        "The Artist",
        "Le Gendarme de Saint-Tropez",
        "La Tour Montparnasse infernale",
        "Le Père Noël est une ordure"
      ],
      "c": 1,
      "info": "Le Gendarme de Saint-Tropez (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « C’est une question de principe ! » ?",
      "a": [
        "Henri-Georges Clouzot",
        "Jean Renoir",
        "Yves Robert",
        "Jean Girault"
      ],
      "c": 3,
      "info": "Jean Girault — Le Gendarme de Saint-Tropez (1964).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Cent patates ! » ?",
      "a": [
        "La Règle du jeu",
        "Delicatessen",
        "Les Enfants du paradis",
        "Les Trois Frères"
      ],
      "c": 3,
      "info": "Les Trois Frères (1995).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Cent patates ! » ?",
      "a": [
        "Dany Boon",
        "Patrice Leconte",
        "Didier Bourdon et Bernard Campan",
        "Jean-Pierre Jeunet et Marc Caro"
      ],
      "c": 2,
      "info": "Didier Bourdon et Bernard Campan — Les Trois Frères (1995).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Le tabac, c’est tabou. » ?",
      "a": [
        "Le Samouraï",
        "Le Gendarme de Saint-Tropez",
        "Le Pari",
        "Les Vacances de monsieur Hulot"
      ],
      "c": 2,
      "info": "Le Pari (1997).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Le tabac, c’est tabou. » ?",
      "a": [
        "Jean-Luc Godard",
        "Henri Verneuil",
        "Jacques Tati",
        "Didier Bourdon et Bernard Campan"
      ],
      "c": 3,
      "info": "Didier Bourdon et Bernard Campan — Le Pari (1997).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « C’est un cadeau. » ?",
      "a": [
        "La Haine",
        "Le Père Noël est une ordure",
        "Le Samouraï",
        "Le Mépris"
      ],
      "c": 1,
      "info": "Le Père Noël est une ordure (1982).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « C’est un cadeau. » ?",
      "a": [
        "Didier Bourdon et Bernard Campan",
        "Jean-Marie Poiré",
        "Marcel Pagnol",
        "Alain Chabat"
      ],
      "c": 1,
      "info": "Jean-Marie Poiré — Le Père Noël est une ordure (1982).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Le planté de bâton ! » ?",
      "a": [
        "Le Cercle rouge",
        "Quai des brumes",
        "La Cité de la peur",
        "Les Bronzés font du ski"
      ],
      "c": 3,
      "info": "Les Bronzés font du ski (1979).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Le planté de bâton ! » ?",
      "a": [
        "Jean Girault",
        "Patrice Leconte",
        "Alain Chabat",
        "Yves Robert"
      ],
      "c": 1,
      "info": "Patrice Leconte — Les Bronzés font du ski (1979).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « On ne sait jamais, sur un malentendu... » ?",
      "a": [
        "Le Samouraï",
        "Le Sens de la fête",
        "Les Bronzés font du ski",
        "Ridicule"
      ],
      "c": 2,
      "info": "Les Bronzés font du ski (1979).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « On ne sait jamais, sur un malentendu... » ?",
      "a": [
        "Henri-Georges Clouzot",
        "Jean-Pierre Melville",
        "Olivier Nakache et Éric Toledano",
        "Patrice Leconte"
      ],
      "c": 3,
      "info": "Patrice Leconte — Les Bronzés font du ski (1979).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « La Denrée ! » ?",
      "a": [
        "Le Pari",
        "La Haine",
        "Delicatessen",
        "La Soupe aux choux"
      ],
      "c": 3,
      "info": "La Soupe aux choux (1981).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « La Denrée ! » ?",
      "a": [
        "Dany Boon",
        "Henri-Georges Clouzot",
        "Michel Hazanavicius et Dominique Mézerette",
        "Jean Girault"
      ],
      "c": 3,
      "info": "Jean Girault — La Soupe aux choux (1981).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « C’est moi qui ai fait ça ? » ?",
      "a": [
        "Les Bronzés font du ski",
        "La Tour Montparnasse infernale",
        "Le Prénom",
        "Le Clan des Siciliens"
      ],
      "c": 1,
      "info": "La Tour Montparnasse infernale (2001).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « C’est moi qui ai fait ça ? » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Dany Boon",
        "Francis Veber",
        "Charles Nemes"
      ],
      "c": 3,
      "info": "Charles Nemes — La Tour Montparnasse infernale (2001).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Adolphe ! » ?",
      "a": [
        "Les Bronzés",
        "Le Fabuleux Destin d’Amélie Poulain",
        "Le Prénom",
        "Le Dîner de cons"
      ],
      "c": 2,
      "info": "Le Prénom (2012).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Adolphe ! » ?",
      "a": [
        "Francis Veber",
        "Olivier Nakache et Éric Toledano",
        "Jean-Luc Godard",
        "Alexandre de La Patellière et Matthieu Delaporte"
      ],
      "c": 3,
      "info": "Alexandre de La Patellière et Matthieu Delaporte — Le Prénom (2012).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Le train de tes injures roule sur le rail de mon indifférence. » ?",
      "a": [
        "La Traversée de Paris",
        "La Classe américaine",
        "Un singe en hiver",
        "Le Clan des Siciliens"
      ],
      "c": 1,
      "info": "La Classe américaine (1993).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Le train de tes injures roule sur le rail de mon indifférence. » ?",
      "a": [
        "Olivier Nakache et Éric Toledano",
        "Georges Lautner",
        "Michel Hazanavicius et Dominique Mézerette",
        "Jean Renoir"
      ],
      "c": 2,
      "info": "Michel Hazanavicius et Dominique Mézerette — La Classe américaine (1993).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Dans quel film entend-on « Je suis ton père. » ?",
      "a": [
        "Star Wars : L’Empire contre-attaque",
        "Apocalypse Now",
        "Forrest Gump",
        "E.T., l’extra-terrestre"
      ],
      "c": 0,
      "info": "Star Wars : L’Empire contre-attaque (1980).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Je suis ton père. » ?",
      "a": [
        "Michael Curtiz",
        "Irvin Kershner",
        "Francis Ford Coppola",
        "Robert Zemeckis"
      ],
      "c": 1,
      "info": "Irvin Kershner — Star Wars : L’Empire contre-attaque (1980).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « On ne laisse pas Bébé dans un coin. » ?",
      "a": [
        "Retour vers le futur",
        "Forrest Gump",
        "Dirty Dancing",
        "Pulp Fiction"
      ],
      "c": 2,
      "info": "Dirty Dancing (1987).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « On ne laisse pas Bébé dans un coin. » ?",
      "a": [
        "Francis Ford Coppola",
        "Emile Ardolino",
        "Michael Curtiz",
        "Peter Jackson"
      ],
      "c": 1,
      "info": "Emile Ardolino — Dirty Dancing (1987).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « Je suis le roi du monde ! » ?",
      "a": [
        "Le Parrain",
        "Forrest Gump",
        "Terminator",
        "Titanic"
      ],
      "c": 3,
      "info": "Titanic (1997).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Je suis le roi du monde ! » ?",
      "a": [
        "James Cameron",
        "Peter Jackson",
        "Quentin Tarantino",
        "Steven Spielberg"
      ],
      "c": 0,
      "info": "James Cameron — Titanic (1997).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « La vie, c’est comme une boîte de chocolats. » ?",
      "a": [
        "Apocalypse Now",
        "Le Parrain",
        "Forrest Gump",
        "Jurassic Park"
      ],
      "c": 2,
      "info": "Forrest Gump (1994).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « La vie, c’est comme une boîte de chocolats. » ?",
      "a": [
        "Robert Zemeckis",
        "James Cameron",
        "Irvin Kershner",
        "Michael Curtiz"
      ],
      "c": 0,
      "info": "Robert Zemeckis — Forrest Gump (1994).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « Je reviendrai. » ?",
      "a": [
        "Terminator",
        "Pulp Fiction",
        "Forrest Gump",
        "Le Parrain"
      ],
      "c": 0,
      "info": "Terminator (1984).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Je reviendrai. » ?",
      "a": [
        "James Cameron",
        "Irvin Kershner",
        "Emile Ardolino",
        "Michael Curtiz"
      ],
      "c": 0,
      "info": "James Cameron — Terminator (1984).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « E.T. téléphone maison. » ?",
      "a": [
        "E.T., l’extra-terrestre",
        "Star Wars : L’Empire contre-attaque",
        "Les Dents de la mer",
        "Pulp Fiction"
      ],
      "c": 0,
      "info": "E.T., l’extra-terrestre (1982).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « E.T. téléphone maison. » ?",
      "a": [
        "Steven Spielberg",
        "James Cameron",
        "Emile Ardolino",
        "Irvin Kershner"
      ],
      "c": 0,
      "info": "Steven Spielberg — E.T., l’extra-terrestre (1982).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « Je vais lui faire une offre qu’il ne pourra pas refuser. » ?",
      "a": [
        "Pulp Fiction",
        "Apocalypse Now",
        "Retour vers le futur",
        "Le Parrain"
      ],
      "c": 3,
      "info": "Le Parrain (1972).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Je vais lui faire une offre qu’il ne pourra pas refuser. » ?",
      "a": [
        "Peter Jackson",
        "Francis Ford Coppola",
        "Robert Zemeckis",
        "Steven Spielberg"
      ],
      "c": 1,
      "info": "Francis Ford Coppola — Le Parrain (1972).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « Nous aurons toujours Paris. » ?",
      "a": [
        "Casablanca",
        "Le Parrain",
        "Dirty Dancing",
        "Terminator"
      ],
      "c": 0,
      "info": "Casablanca (1942).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Nous aurons toujours Paris. » ?",
      "a": [
        "Emile Ardolino",
        "Michael Curtiz",
        "Irvin Kershner",
        "Peter Jackson"
      ],
      "c": 1,
      "info": "Michael Curtiz — Casablanca (1942).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « Nom de Zeus ! » ?",
      "a": [
        "Titanic",
        "Pulp Fiction",
        "Retour vers le futur",
        "Terminator"
      ],
      "c": 2,
      "info": "Retour vers le futur (1985).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Nom de Zeus ! » ?",
      "a": [
        "Emile Ardolino",
        "James Cameron",
        "Robert Zemeckis",
        "Steven Spielberg"
      ],
      "c": 2,
      "info": "Robert Zemeckis — Retour vers le futur (1985).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Dans quel film entend-on « Vous ne passerez pas ! » ?",
      "a": [
        "Les Dents de la mer",
        "Pulp Fiction",
        "Le Seigneur des anneaux : La Communauté de l’anneau",
        "Apocalypse Now"
      ],
      "c": 2,
      "info": "Le Seigneur des anneaux : La Communauté de l’anneau (2001).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé le film où l’on entend « Vous ne passerez pas ! » ?",
      "a": [
        "Michael Curtiz",
        "Peter Jackson",
        "Irvin Kershner",
        "Quentin Tarantino"
      ],
      "c": 1,
      "info": "Peter Jackson — Le Seigneur des anneaux : La Communauté de l’anneau (2001).",
      "level": "expert",
      "origin": "INT"
    }
  ],
  "cinema": [
    {
      "q": "Qui a réalisé « La Grande Vadrouille » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Claude Autant-Lara",
        "Gérard Oury",
        "Jean-Pierre Jeunet et Marc Caro"
      ],
      "c": 2,
      "info": "Gérard Oury, 1966.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Grande Vadrouille » ?",
      "a": [
        "1998",
        "1966",
        "2011",
        "2007"
      ],
      "c": 1,
      "info": "La Grande Vadrouille est sorti en 1966.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Corniaud » ?",
      "a": [
        "Michel Hazanavicius",
        "Gérard Oury",
        "Jean-Pierre Melville",
        "Jean-Marie Poiré"
      ],
      "c": 1,
      "info": "Gérard Oury, 1965.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Corniaud » ?",
      "a": [
        "1965",
        "1994",
        "2007",
        "1958"
      ],
      "c": 0,
      "info": "Le Corniaud est sorti en 1965.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Tontons flingueurs » ?",
      "a": [
        "Francis Veber",
        "Jean-Marie Poiré",
        "Henri-Georges Clouzot",
        "Georges Lautner"
      ],
      "c": 3,
      "info": "Georges Lautner, 1963.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Tontons flingueurs » ?",
      "a": [
        "1965",
        "1962",
        "1963",
        "1995"
      ],
      "c": 2,
      "info": "Les Tontons flingueurs est sorti en 1963.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Dîner de cons » ?",
      "a": [
        "Francis Veber",
        "Marcel Carné",
        "Jean-Pierre Jeunet et Marc Caro",
        "Jean-Pierre Melville"
      ],
      "c": 0,
      "info": "Francis Veber, 1998.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Dîner de cons » ?",
      "a": [
        "1998",
        "1960",
        "1958",
        "1996"
      ],
      "c": 0,
      "info": "Le Dîner de cons est sorti en 1998.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Quatre Cents Coups » ?",
      "a": [
        "François Truffaut",
        "Henri-Georges Clouzot",
        "Dany Boon",
        "Henri Verneuil"
      ],
      "c": 0,
      "info": "François Truffaut, 1959.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Quatre Cents Coups » ?",
      "a": [
        "1958",
        "1970",
        "1959",
        "1938"
      ],
      "c": 2,
      "info": "Les Quatre Cents Coups est sorti en 1959.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Jules et Jim » ?",
      "a": [
        "François Truffaut",
        "Georges Lautner",
        "Jean Renoir",
        "Olivier Dahan"
      ],
      "c": 0,
      "info": "François Truffaut, 1962.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Jules et Jim » ?",
      "a": [
        "2008",
        "1998",
        "2001",
        "1962"
      ],
      "c": 3,
      "info": "Jules et Jim est sorti en 1962.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « À bout de souffle » ?",
      "a": [
        "Jean-Marie Poiré",
        "Patrice Leconte",
        "Jean-Luc Godard",
        "Marcel Carné"
      ],
      "c": 2,
      "info": "Jean-Luc Godard, 1960.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « À bout de souffle » ?",
      "a": [
        "1965",
        "2017",
        "2006",
        "1960"
      ],
      "c": 3,
      "info": "À bout de souffle est sorti en 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Mépris » ?",
      "a": [
        "Michel Hazanavicius",
        "Jean-Luc Godard",
        "Jacques Tati",
        "Jean-Pierre Jeunet"
      ],
      "c": 1,
      "info": "Jean-Luc Godard, 1963.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Mépris » ?",
      "a": [
        "1994",
        "1963",
        "1960",
        "1969"
      ],
      "c": 1,
      "info": "Le Mépris est sorti en 1963.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Playtime » ?",
      "a": [
        "Marcel Carné",
        "Gérard Oury",
        "Jacques Tati",
        "Michel Hazanavicius"
      ],
      "c": 2,
      "info": "Jacques Tati, 1967.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Playtime » ?",
      "a": [
        "2001",
        "1991",
        "1982",
        "1967"
      ],
      "c": 3,
      "info": "Playtime est sorti en 1967.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Mon oncle » ?",
      "a": [
        "Claude Autant-Lara",
        "Alain Chabat",
        "Jacques Tati",
        "Henri Verneuil"
      ],
      "c": 2,
      "info": "Jacques Tati, 1958.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Mon oncle » ?",
      "a": [
        "2006",
        "2007",
        "1958",
        "1993"
      ],
      "c": 2,
      "info": "Mon oncle est sorti en 1958.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Vacances de monsieur Hulot » ?",
      "a": [
        "Olivier Dahan",
        "Jacques Tati",
        "Gérard Oury",
        "Jean-Pierre Melville"
      ],
      "c": 1,
      "info": "Jacques Tati, 1953.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Vacances de monsieur Hulot » ?",
      "a": [
        "1960",
        "1982",
        "1953",
        "2007"
      ],
      "c": 2,
      "info": "Les Vacances de monsieur Hulot est sorti en 1953.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Hôtel du Nord » ?",
      "a": [
        "Alain Chabat",
        "Marcel Carné",
        "Jean Renoir",
        "Patrice Leconte"
      ],
      "c": 1,
      "info": "Marcel Carné, 1938.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Hôtel du Nord » ?",
      "a": [
        "1938",
        "1939",
        "1956",
        "2017"
      ],
      "c": 0,
      "info": "Hôtel du Nord est sorti en 1938.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Enfants du paradis » ?",
      "a": [
        "Francis Veber",
        "Jean-Marie Poiré",
        "Jean-Pierre Jeunet",
        "Marcel Carné"
      ],
      "c": 3,
      "info": "Marcel Carné, 1945.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Enfants du paradis » ?",
      "a": [
        "1970",
        "1939",
        "1945",
        "1978"
      ],
      "c": 2,
      "info": "Les Enfants du paradis est sorti en 1945.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Quai des brumes » ?",
      "a": [
        "Marcel Carné",
        "Alain Berbérian",
        "Henri-Georges Clouzot",
        "Olivier Dahan"
      ],
      "c": 0,
      "info": "Marcel Carné, 1938.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Quai des brumes » ?",
      "a": [
        "1960",
        "2002",
        "1938",
        "1963"
      ],
      "c": 2,
      "info": "Quai des brumes est sorti en 1938.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Règle du jeu » ?",
      "a": [
        "Jacques Tati",
        "Jean Renoir",
        "Jean-Pierre Jeunet et Marc Caro",
        "Claude Autant-Lara"
      ],
      "c": 1,
      "info": "Jean Renoir, 1939.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Règle du jeu » ?",
      "a": [
        "1998",
        "1939",
        "1969",
        "1937"
      ],
      "c": 1,
      "info": "La Règle du jeu est sorti en 1939.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Grande Illusion » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Olivier Nakache et Éric Toledano",
        "Jean Renoir",
        "Gérard Oury"
      ],
      "c": 2,
      "info": "Jean Renoir, 1937.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Grande Illusion » ?",
      "a": [
        "1970",
        "1937",
        "1969",
        "1945"
      ],
      "c": 1,
      "info": "La Grande Illusion est sorti en 1937.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Traversée de Paris » ?",
      "a": [
        "Claude Autant-Lara",
        "Jean-Luc Godard",
        "Michel Hazanavicius",
        "Jean-Marie Poiré"
      ],
      "c": 0,
      "info": "Claude Autant-Lara, 1956.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Traversée de Paris » ?",
      "a": [
        "1956",
        "1967",
        "1958",
        "1996"
      ],
      "c": 0,
      "info": "La Traversée de Paris est sorti en 1956.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Salaire de la peur » ?",
      "a": [
        "Dany Boon",
        "Jean-Pierre Jeunet",
        "Henri-Georges Clouzot",
        "Patrice Leconte"
      ],
      "c": 2,
      "info": "Henri-Georges Clouzot, 1953.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Salaire de la peur » ?",
      "a": [
        "1953",
        "1945",
        "1979",
        "1978"
      ],
      "c": 0,
      "info": "Le Salaire de la peur est sorti en 1953.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Diaboliques » ?",
      "a": [
        "François Truffaut",
        "Jean-Pierre Melville",
        "Marcel Carné",
        "Henri-Georges Clouzot"
      ],
      "c": 3,
      "info": "Henri-Georges Clouzot, 1955.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Diaboliques » ?",
      "a": [
        "1945",
        "1955",
        "1953",
        "2011"
      ],
      "c": 1,
      "info": "Les Diaboliques est sorti en 1955.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Cercle rouge » ?",
      "a": [
        "Jean-Pierre Melville",
        "Marcel Carné",
        "Alain Chabat",
        "Gérard Oury"
      ],
      "c": 0,
      "info": "Jean-Pierre Melville, 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Cercle rouge » ?",
      "a": [
        "1969",
        "1967",
        "2011",
        "1970"
      ],
      "c": 3,
      "info": "Le Cercle rouge est sorti en 1970.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Samouraï » ?",
      "a": [
        "Olivier Dahan",
        "Jean-Pierre Melville",
        "Alain Berbérian",
        "Michel Hazanavicius"
      ],
      "c": 1,
      "info": "Jean-Pierre Melville, 1967.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Samouraï » ?",
      "a": [
        "1965",
        "1959",
        "1967",
        "1945"
      ],
      "c": 2,
      "info": "Le Samouraï est sorti en 1967.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Un singe en hiver » ?",
      "a": [
        "Michel Hazanavicius",
        "Henri Verneuil",
        "Alain Berbérian",
        "Dany Boon"
      ],
      "c": 1,
      "info": "Henri Verneuil, 1962.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Un singe en hiver » ?",
      "a": [
        "1982",
        "1958",
        "1962",
        "2017"
      ],
      "c": 2,
      "info": "Un singe en hiver est sorti en 1962.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Clan des Siciliens » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Alain Chabat",
        "Marcel Carné",
        "Henri Verneuil"
      ],
      "c": 3,
      "info": "Henri Verneuil, 1969.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Clan des Siciliens » ?",
      "a": [
        "1998",
        "2001",
        "1969",
        "1959"
      ],
      "c": 2,
      "info": "Le Clan des Siciliens est sorti en 1969.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Fabuleux Destin d’Amélie Poulain » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Olivier Nakache et Éric Toledano",
        "Henri Verneuil",
        "Alain Berbérian"
      ],
      "c": 0,
      "info": "Jean-Pierre Jeunet, 2001.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Fabuleux Destin d’Amélie Poulain » ?",
      "a": [
        "2002",
        "1991",
        "2001",
        "1966"
      ],
      "c": 2,
      "info": "Le Fabuleux Destin d’Amélie Poulain est sorti en 2001.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Delicatessen » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Olivier Nakache et Éric Toledano",
        "Mathieu Kassovitz",
        "Jean-Pierre Jeunet et Marc Caro"
      ],
      "c": 3,
      "info": "Jean-Pierre Jeunet et Marc Caro, 1991.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Delicatessen » ?",
      "a": [
        "1953",
        "2002",
        "1960",
        "1991"
      ],
      "c": 3,
      "info": "Delicatessen est sorti en 1991.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Cité des enfants perdus » ?",
      "a": [
        "Francis Veber",
        "Olivier Dahan",
        "Jean-Pierre Jeunet et Marc Caro",
        "Henri Verneuil"
      ],
      "c": 2,
      "info": "Jean-Pierre Jeunet et Marc Caro, 1995.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Cité des enfants perdus » ?",
      "a": [
        "1962",
        "1958",
        "1953",
        "1995"
      ],
      "c": 3,
      "info": "La Cité des enfants perdus est sorti en 1995.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Haine » ?",
      "a": [
        "Mathieu Kassovitz",
        "Alain Berbérian",
        "Dany Boon",
        "Jacques Tati"
      ],
      "c": 0,
      "info": "Mathieu Kassovitz, 1995.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Haine » ?",
      "a": [
        "1995",
        "1994",
        "2011",
        "2017"
      ],
      "c": 0,
      "info": "La Haine est sorti en 1995.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Môme » ?",
      "a": [
        "Jean-Luc Godard",
        "Henri-Georges Clouzot",
        "Jean-Pierre Melville",
        "Olivier Dahan"
      ],
      "c": 3,
      "info": "Olivier Dahan, 2007.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Môme » ?",
      "a": [
        "2008",
        "1965",
        "2007",
        "2006"
      ],
      "c": 2,
      "info": "La Môme est sorti en 2007.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Intouchables » ?",
      "a": [
        "Francis Veber",
        "Henri Verneuil",
        "Marcel Carné",
        "Olivier Nakache et Éric Toledano"
      ],
      "c": 3,
      "info": "Olivier Nakache et Éric Toledano, 2011.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Intouchables » ?",
      "a": [
        "2011",
        "2007",
        "1938",
        "1993"
      ],
      "c": 0,
      "info": "Intouchables est sorti en 2011.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Sens de la fête » ?",
      "a": [
        "Jacques Tati",
        "Olivier Nakache et Éric Toledano",
        "Olivier Dahan",
        "Henri-Georges Clouzot"
      ],
      "c": 1,
      "info": "Olivier Nakache et Éric Toledano, 2017.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Sens de la fête » ?",
      "a": [
        "2017",
        "1965",
        "2006",
        "2001"
      ],
      "c": 0,
      "info": "Le Sens de la fête est sorti en 2017.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Cité de la peur » ?",
      "a": [
        "Michel Hazanavicius",
        "Alain Berbérian",
        "Olivier Nakache et Éric Toledano",
        "Claude Autant-Lara"
      ],
      "c": 1,
      "info": "Alain Berbérian, 1994.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « La Cité de la peur » ?",
      "a": [
        "1995",
        "1955",
        "1963",
        "1994"
      ],
      "c": 3,
      "info": "La Cité de la peur est sorti en 1994.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Astérix et Obélix : Mission Cléopâtre » ?",
      "a": [
        "Georges Lautner",
        "Alain Chabat",
        "Jean-Pierre Jeunet",
        "Henri Verneuil"
      ],
      "c": 1,
      "info": "Alain Chabat, 2002.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Astérix et Obélix : Mission Cléopâtre » ?",
      "a": [
        "1966",
        "1962",
        "1995",
        "2002"
      ],
      "c": 3,
      "info": "Astérix et Obélix : Mission Cléopâtre est sorti en 2002.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « OSS 117 : Le Caire, nid d’espions » ?",
      "a": [
        "Jean Renoir",
        "Michel Hazanavicius",
        "Olivier Nakache et Éric Toledano",
        "Jean-Pierre Jeunet"
      ],
      "c": 1,
      "info": "Michel Hazanavicius, 2006.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « OSS 117 : Le Caire, nid d’espions » ?",
      "a": [
        "1995",
        "1970",
        "1937",
        "2006"
      ],
      "c": 3,
      "info": "OSS 117 : Le Caire, nid d’espions est sorti en 2006.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « The Artist » ?",
      "a": [
        "Jean-Pierre Melville",
        "Michel Hazanavicius",
        "Henri-Georges Clouzot",
        "Alain Berbérian"
      ],
      "c": 1,
      "info": "Michel Hazanavicius, 2011.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « The Artist » ?",
      "a": [
        "1965",
        "1958",
        "1966",
        "2011"
      ],
      "c": 3,
      "info": "The Artist est sorti en 2011.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Bienvenue chez les Ch’tis » ?",
      "a": [
        "Mathieu Kassovitz",
        "Claude Autant-Lara",
        "Dany Boon",
        "Gérard Oury"
      ],
      "c": 2,
      "info": "Dany Boon, 2008.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Bienvenue chez les Ch’tis » ?",
      "a": [
        "1993",
        "2006",
        "2008",
        "1959"
      ],
      "c": 2,
      "info": "Bienvenue chez les Ch’tis est sorti en 2008.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Visiteurs » ?",
      "a": [
        "Henri-Georges Clouzot",
        "François Truffaut",
        "Jean-Marie Poiré",
        "Gérard Oury"
      ],
      "c": 2,
      "info": "Jean-Marie Poiré, 1993.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Visiteurs » ?",
      "a": [
        "1993",
        "1962",
        "1970",
        "1994"
      ],
      "c": 0,
      "info": "Les Visiteurs est sorti en 1993.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Père Noël est une ordure » ?",
      "a": [
        "Dany Boon",
        "Georges Lautner",
        "Jean-Luc Godard",
        "Jean-Marie Poiré"
      ],
      "c": 3,
      "info": "Jean-Marie Poiré, 1982.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Le Père Noël est une ordure » ?",
      "a": [
        "1945",
        "2006",
        "1978",
        "1982"
      ],
      "c": 3,
      "info": "Le Père Noël est une ordure est sorti en 1982.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Bronzés » ?",
      "a": [
        "Patrice Leconte",
        "Jacques Tati",
        "Jean-Pierre Jeunet et Marc Caro",
        "Marcel Carné"
      ],
      "c": 0,
      "info": "Patrice Leconte, 1978.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Bronzés » ?",
      "a": [
        "1970",
        "1978",
        "1963",
        "1960"
      ],
      "c": 1,
      "info": "Les Bronzés est sorti en 1978.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Bronzés font du ski » ?",
      "a": [
        "François Truffaut",
        "Michel Hazanavicius",
        "Patrice Leconte",
        "Mathieu Kassovitz"
      ],
      "c": 2,
      "info": "Patrice Leconte, 1979.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Les Bronzés font du ski » ?",
      "a": [
        "1998",
        "1969",
        "1979",
        "2011"
      ],
      "c": 2,
      "info": "Les Bronzés font du ski est sorti en 1979.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Ridicule » ?",
      "a": [
        "Francis Veber",
        "Patrice Leconte",
        "François Truffaut",
        "Georges Lautner"
      ],
      "c": 1,
      "info": "Patrice Leconte, 1996.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année est sorti « Ridicule » ?",
      "a": [
        "1956",
        "1991",
        "1998",
        "1996"
      ],
      "c": 3,
      "info": "Ridicule est sorti en 1996.",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Parrain » ?",
      "a": [
        "Steven Spielberg",
        "Francis Ford Coppola",
        "Quentin Tarantino",
        "James Cameron"
      ],
      "c": 1,
      "info": "Francis Ford Coppola, 1972.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Le Parrain » ?",
      "a": [
        "1993",
        "1979",
        "1985",
        "1972"
      ],
      "c": 3,
      "info": "Le Parrain est sorti en 1972.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Apocalypse Now » ?",
      "a": [
        "James Cameron",
        "Francis Ford Coppola",
        "Quentin Tarantino",
        "Robert Zemeckis"
      ],
      "c": 1,
      "info": "Francis Ford Coppola, 1979.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Apocalypse Now » ?",
      "a": [
        "1994",
        "1984",
        "1972",
        "1979"
      ],
      "c": 3,
      "info": "Apocalypse Now est sorti en 1979.",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Les Dents de la mer » ?",
      "a": [
        "Francis Ford Coppola",
        "Steven Spielberg",
        "Robert Zemeckis",
        "James Cameron"
      ],
      "c": 1,
      "info": "Steven Spielberg, 1975.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Les Dents de la mer » ?",
      "a": [
        "1979",
        "1972",
        "1982",
        "1975"
      ],
      "c": 3,
      "info": "Les Dents de la mer est sorti en 1975.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « E.T., l’extra-terrestre » ?",
      "a": [
        "James Cameron",
        "Francis Ford Coppola",
        "Steven Spielberg",
        "Robert Zemeckis"
      ],
      "c": 2,
      "info": "Steven Spielberg, 1982.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « E.T., l’extra-terrestre » ?",
      "a": [
        "1972",
        "1982",
        "1979",
        "1994"
      ],
      "c": 1,
      "info": "E.T., l’extra-terrestre est sorti en 1982.",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Jurassic Park » ?",
      "a": [
        "James Cameron",
        "Quentin Tarantino",
        "Steven Spielberg",
        "Robert Zemeckis"
      ],
      "c": 2,
      "info": "Steven Spielberg, 1993.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Jurassic Park » ?",
      "a": [
        "1993",
        "1979",
        "1984",
        "1982"
      ],
      "c": 0,
      "info": "Jurassic Park est sorti en 1993.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Titanic » ?",
      "a": [
        "Francis Ford Coppola",
        "Steven Spielberg",
        "James Cameron",
        "Robert Zemeckis"
      ],
      "c": 2,
      "info": "James Cameron, 1997.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Titanic » ?",
      "a": [
        "1993",
        "1997",
        "1979",
        "1985"
      ],
      "c": 1,
      "info": "Titanic est sorti en 1997.",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Terminator » ?",
      "a": [
        "Quentin Tarantino",
        "James Cameron",
        "Steven Spielberg",
        "Francis Ford Coppola"
      ],
      "c": 1,
      "info": "James Cameron, 1984.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Terminator » ?",
      "a": [
        "1993",
        "1984",
        "1972",
        "1985"
      ],
      "c": 1,
      "info": "Terminator est sorti en 1984.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Retour vers le futur » ?",
      "a": [
        "Robert Zemeckis",
        "Steven Spielberg",
        "Quentin Tarantino",
        "James Cameron"
      ],
      "c": 0,
      "info": "Robert Zemeckis, 1985.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Retour vers le futur » ?",
      "a": [
        "1994",
        "1985",
        "1997",
        "1979"
      ],
      "c": 1,
      "info": "Retour vers le futur est sorti en 1985.",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Forrest Gump » ?",
      "a": [
        "Francis Ford Coppola",
        "Robert Zemeckis",
        "James Cameron",
        "Quentin Tarantino"
      ],
      "c": 1,
      "info": "Robert Zemeckis, 1994.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Forrest Gump » ?",
      "a": [
        "1994",
        "1984",
        "1985",
        "1979"
      ],
      "c": 0,
      "info": "Forrest Gump est sorti en 1994.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Pulp Fiction » ?",
      "a": [
        "James Cameron",
        "Steven Spielberg",
        "Quentin Tarantino",
        "Francis Ford Coppola"
      ],
      "c": 2,
      "info": "Quentin Tarantino, 1994.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "En quelle année est sorti « Pulp Fiction » ?",
      "a": [
        "1997",
        "1984",
        "1975",
        "1994"
      ],
      "c": 3,
      "info": "Pulp Fiction est sorti en 1994.",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « La Grande Illusion » ?",
      "a": [
        "Georges Lautner",
        "Alain Resnais",
        "Jean Renoir",
        "Dany Boon"
      ],
      "c": 2,
      "info": "La Grande Illusion (1937) : réalisation de Jean Renoir.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Grande Illusion » est-il sorti ?",
      "a": [
        "1996",
        "1937",
        "1963",
        "1980"
      ],
      "c": 1,
      "info": "La Grande Illusion est sorti en 1937.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Grande Illusion » ?",
      "a": [
        "Patrick Bruel",
        "Vincent Cassel",
        "Gérard Philipe",
        "Jean Gabin"
      ],
      "c": 3,
      "info": "Jean Gabin joue dans La Grande Illusion (1937).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Grande Illusion » ?",
      "a": [
        "Pierre Fresnay",
        "Simone Signoret",
        "Charlotte Gainsbourg",
        "Suzy Delair"
      ],
      "c": 0,
      "info": "Pierre Fresnay joue dans La Grande Illusion (1937).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean Renoir ?",
      "a": [
        "À bout de souffle",
        "La Grande Vadrouille",
        "La Grande Illusion",
        "Les Diaboliques"
      ],
      "c": 2,
      "info": "Jean Renoir a réalisé La Grande Illusion (1937).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "La Grande Illusion",
        "La Classe américaine",
        "Samba",
        "Monsieur Hire"
      ],
      "c": 0,
      "info": "Jean Gabin figure dans La Grande Illusion (1937).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Grande Illusion » ?",
      "a": [
        "Années 1970",
        "Années 1990",
        "Années 1930",
        "Années 2010"
      ],
      "c": 2,
      "info": "La Grande Illusion est sorti en 1937, dans les années 1930.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Pierre Fresnay ?",
      "a": [
        "Les Rivières pourpres",
        "Les Diaboliques",
        "Le Samouraï",
        "La Grande Illusion"
      ],
      "c": 3,
      "info": "Jean Gabin et Pierre Fresnay jouent dans La Grande Illusion (1937).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Règle du jeu » ?",
      "a": [
        "Mathieu Kassovitz",
        "Jean Renoir",
        "Claude Autant-Lara",
        "Michel Hazanavicius"
      ],
      "c": 1,
      "info": "La Règle du jeu (1939) : réalisation de Jean Renoir.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Règle du jeu » est-il sorti ?",
      "a": [
        "1998",
        "1956",
        "1939",
        "1954"
      ],
      "c": 2,
      "info": "La Règle du jeu est sorti en 1939.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Règle du jeu » ?",
      "a": [
        "Corinne Marchand",
        "Jacques Villeret",
        "Louis Jouvet",
        "Nora Gregor"
      ],
      "c": 3,
      "info": "Nora Gregor joue dans La Règle du jeu (1939).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Règle du jeu » ?",
      "a": [
        "Marina Foïs",
        "Marcel Dalio",
        "Bourvil",
        "François Périer"
      ],
      "c": 1,
      "info": "Marcel Dalio joue dans La Règle du jeu (1939).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean Renoir ?",
      "a": [
        "Les Fugitifs",
        "La Règle du jeu",
        "La Cité de la peur",
        "Le Cercle rouge"
      ],
      "c": 1,
      "info": "Jean Renoir a réalisé La Règle du jeu (1939).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Nora Gregor ?",
      "a": [
        "Le Dîner de cons",
        "Les Diaboliques",
        "La Règle du jeu",
        "Bande à part"
      ],
      "c": 2,
      "info": "Nora Gregor figure dans La Règle du jeu (1939).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Règle du jeu » ?",
      "a": [
        "Années 1940",
        "Années 1990",
        "Années 1950",
        "Années 1930"
      ],
      "c": 3,
      "info": "La Règle du jeu est sorti en 1939, dans les années 1930.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Nora Gregor et Marcel Dalio ?",
      "a": [
        "La Règle du jeu",
        "Les Bronzés font du ski",
        "Intouchables",
        "Les Tontons flingueurs"
      ],
      "c": 0,
      "info": "Nora Gregor et Marcel Dalio jouent dans La Règle du jeu (1939).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Bête humaine » ?",
      "a": [
        "Jean Renoir",
        "Agnès Varda",
        "Alain Resnais",
        "Georges Lautner"
      ],
      "c": 0,
      "info": "La Bête humaine (1938) : réalisation de Jean Renoir.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Bête humaine » est-il sorti ?",
      "a": [
        "1973",
        "1938",
        "1989",
        "2011"
      ],
      "c": 1,
      "info": "La Bête humaine est sorti en 1938.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Bête humaine » ?",
      "a": [
        "Jean Gabin",
        "Yves Montand",
        "Nora Gregor",
        "Emmanuelle Riva"
      ],
      "c": 0,
      "info": "Jean Gabin joue dans La Bête humaine (1938).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Bête humaine » ?",
      "a": [
        "Simone Signoret",
        "Charles Vanel",
        "Simone Simon",
        "Jean Seberg"
      ],
      "c": 2,
      "info": "Simone Simon joue dans La Bête humaine (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean Renoir ?",
      "a": [
        "La Guerre des boutons",
        "La Cité des enfants perdus",
        "La Bête humaine",
        "Astérix et Obélix : Mission Cléopâtre"
      ],
      "c": 2,
      "info": "Jean Renoir a réalisé La Bête humaine (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "Hiroshima mon amour",
        "Les Tontons flingueurs",
        "La Cité de la peur",
        "La Bête humaine"
      ],
      "c": 3,
      "info": "Jean Gabin figure dans La Bête humaine (1938).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Bête humaine » ?",
      "a": [
        "Années 1960",
        "Années 1980",
        "Années 2010",
        "Années 1930"
      ],
      "c": 3,
      "info": "La Bête humaine est sorti en 1938, dans les années 1930.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Simone Simon ?",
      "a": [
        "Les Bronzés font du ski",
        "Le Corniaud",
        "La Bête humaine",
        "Les Visiteurs"
      ],
      "c": 2,
      "info": "Jean Gabin et Simone Simon jouent dans La Bête humaine (1938).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Quai des brumes » ?",
      "a": [
        "Dany Boon",
        "Alain Resnais",
        "Alain Berbérian",
        "Marcel Carné"
      ],
      "c": 3,
      "info": "Le Quai des brumes (1938) : réalisation de Marcel Carné.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Quai des brumes » est-il sorti ?",
      "a": [
        "1985",
        "1965",
        "1938",
        "1956"
      ],
      "c": 2,
      "info": "Le Quai des brumes est sorti en 1938.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Quai des brumes » ?",
      "a": [
        "Jacques Villeret",
        "Jean Gabin",
        "Ron Perlman",
        "Omar Sy"
      ],
      "c": 1,
      "info": "Jean Gabin joue dans Le Quai des brumes (1938).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Quai des brumes » ?",
      "a": [
        "Michel Piccoli",
        "Suzy Delair",
        "Michèle Morgan",
        "Jean Rochefort"
      ],
      "c": 2,
      "info": "Michèle Morgan joue dans Le Quai des brumes (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Marcel Carné ?",
      "a": [
        "La Haine",
        "Le Doulos",
        "Le Salaire de la peur",
        "Le Quai des brumes"
      ],
      "c": 3,
      "info": "Marcel Carné a réalisé Le Quai des brumes (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "Les Aventures de Rabbi Jacob",
        "Le Prénom",
        "Le Quai des brumes",
        "Le Gendarme de Saint-Tropez"
      ],
      "c": 2,
      "info": "Jean Gabin figure dans Le Quai des brumes (1938).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Quai des brumes » ?",
      "a": [
        "Années 2000",
        "Années 1930",
        "Années 1990",
        "Années 1960"
      ],
      "c": 1,
      "info": "Le Quai des brumes est sorti en 1938, dans les années 1930.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Michèle Morgan ?",
      "a": [
        "Le Quai des brumes",
        "La Môme",
        "Le Retour du Grand Blond",
        "Alexandre le Bienheureux"
      ],
      "c": 0,
      "info": "Jean Gabin et Michèle Morgan jouent dans Le Quai des brumes (1938).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Hôtel du Nord » ?",
      "a": [
        "Marcel Carné",
        "Michel Hazanavicius",
        "Georges Lautner",
        "Francis Veber"
      ],
      "c": 0,
      "info": "Hôtel du Nord (1938) : réalisation de Marcel Carné.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Hôtel du Nord » est-il sorti ?",
      "a": [
        "1938",
        "2002",
        "1965",
        "1980"
      ],
      "c": 0,
      "info": "Hôtel du Nord est sorti en 1938.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Hôtel du Nord » ?",
      "a": [
        "Emmanuelle Riva",
        "Marion Cotillard",
        "Anémone",
        "Arletty"
      ],
      "c": 3,
      "info": "Arletty joue dans Hôtel du Nord (1938).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Hôtel du Nord » ?",
      "a": [
        "Serge Reggiani",
        "Marcel Dalio",
        "Marie-Laure Dougnac",
        "Louis Jouvet"
      ],
      "c": 3,
      "info": "Louis Jouvet joue dans Hôtel du Nord (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Marcel Carné ?",
      "a": [
        "La Soupe aux choux",
        "Cléo de 5 à 7",
        "Le Doulos",
        "Hôtel du Nord"
      ],
      "c": 3,
      "info": "Marcel Carné a réalisé Hôtel du Nord (1938).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Arletty ?",
      "a": [
        "Hôtel du Nord",
        "La Guerre des boutons",
        "Les Visiteurs",
        "La Folie des grandeurs"
      ],
      "c": 0,
      "info": "Arletty figure dans Hôtel du Nord (1938).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Hôtel du Nord » ?",
      "a": [
        "Années 1980",
        "Années 1990",
        "Années 1930",
        "Années 2000"
      ],
      "c": 2,
      "info": "Hôtel du Nord est sorti en 1938, dans les années 1930.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Arletty et Louis Jouvet ?",
      "a": [
        "La Règle du jeu",
        "Hôtel du Nord",
        "Le Bonheur",
        "Les Fugitifs"
      ],
      "c": 1,
      "info": "Arletty et Louis Jouvet jouent dans Hôtel du Nord (1938).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Jour se lève » ?",
      "a": [
        "Jean Cocteau",
        "Francis Veber",
        "Olivier Nakache et Éric Toledano",
        "Marcel Carné"
      ],
      "c": 3,
      "info": "Le Jour se lève (1939) : réalisation de Marcel Carné.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Jour se lève » est-il sorti ?",
      "a": [
        "1972",
        "1991",
        "2010",
        "1939"
      ],
      "c": 3,
      "info": "Le Jour se lève est sorti en 1939.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Jour se lève » ?",
      "a": [
        "Dominique Pinon",
        "Jean-Claude Drouot",
        "Jean Gabin",
        "Brigitte Bardot"
      ],
      "c": 2,
      "info": "Jean Gabin joue dans Le Jour se lève (1939).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Jour se lève » ?",
      "a": [
        "Macha Méril",
        "Jules Berry",
        "Claude Giraud",
        "Maria Casarès"
      ],
      "c": 1,
      "info": "Jules Berry joue dans Le Jour se lève (1939).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Marcel Carné ?",
      "a": [
        "Monsieur Hire",
        "Cléo de 5 à 7",
        "La Classe américaine",
        "Le Jour se lève"
      ],
      "c": 3,
      "info": "Marcel Carné a réalisé Le Jour se lève (1939).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "La Guerre des boutons",
        "Bande à part",
        "Le Dîner de cons",
        "Le Jour se lève"
      ],
      "c": 3,
      "info": "Jean Gabin figure dans Le Jour se lève (1939).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Jour se lève » ?",
      "a": [
        "Années 1980",
        "Années 1970",
        "Années 2010",
        "Années 1930"
      ],
      "c": 3,
      "info": "Le Jour se lève est sorti en 1939, dans les années 1930.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Jules Berry ?",
      "a": [
        "Le Jour se lève",
        "La Grande Vadrouille",
        "Astérix et Obélix : Mission Cléopâtre",
        "Le Gendarme de Saint-Tropez"
      ],
      "c": 0,
      "info": "Jean Gabin et Jules Berry jouent dans Le Jour se lève (1939).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Enfants du paradis » ?",
      "a": [
        "Gérard Oury",
        "Michel Hazanavicius et Dominique Mézerette",
        "Marcel Carné",
        "Jean-Luc Godard"
      ],
      "c": 2,
      "info": "Les Enfants du paradis (1945) : réalisation de Marcel Carné.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Enfants du paradis » est-il sorti ?",
      "a": [
        "2011",
        "1947",
        "2007",
        "1945"
      ],
      "c": 3,
      "info": "Les Enfants du paradis est sorti en 1945.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Enfants du paradis » ?",
      "a": [
        "Ron Perlman",
        "Emmanuelle Riva",
        "Jacques Villeret",
        "Arletty"
      ],
      "c": 3,
      "info": "Arletty joue dans Les Enfants du paradis (1945).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Enfants du paradis » ?",
      "a": [
        "Charles Vanel",
        "Jean-Louis Barrault",
        "Jean Carmet",
        "Marina Foïs"
      ],
      "c": 1,
      "info": "Jean-Louis Barrault joue dans Les Enfants du paradis (1945).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Marcel Carné ?",
      "a": [
        "Le Bonheur",
        "Les Enfants du paradis",
        "Monsieur Hire",
        "Le Dernier Métro"
      ],
      "c": 1,
      "info": "Marcel Carné a réalisé Les Enfants du paradis (1945).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Arletty ?",
      "a": [
        "Le Président",
        "Delicatessen",
        "La Belle et la Bête",
        "Les Enfants du paradis"
      ],
      "c": 3,
      "info": "Arletty figure dans Les Enfants du paradis (1945).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Enfants du paradis » ?",
      "a": [
        "Années 1930",
        "Années 1990",
        "Années 1950",
        "Années 1940"
      ],
      "c": 3,
      "info": "Les Enfants du paradis est sorti en 1945, dans les années 1940.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Arletty et Jean-Louis Barrault ?",
      "a": [
        "The Artist",
        "Mon oncle d'Amérique",
        "Les Enfants du paradis",
        "La Bête humaine"
      ],
      "c": 2,
      "info": "Arletty et Jean-Louis Barrault jouent dans Les Enfants du paradis (1945).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Belle et la Bête » ?",
      "a": [
        "Jean Cocteau",
        "Dany Boon",
        "Claude Autant-Lara",
        "Jean Girault"
      ],
      "c": 0,
      "info": "La Belle et la Bête (1946) : réalisation de Jean Cocteau.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Belle et la Bête » est-il sorti ?",
      "a": [
        "2001",
        "1950",
        "1985",
        "1946"
      ],
      "c": 3,
      "info": "La Belle et la Bête est sorti en 1946.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Belle et la Bête » ?",
      "a": [
        "Yves Montand",
        "Alain Chabat",
        "Catherine Deneuve",
        "Jean Marais"
      ],
      "c": 3,
      "info": "Jean Marais joue dans La Belle et la Bête (1946).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Belle et la Bête » ?",
      "a": [
        "Sandrine Bonnaire",
        "Josette Day",
        "Vincent Cassel",
        "Francis Blanche"
      ],
      "c": 1,
      "info": "Josette Day joue dans La Belle et la Bête (1946).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean Cocteau ?",
      "a": [
        "Quai des Orfèvres",
        "Mon oncle d'Amérique",
        "La Belle et la Bête",
        "La Classe américaine"
      ],
      "c": 2,
      "info": "Jean Cocteau a réalisé La Belle et la Bête (1946).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Marais ?",
      "a": [
        "Le Placard",
        "La Belle et la Bête",
        "Pierrot le Fou",
        "Un long dimanche de fiançailles"
      ],
      "c": 1,
      "info": "Jean Marais figure dans La Belle et la Bête (1946).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Belle et la Bête » ?",
      "a": [
        "Années 1950",
        "Années 1960",
        "Années 1930",
        "Années 1940"
      ],
      "c": 3,
      "info": "La Belle et la Bête est sorti en 1946, dans les années 1940.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Marais et Josette Day ?",
      "a": [
        "La Peau douce",
        "Le Dernier Métro",
        "La Belle et la Bête",
        "Les Barbouzes"
      ],
      "c": 2,
      "info": "Jean Marais et Josette Day jouent dans La Belle et la Bête (1946).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Orphée » ?",
      "a": [
        "Alain Chabat",
        "François Truffaut",
        "Agnès Varda",
        "Jean Cocteau"
      ],
      "c": 3,
      "info": "Orphée (1950) : réalisation de Jean Cocteau.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Orphée » est-il sorti ?",
      "a": [
        "1989",
        "1978",
        "1950",
        "1937"
      ],
      "c": 2,
      "info": "Orphée est sorti en 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Orphée » ?",
      "a": [
        "Benoît Poelvoorde",
        "Jacqueline Bisset",
        "Arletty",
        "Jean Marais"
      ],
      "c": 3,
      "info": "Jean Marais joue dans Orphée (1950).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Orphée » ?",
      "a": [
        "Maria Casarès",
        "Sylvie Testud",
        "Serge Reggiani",
        "Véra Clouzot"
      ],
      "c": 0,
      "info": "Maria Casarès joue dans Orphée (1950).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean Cocteau ?",
      "a": [
        "Les Bronzés",
        "Ridicule",
        "Orphée",
        "Mélodie en sous-sol"
      ],
      "c": 2,
      "info": "Jean Cocteau a réalisé Orphée (1950).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Marais ?",
      "a": [
        "Orphée",
        "OSS 117 : Rio ne répond plus",
        "Samba",
        "La Règle du jeu"
      ],
      "c": 0,
      "info": "Jean Marais figure dans Orphée (1950).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Orphée » ?",
      "a": [
        "Années 1980",
        "Années 1950",
        "Années 2000",
        "Années 1970"
      ],
      "c": 1,
      "info": "Orphée est sorti en 1950, dans les années 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Marais et Maria Casarès ?",
      "a": [
        "Orphée",
        "Astérix et Obélix : Mission Cléopâtre",
        "Le Dîner de cons",
        "Le Samouraï"
      ],
      "c": 0,
      "info": "Jean Marais et Maria Casarès jouent dans Orphée (1950).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Salaire de la peur » ?",
      "a": [
        "Claude Autant-Lara",
        "Mathieu Kassovitz",
        "Henri-Georges Clouzot",
        "Michel Hazanavicius et Dominique Mézerette"
      ],
      "c": 2,
      "info": "Le Salaire de la peur (1953) : réalisation de Henri-Georges Clouzot.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Salaire de la peur » est-il sorti ?",
      "a": [
        "1985",
        "1953",
        "2001",
        "2004"
      ],
      "c": 1,
      "info": "Le Salaire de la peur est sorti en 1953.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Salaire de la peur » ?",
      "a": [
        "Jean-Pierre Léaud",
        "Alain Chabat",
        "Gérard Philipe",
        "Yves Montand"
      ],
      "c": 3,
      "info": "Yves Montand joue dans Le Salaire de la peur (1953).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Salaire de la peur » ?",
      "a": [
        "Charles Vanel",
        "Jean-Pierre Léaud",
        "Oskar Werner",
        "Marina Foïs"
      ],
      "c": 0,
      "info": "Charles Vanel joue dans Le Salaire de la peur (1953).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Henri-Georges Clouzot ?",
      "a": [
        "La Grande Vadrouille",
        "Rien à déclarer",
        "Le Salaire de la peur",
        "OSS 117 : Rio ne répond plus"
      ],
      "c": 2,
      "info": "Henri-Georges Clouzot a réalisé Le Salaire de la peur (1953).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Yves Montand ?",
      "a": [
        "Le Salaire de la peur",
        "RRRrrrr!!!",
        "Le Placard",
        "La Belle et la Bête"
      ],
      "c": 0,
      "info": "Yves Montand figure dans Le Salaire de la peur (1953).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Salaire de la peur » ?",
      "a": [
        "Années 1950",
        "Années 1940",
        "Années 1990",
        "Années 1970"
      ],
      "c": 0,
      "info": "Le Salaire de la peur est sorti en 1953, dans les années 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Yves Montand et Charles Vanel ?",
      "a": [
        "Le Retour du Grand Blond",
        "Le Salaire de la peur",
        "Le Samouraï",
        "Les Rivières pourpres"
      ],
      "c": 1,
      "info": "Yves Montand et Charles Vanel jouent dans Le Salaire de la peur (1953).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Diaboliques » ?",
      "a": [
        "Jean-Pierre Melville",
        "Jean-Luc Godard",
        "Olivier Nakache et Éric Toledano",
        "Henri-Georges Clouzot"
      ],
      "c": 3,
      "info": "Les Diaboliques (1955) : réalisation de Henri-Georges Clouzot.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Diaboliques » est-il sorti ?",
      "a": [
        "1998",
        "2014",
        "1969",
        "1955"
      ],
      "c": 3,
      "info": "Les Diaboliques est sorti en 1955.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Diaboliques » ?",
      "a": [
        "Simone Signoret",
        "Jacques Villeret",
        "Alain Chabat",
        "Nora Gregor"
      ],
      "c": 0,
      "info": "Simone Signoret joue dans Les Diaboliques (1955).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Diaboliques » ?",
      "a": [
        "Christian Clavier",
        "Maria Casarès",
        "Louis de Funès",
        "Véra Clouzot"
      ],
      "c": 3,
      "info": "Véra Clouzot joue dans Les Diaboliques (1955).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Henri-Georges Clouzot ?",
      "a": [
        "Les Diaboliques",
        "Un singe en hiver",
        "RRRrrrr!!!",
        "La Belle et la Bête"
      ],
      "c": 0,
      "info": "Henri-Georges Clouzot a réalisé Les Diaboliques (1955).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Simone Signoret ?",
      "a": [
        "Le Doulos",
        "Un long dimanche de fiançailles",
        "Le Retour du Grand Blond",
        "Les Diaboliques"
      ],
      "c": 3,
      "info": "Simone Signoret figure dans Les Diaboliques (1955).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Diaboliques » ?",
      "a": [
        "Années 1950",
        "Années 1990",
        "Années 1960",
        "Années 2000"
      ],
      "c": 0,
      "info": "Les Diaboliques est sorti en 1955, dans les années 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Simone Signoret et Véra Clouzot ?",
      "a": [
        "L'Année dernière à Marienbad",
        "Les Diaboliques",
        "Le Père Noël est une ordure",
        "La Folie des grandeurs"
      ],
      "c": 1,
      "info": "Simone Signoret et Véra Clouzot jouent dans Les Diaboliques (1955).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Quai des Orfèvres » ?",
      "a": [
        "Henri-Georges Clouzot",
        "Olivier Dahan",
        "Henri Verneuil",
        "Olivier Nakache et Éric Toledano"
      ],
      "c": 0,
      "info": "Quai des Orfèvres (1947) : réalisation de Henri-Georges Clouzot.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Quai des Orfèvres » est-il sorti ?",
      "a": [
        "2008",
        "1960",
        "1947",
        "1953"
      ],
      "c": 2,
      "info": "Quai des Orfèvres est sorti en 1947.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Quai des Orfèvres » ?",
      "a": [
        "Nora Gregor",
        "Dustin Hoffman",
        "Louis Jouvet",
        "Brigitte Bardot"
      ],
      "c": 2,
      "info": "Louis Jouvet joue dans Quai des Orfèvres (1947).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Quai des Orfèvres » ?",
      "a": [
        "Nicole Garcia",
        "Louis de Funès",
        "Suzy Delair",
        "Jean-Pierre Léaud"
      ],
      "c": 2,
      "info": "Suzy Delair joue dans Quai des Orfèvres (1947).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Henri-Georges Clouzot ?",
      "a": [
        "Le Corniaud",
        "Quai des Orfèvres",
        "Le Président",
        "Les Fugitifs"
      ],
      "c": 1,
      "info": "Henri-Georges Clouzot a réalisé Quai des Orfèvres (1947).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Louis Jouvet ?",
      "a": [
        "La Guerre des boutons",
        "Le Rouge et le Noir",
        "Quai des Orfèvres",
        "Alexandre le Bienheureux"
      ],
      "c": 2,
      "info": "Louis Jouvet figure dans Quai des Orfèvres (1947).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Quai des Orfèvres » ?",
      "a": [
        "Années 1940",
        "Années 1990",
        "Années 1960",
        "Années 1950"
      ],
      "c": 0,
      "info": "Quai des Orfèvres est sorti en 1947, dans les années 1940.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Louis Jouvet et Suzy Delair ?",
      "a": [
        "Quai des Orfèvres",
        "Les Compères",
        "Les Rivières pourpres",
        "Jules et Jim"
      ],
      "c": 0,
      "info": "Louis Jouvet et Suzy Delair jouent dans Quai des Orfèvres (1947).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Traversée de Paris » ?",
      "a": [
        "Dany Boon",
        "Patrice Leconte",
        "Claude Autant-Lara",
        "Henri Verneuil"
      ],
      "c": 2,
      "info": "La Traversée de Paris (1956) : réalisation de Claude Autant-Lara.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Traversée de Paris » est-il sorti ?",
      "a": [
        "1947",
        "1995",
        "1993",
        "1956"
      ],
      "c": 3,
      "info": "La Traversée de Paris est sorti en 1956.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Traversée de Paris » ?",
      "a": [
        "Jean Gabin",
        "Jean-Paul Belmondo",
        "André Treton",
        "Jean-Pierre Léaud"
      ],
      "c": 0,
      "info": "Jean Gabin joue dans La Traversée de Paris (1956).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Traversée de Paris » ?",
      "a": [
        "Bourvil",
        "Françoise Dorléac",
        "Louis de Funès",
        "Jean Rochefort"
      ],
      "c": 0,
      "info": "Bourvil joue dans La Traversée de Paris (1956).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Claude Autant-Lara ?",
      "a": [
        "RRRrrrr!!!",
        "La Traversée de Paris",
        "Rien à déclarer",
        "Le Sens de la fête"
      ],
      "c": 1,
      "info": "Claude Autant-Lara a réalisé La Traversée de Paris (1956).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "Les Barbouzes",
        "À bout de souffle",
        "La Traversée de Paris",
        "La Folie des grandeurs"
      ],
      "c": 2,
      "info": "Jean Gabin figure dans La Traversée de Paris (1956).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Traversée de Paris » ?",
      "a": [
        "Années 1970",
        "Années 1950",
        "Années 2010",
        "Années 1990"
      ],
      "c": 1,
      "info": "La Traversée de Paris est sorti en 1956, dans les années 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Bourvil ?",
      "a": [
        "Un long dimanche de fiançailles",
        "Samba",
        "La Traversée de Paris",
        "The Artist"
      ],
      "c": 2,
      "info": "Jean Gabin et Bourvil jouent dans La Traversée de Paris (1956).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Rouge et le Noir » ?",
      "a": [
        "Jean Girault",
        "Gérard Oury",
        "Alain Berbérian",
        "Claude Autant-Lara"
      ],
      "c": 3,
      "info": "Le Rouge et le Noir (1954) : réalisation de Claude Autant-Lara.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Rouge et le Noir » est-il sorti ?",
      "a": [
        "1960",
        "1954",
        "1971",
        "2000"
      ],
      "c": 1,
      "info": "Le Rouge et le Noir est sorti en 1954.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Rouge et le Noir » ?",
      "a": [
        "Vincent Cassel",
        "Gérard Philipe",
        "Michel Blanc",
        "Jean Reno"
      ],
      "c": 1,
      "info": "Gérard Philipe joue dans Le Rouge et le Noir (1954).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Rouge et le Noir » ?",
      "a": [
        "Maria Casarès",
        "Danielle Darrieux",
        "Josette Day",
        "Valérie Benguigui"
      ],
      "c": 1,
      "info": "Danielle Darrieux joue dans Le Rouge et le Noir (1954).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Claude Autant-Lara ?",
      "a": [
        "Le Rouge et le Noir",
        "Bande à part",
        "Samba",
        "Cléo de 5 à 7"
      ],
      "c": 0,
      "info": "Claude Autant-Lara a réalisé Le Rouge et le Noir (1954).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Gérard Philipe ?",
      "a": [
        "L'Année dernière à Marienbad",
        "Le Rouge et le Noir",
        "The Artist",
        "Les Visiteurs"
      ],
      "c": 1,
      "info": "Gérard Philipe figure dans Le Rouge et le Noir (1954).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Rouge et le Noir » ?",
      "a": [
        "Années 1990",
        "Années 1960",
        "Années 1950",
        "Années 1980"
      ],
      "c": 2,
      "info": "Le Rouge et le Noir est sorti en 1954, dans les années 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Gérard Philipe et Danielle Darrieux ?",
      "a": [
        "Les Barbouzes",
        "La Classe américaine",
        "Le Rouge et le Noir",
        "RRRrrrr!!!"
      ],
      "c": 2,
      "info": "Gérard Philipe et Danielle Darrieux jouent dans Le Rouge et le Noir (1954).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Quatre Cents Coups » ?",
      "a": [
        "Jean-Marie Poiré",
        "Henri Verneuil",
        "Michel Hazanavicius et Dominique Mézerette",
        "François Truffaut"
      ],
      "c": 3,
      "info": "Les Quatre Cents Coups (1959) : réalisation de François Truffaut.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Quatre Cents Coups » est-il sorti ?",
      "a": [
        "1978",
        "1995",
        "1959",
        "1964"
      ],
      "c": 2,
      "info": "Les Quatre Cents Coups est sorti en 1959.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Quatre Cents Coups » ?",
      "a": [
        "Anémone",
        "Christian Clavier",
        "Jacques Villeret",
        "Jean-Pierre Léaud"
      ],
      "c": 3,
      "info": "Jean-Pierre Léaud joue dans Les Quatre Cents Coups (1959).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Quatre Cents Coups » ?",
      "a": [
        "Claire Maurier",
        "Bérénice Bejo",
        "Michèle Morgan",
        "Yves Montand"
      ],
      "c": 0,
      "info": "Claire Maurier joue dans Les Quatre Cents Coups (1959).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par François Truffaut ?",
      "a": [
        "Le Jour se lève",
        "Les Quatre Cents Coups",
        "Astérix et Obélix : Mission Cléopâtre",
        "Cléo de 5 à 7"
      ],
      "c": 1,
      "info": "François Truffaut a réalisé Les Quatre Cents Coups (1959).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean-Pierre Léaud ?",
      "a": [
        "La Classe américaine",
        "Les Aventures de Rabbi Jacob",
        "Les Quatre Cents Coups",
        "Intouchables"
      ],
      "c": 2,
      "info": "Jean-Pierre Léaud figure dans Les Quatre Cents Coups (1959).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Quatre Cents Coups » ?",
      "a": [
        "Années 1950",
        "Années 1960",
        "Années 1930",
        "Années 1990"
      ],
      "c": 0,
      "info": "Les Quatre Cents Coups est sorti en 1959, dans les années 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean-Pierre Léaud et Claire Maurier ?",
      "a": [
        "Les Quatre Cents Coups",
        "Astérix et Obélix : Mission Cléopâtre",
        "Le Corniaud",
        "La Cité de la peur"
      ],
      "c": 0,
      "info": "Jean-Pierre Léaud et Claire Maurier jouent dans Les Quatre Cents Coups (1959).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Jules et Jim » ?",
      "a": [
        "Georges Lautner",
        "Alain Chabat",
        "François Truffaut",
        "Agnès Varda"
      ],
      "c": 2,
      "info": "Jules et Jim (1962) : réalisation de François Truffaut.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Jules et Jim » est-il sorti ?",
      "a": [
        "2002",
        "1962",
        "2017",
        "1979"
      ],
      "c": 1,
      "info": "Jules et Jim est sorti en 1962.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Jules et Jim » ?",
      "a": [
        "Jean Gabin",
        "Jean-Pierre Bacri",
        "Jeanne Moreau",
        "Omar Sy"
      ],
      "c": 2,
      "info": "Jeanne Moreau joue dans Jules et Jim (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Jules et Jim » ?",
      "a": [
        "Serge Reggiani",
        "Thierry Lhermitte",
        "Oskar Werner",
        "Jean-Louis Barrault"
      ],
      "c": 2,
      "info": "Oskar Werner joue dans Jules et Jim (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par François Truffaut ?",
      "a": [
        "Les Bronzés font du ski",
        "Le Président",
        "Jules et Jim",
        "Le Doulos"
      ],
      "c": 2,
      "info": "François Truffaut a réalisé Jules et Jim (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jeanne Moreau ?",
      "a": [
        "La Grande Vadrouille",
        "À bout de souffle",
        "Jules et Jim",
        "La Traversée de Paris"
      ],
      "c": 2,
      "info": "Jeanne Moreau figure dans Jules et Jim (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Jules et Jim » ?",
      "a": [
        "Années 1940",
        "Années 1950",
        "Années 1960",
        "Années 1930"
      ],
      "c": 2,
      "info": "Jules et Jim est sorti en 1962, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jeanne Moreau et Oskar Werner ?",
      "a": [
        "Pierrot le Fou",
        "Un long dimanche de fiançailles",
        "Jules et Jim",
        "Le Quai des brumes"
      ],
      "c": 2,
      "info": "Jeanne Moreau et Oskar Werner jouent dans Jules et Jim (1962).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Peau douce » ?",
      "a": [
        "Michel Hazanavicius et Dominique Mézerette",
        "Jean Cocteau",
        "Jean Girault",
        "François Truffaut"
      ],
      "c": 3,
      "info": "La Peau douce (1964) : réalisation de François Truffaut.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Peau douce » est-il sorti ?",
      "a": [
        "1981",
        "1964",
        "1994",
        "2009"
      ],
      "c": 1,
      "info": "La Peau douce est sorti en 1964.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Peau douce » ?",
      "a": [
        "Jean Desailly",
        "Vincent Cassel",
        "Jacques Villeret",
        "Simone Signoret"
      ],
      "c": 0,
      "info": "Jean Desailly joue dans La Peau douce (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Peau douce » ?",
      "a": [
        "Sandrine Bonnaire",
        "Françoise Dorléac",
        "Jean-Pierre Léaud",
        "Louise Monot"
      ],
      "c": 1,
      "info": "Françoise Dorléac joue dans La Peau douce (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par François Truffaut ?",
      "a": [
        "Ridicule",
        "La Peau douce",
        "Pierrot le Fou",
        "Le Grand Blond avec une chaussure noire"
      ],
      "c": 1,
      "info": "François Truffaut a réalisé La Peau douce (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Desailly ?",
      "a": [
        "La Peau douce",
        "Le Salaire de la peur",
        "Le Mépris",
        "Intouchables"
      ],
      "c": 0,
      "info": "Jean Desailly figure dans La Peau douce (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Peau douce » ?",
      "a": [
        "Années 1980",
        "Années 1960",
        "Années 2010",
        "Années 1990"
      ],
      "c": 1,
      "info": "La Peau douce est sorti en 1964, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Desailly et Françoise Dorléac ?",
      "a": [
        "Ridicule",
        "Les Visiteurs",
        "Un long dimanche de fiançailles",
        "La Peau douce"
      ],
      "c": 3,
      "info": "Jean Desailly et Françoise Dorléac jouent dans La Peau douce (1964).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Nuit américaine » ?",
      "a": [
        "Jean-Pierre Jeunet et Marc Caro",
        "François Truffaut",
        "Yves Robert",
        "Jean Renoir"
      ],
      "c": 1,
      "info": "La Nuit américaine (1973) : réalisation de François Truffaut.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Nuit américaine » est-il sorti ?",
      "a": [
        "1973",
        "1938",
        "1998",
        "2014"
      ],
      "c": 0,
      "info": "La Nuit américaine est sorti en 1973.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Nuit américaine » ?",
      "a": [
        "Philippe Noiret",
        "Alain Delon",
        "Michel Blanc",
        "Jacqueline Bisset"
      ],
      "c": 3,
      "info": "Jacqueline Bisset joue dans La Nuit américaine (1973).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Nuit américaine » ?",
      "a": [
        "Claire Maurier",
        "Fanny Ardant",
        "Jean-Pierre Léaud",
        "Louis de Funès"
      ],
      "c": 2,
      "info": "Jean-Pierre Léaud joue dans La Nuit américaine (1973).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par François Truffaut ?",
      "a": [
        "Astérix et Obélix : Mission Cléopâtre",
        "La Bête humaine",
        "La Nuit américaine",
        "Mon oncle d'Amérique"
      ],
      "c": 2,
      "info": "François Truffaut a réalisé La Nuit américaine (1973).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jacqueline Bisset ?",
      "a": [
        "OSS 117 : Le Caire, nid d'espions",
        "La Môme",
        "Le Mépris",
        "La Nuit américaine"
      ],
      "c": 3,
      "info": "Jacqueline Bisset figure dans La Nuit américaine (1973).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Nuit américaine » ?",
      "a": [
        "Années 1970",
        "Années 1950",
        "Années 1930",
        "Années 1960"
      ],
      "c": 0,
      "info": "La Nuit américaine est sorti en 1973, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jacqueline Bisset et Jean-Pierre Léaud ?",
      "a": [
        "Le Bonheur",
        "Le Retour du Grand Blond",
        "Orphée",
        "La Nuit américaine"
      ],
      "c": 3,
      "info": "Jacqueline Bisset et Jean-Pierre Léaud jouent dans La Nuit américaine (1973).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Dernier Métro » ?",
      "a": [
        "François Truffaut",
        "Jean-Marie Poiré",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Agnès Varda"
      ],
      "c": 0,
      "info": "Le Dernier Métro (1980) : réalisation de François Truffaut.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Dernier Métro » est-il sorti ?",
      "a": [
        "1945",
        "1980",
        "1983",
        "2002"
      ],
      "c": 1,
      "info": "Le Dernier Métro est sorti en 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Dernier Métro » ?",
      "a": [
        "Audrey Tautou",
        "Omar Sy",
        "Catherine Deneuve",
        "François Cluzet"
      ],
      "c": 2,
      "info": "Catherine Deneuve joue dans Le Dernier Métro (1980).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Dernier Métro » ?",
      "a": [
        "Vincent Cassel",
        "Gérard Depardieu",
        "Martin Lartigue",
        "Claire Maurier"
      ],
      "c": 1,
      "info": "Gérard Depardieu joue dans Le Dernier Métro (1980).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par François Truffaut ?",
      "a": [
        "La Cité de la peur",
        "Le Dernier Métro",
        "Le Président",
        "La Haine"
      ],
      "c": 1,
      "info": "François Truffaut a réalisé Le Dernier Métro (1980).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Catherine Deneuve ?",
      "a": [
        "Les Anges gardiens",
        "Mon oncle d'Amérique",
        "Le Dernier Métro",
        "Les Bronzés font du ski"
      ],
      "c": 2,
      "info": "Catherine Deneuve figure dans Le Dernier Métro (1980).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Dernier Métro » ?",
      "a": [
        "Années 1980",
        "Années 2010",
        "Années 1930",
        "Années 1970"
      ],
      "c": 0,
      "info": "Le Dernier Métro est sorti en 1980, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Catherine Deneuve et Gérard Depardieu ?",
      "a": [
        "Les Tontons flingueurs",
        "Les Rivières pourpres",
        "Les Barbouzes",
        "Le Dernier Métro"
      ],
      "c": 3,
      "info": "Catherine Deneuve et Gérard Depardieu jouent dans Le Dernier Métro (1980).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « À bout de souffle » ?",
      "a": [
        "Jean-Luc Godard",
        "Jean-Pierre Jeunet",
        "Patrice Leconte",
        "Henri Verneuil"
      ],
      "c": 0,
      "info": "À bout de souffle (1960) : réalisation de Jean-Luc Godard.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « À bout de souffle » est-il sorti ?",
      "a": [
        "1960",
        "1979",
        "1983",
        "1955"
      ],
      "c": 0,
      "info": "À bout de souffle est sorti en 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « À bout de souffle » ?",
      "a": [
        "Brigitte Bardot",
        "Alain Chabat",
        "Jean-Paul Belmondo",
        "Charles Berling"
      ],
      "c": 2,
      "info": "Jean-Paul Belmondo joue dans À bout de souffle (1960).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « À bout de souffle » ?",
      "a": [
        "Danielle Darrieux",
        "Françoise Dorléac",
        "Jean Seberg",
        "Francis Blanche"
      ],
      "c": 2,
      "info": "Jean Seberg joue dans À bout de souffle (1960).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Luc Godard ?",
      "a": [
        "Jules et Jim",
        "RRRrrrr!!!",
        "À bout de souffle",
        "Ridicule"
      ],
      "c": 2,
      "info": "Jean-Luc Godard a réalisé À bout de souffle (1960).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean-Paul Belmondo ?",
      "a": [
        "À bout de souffle",
        "L'Année dernière à Marienbad",
        "Le Président",
        "RRRrrrr!!!"
      ],
      "c": 0,
      "info": "Jean-Paul Belmondo figure dans À bout de souffle (1960).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « À bout de souffle » ?",
      "a": [
        "Années 1960",
        "Années 2000",
        "Années 1990",
        "Années 2010"
      ],
      "c": 0,
      "info": "À bout de souffle est sorti en 1960, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean-Paul Belmondo et Jean Seberg ?",
      "a": [
        "La Chèvre",
        "À bout de souffle",
        "La Cité des enfants perdus",
        "Le Retour du Grand Blond"
      ],
      "c": 1,
      "info": "Jean-Paul Belmondo et Jean Seberg jouent dans À bout de souffle (1960).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Mépris » ?",
      "a": [
        "Gérard Oury",
        "Mathieu Kassovitz",
        "Jean-Luc Godard",
        "Jean-Pierre Jeunet"
      ],
      "c": 2,
      "info": "Le Mépris (1963) : réalisation de Jean-Luc Godard.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Mépris » est-il sorti ?",
      "a": [
        "1995",
        "1971",
        "1963",
        "1965"
      ],
      "c": 2,
      "info": "Le Mépris est sorti en 1963.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Mépris » ?",
      "a": [
        "Brigitte Bardot",
        "Ron Perlman",
        "Jean Marais",
        "Catherine Deneuve"
      ],
      "c": 0,
      "info": "Brigitte Bardot joue dans Le Mépris (1963).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Mépris » ?",
      "a": [
        "Marcel Dalio",
        "Michel Piccoli",
        "Hubert Koundé",
        "Gilles Lellouche"
      ],
      "c": 1,
      "info": "Michel Piccoli joue dans Le Mépris (1963).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Luc Godard ?",
      "a": [
        "Les Enfants du paradis",
        "La Traversée de Paris",
        "Monsieur Hire",
        "Le Mépris"
      ],
      "c": 3,
      "info": "Jean-Luc Godard a réalisé Le Mépris (1963).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Brigitte Bardot ?",
      "a": [
        "La Folie des grandeurs",
        "RRRrrrr!!!",
        "Le Mépris",
        "Le Doulos"
      ],
      "c": 2,
      "info": "Brigitte Bardot figure dans Le Mépris (1963).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Mépris » ?",
      "a": [
        "Années 1960",
        "Années 1950",
        "Années 1940",
        "Années 2010"
      ],
      "c": 0,
      "info": "Le Mépris est sorti en 1963, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Brigitte Bardot et Michel Piccoli ?",
      "a": [
        "Les Fugitifs",
        "Le Grand Blond avec une chaussure noire",
        "La Peau douce",
        "Le Mépris"
      ],
      "c": 3,
      "info": "Brigitte Bardot et Michel Piccoli jouent dans Le Mépris (1963).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Pierrot le Fou » ?",
      "a": [
        "Jean-Luc Godard",
        "Henri-Georges Clouzot",
        "Jean Renoir",
        "Henri Verneuil"
      ],
      "c": 0,
      "info": "Pierrot le Fou (1965) : réalisation de Jean-Luc Godard.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Pierrot le Fou » est-il sorti ?",
      "a": [
        "1950",
        "1945",
        "1965",
        "2014"
      ],
      "c": 2,
      "info": "Pierrot le Fou est sorti en 1965.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Pierrot le Fou » ?",
      "a": [
        "Jean-Paul Belmondo",
        "Jean Dujardin",
        "Kad Merad",
        "Jacqueline Bisset"
      ],
      "c": 0,
      "info": "Jean-Paul Belmondo joue dans Pierrot le Fou (1965).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Pierrot le Fou » ?",
      "a": [
        "Jean Rochefort",
        "Marie-Laure Dougnac",
        "Anna Karina",
        "Jamel Debbouze"
      ],
      "c": 2,
      "info": "Anna Karina joue dans Pierrot le Fou (1965).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Luc Godard ?",
      "a": [
        "Pierrot le Fou",
        "La Règle du jeu",
        "La Belle et la Bête",
        "La Classe américaine"
      ],
      "c": 0,
      "info": "Jean-Luc Godard a réalisé Pierrot le Fou (1965).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean-Paul Belmondo ?",
      "a": [
        "Les Anges gardiens",
        "Bienvenue chez les Ch'tis",
        "La Guerre des boutons",
        "Pierrot le Fou"
      ],
      "c": 3,
      "info": "Jean-Paul Belmondo figure dans Pierrot le Fou (1965).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Pierrot le Fou » ?",
      "a": [
        "Années 1960",
        "Années 2000",
        "Années 1980",
        "Années 1930"
      ],
      "c": 0,
      "info": "Pierrot le Fou est sorti en 1965, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean-Paul Belmondo et Anna Karina ?",
      "a": [
        "La Bête humaine",
        "Pierrot le Fou",
        "La Cité de la peur",
        "Quai des Orfèvres"
      ],
      "c": 1,
      "info": "Jean-Paul Belmondo et Anna Karina jouent dans Pierrot le Fou (1965).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Bande à part » ?",
      "a": [
        "Jean-Pierre Jeunet et Marc Caro",
        "Dany Boon",
        "Jean-Luc Godard",
        "Agnès Varda"
      ],
      "c": 2,
      "info": "Bande à part (1964) : réalisation de Jean-Luc Godard.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Bande à part » est-il sorti ?",
      "a": [
        "1964",
        "2001",
        "1962",
        "1996"
      ],
      "c": 0,
      "info": "Bande à part est sorti en 1964.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Bande à part » ?",
      "a": [
        "Bourvil",
        "Anna Karina",
        "Anémone",
        "Omar Sy"
      ],
      "c": 1,
      "info": "Anna Karina joue dans Bande à part (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Bande à part » ?",
      "a": [
        "Jean Reno",
        "Charles Vanel",
        "Vincent Cassel",
        "Sami Frey"
      ],
      "c": 3,
      "info": "Sami Frey joue dans Bande à part (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Luc Godard ?",
      "a": [
        "Cléo de 5 à 7",
        "Les Compères",
        "Les Quatre Cents Coups",
        "Bande à part"
      ],
      "c": 3,
      "info": "Jean-Luc Godard a réalisé Bande à part (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Anna Karina ?",
      "a": [
        "Mon oncle d'Amérique",
        "Bande à part",
        "Bienvenue chez les Ch'tis",
        "Delicatessen"
      ],
      "c": 1,
      "info": "Anna Karina figure dans Bande à part (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Bande à part » ?",
      "a": [
        "Années 2010",
        "Années 1960",
        "Années 1990",
        "Années 1970"
      ],
      "c": 1,
      "info": "Bande à part est sorti en 1964, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Anna Karina et Sami Frey ?",
      "a": [
        "Bande à part",
        "Le Clan des Siciliens",
        "Orphée",
        "La Peau douce"
      ],
      "c": 0,
      "info": "Anna Karina et Sami Frey jouent dans Bande à part (1964).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Cléo de 5 à 7 » ?",
      "a": [
        "Jean-Marie Poiré",
        "Agnès Varda",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Michel Hazanavicius"
      ],
      "c": 1,
      "info": "Cléo de 5 à 7 (1962) : réalisation de Agnès Varda.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Cléo de 5 à 7 » est-il sorti ?",
      "a": [
        "1968",
        "2012",
        "1962",
        "1995"
      ],
      "c": 2,
      "info": "Cléo de 5 à 7 est sorti en 1962.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Cléo de 5 à 7 » ?",
      "a": [
        "Corinne Marchand",
        "Benoît Poelvoorde",
        "Brigitte Bardot",
        "Charles Berling"
      ],
      "c": 0,
      "info": "Corinne Marchand joue dans Cléo de 5 à 7 (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Cléo de 5 à 7 » ?",
      "a": [
        "Jean Carmet",
        "Antoine Bourseiller",
        "Simone Simon",
        "Giorgio Albertazzi"
      ],
      "c": 1,
      "info": "Antoine Bourseiller joue dans Cléo de 5 à 7 (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Agnès Varda ?",
      "a": [
        "Le Salaire de la peur",
        "Cléo de 5 à 7",
        "Le Corniaud",
        "OSS 117 : Rio ne répond plus"
      ],
      "c": 1,
      "info": "Agnès Varda a réalisé Cléo de 5 à 7 (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Corinne Marchand ?",
      "a": [
        "Cléo de 5 à 7",
        "Delicatessen",
        "Le Prénom",
        "Le Père Noël est une ordure"
      ],
      "c": 0,
      "info": "Corinne Marchand figure dans Cléo de 5 à 7 (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Cléo de 5 à 7 » ?",
      "a": [
        "Années 1950",
        "Années 2000",
        "Années 1990",
        "Années 1960"
      ],
      "c": 3,
      "info": "Cléo de 5 à 7 est sorti en 1962, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Corinne Marchand et Antoine Bourseiller ?",
      "a": [
        "Rien à déclarer",
        "Le Prénom",
        "Cléo de 5 à 7",
        "Hôtel du Nord"
      ],
      "c": 2,
      "info": "Corinne Marchand et Antoine Bourseiller jouent dans Cléo de 5 à 7 (1962).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Sans toit ni loi » ?",
      "a": [
        "Jean-Pierre Melville",
        "Marcel Carné",
        "Agnès Varda",
        "Jean-Pierre Jeunet et Marc Caro"
      ],
      "c": 2,
      "info": "Sans toit ni loi (1985) : réalisation de Agnès Varda.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Sans toit ni loi » est-il sorti ?",
      "a": [
        "1985",
        "2014",
        "1973",
        "1939"
      ],
      "c": 0,
      "info": "Sans toit ni loi est sorti en 1985.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Sans toit ni loi » ?",
      "a": [
        "Ron Perlman",
        "Sandrine Bonnaire",
        "Vincent Cassel",
        "Bourvil"
      ],
      "c": 1,
      "info": "Sandrine Bonnaire joue dans Sans toit ni loi (1985).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Sans toit ni loi » ?",
      "a": [
        "Francis Blanche",
        "Bernard Blier",
        "Jean Seberg",
        "Macha Méril"
      ],
      "c": 3,
      "info": "Macha Méril joue dans Sans toit ni loi (1985).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Agnès Varda ?",
      "a": [
        "Le Sens de la fête",
        "La Folie des grandeurs",
        "Sans toit ni loi",
        "La Grande Vadrouille"
      ],
      "c": 2,
      "info": "Agnès Varda a réalisé Sans toit ni loi (1985).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Sandrine Bonnaire ?",
      "a": [
        "Le Mépris",
        "Un singe en hiver",
        "Bande à part",
        "Sans toit ni loi"
      ],
      "c": 3,
      "info": "Sandrine Bonnaire figure dans Sans toit ni loi (1985).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Sans toit ni loi » ?",
      "a": [
        "Années 1950",
        "Années 1970",
        "Années 1990",
        "Années 1980"
      ],
      "c": 3,
      "info": "Sans toit ni loi est sorti en 1985, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Sandrine Bonnaire et Macha Méril ?",
      "a": [
        "The Artist",
        "Sans toit ni loi",
        "Le Mépris",
        "La Guerre des boutons"
      ],
      "c": 1,
      "info": "Sandrine Bonnaire et Macha Méril jouent dans Sans toit ni loi (1985).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Bonheur » ?",
      "a": [
        "Claude Autant-Lara",
        "Michel Hazanavicius",
        "Alain Resnais",
        "Agnès Varda"
      ],
      "c": 3,
      "info": "Le Bonheur (1965) : réalisation de Agnès Varda.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Bonheur » est-il sorti ?",
      "a": [
        "1960",
        "1965",
        "1996",
        "1995"
      ],
      "c": 1,
      "info": "Le Bonheur est sorti en 1965.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Bonheur » ?",
      "a": [
        "Philippe Noiret",
        "Jean-Claude Drouot",
        "Jean Desailly",
        "Jeanne Moreau"
      ],
      "c": 1,
      "info": "Jean-Claude Drouot joue dans Le Bonheur (1965).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Bonheur » ?",
      "a": [
        "Marina Foïs",
        "Jean Seberg",
        "Sandrine Bonnaire",
        "Claire Drouot"
      ],
      "c": 3,
      "info": "Claire Drouot joue dans Le Bonheur (1965).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Agnès Varda ?",
      "a": [
        "The Artist",
        "La Grande Illusion",
        "La Cité de la peur",
        "Le Bonheur"
      ],
      "c": 3,
      "info": "Agnès Varda a réalisé Le Bonheur (1965).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean-Claude Drouot ?",
      "a": [
        "Le Bonheur",
        "Samba",
        "Le Clan des Siciliens",
        "La Cité de la peur"
      ],
      "c": 0,
      "info": "Jean-Claude Drouot figure dans Le Bonheur (1965).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Bonheur » ?",
      "a": [
        "Années 1980",
        "Années 1970",
        "Années 2010",
        "Années 1960"
      ],
      "c": 3,
      "info": "Le Bonheur est sorti en 1965, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean-Claude Drouot et Claire Drouot ?",
      "a": [
        "Les Fugitifs",
        "La Grande Illusion",
        "Le Doulos",
        "Le Bonheur"
      ],
      "c": 3,
      "info": "Jean-Claude Drouot et Claire Drouot jouent dans Le Bonheur (1965).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Hiroshima mon amour » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Patrice Leconte",
        "Alain Resnais",
        "Mathieu Kassovitz"
      ],
      "c": 2,
      "info": "Hiroshima mon amour (1959) : réalisation de Alain Resnais.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Hiroshima mon amour » est-il sorti ?",
      "a": [
        "1994",
        "1937",
        "1959",
        "1963"
      ],
      "c": 2,
      "info": "Hiroshima mon amour est sorti en 1959.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Hiroshima mon amour » ?",
      "a": [
        "Delphine Seyrig",
        "Jacques Villeret",
        "Emmanuelle Riva",
        "Jean-Pierre Bacri"
      ],
      "c": 2,
      "info": "Emmanuelle Riva joue dans Hiroshima mon amour (1959).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Hiroshima mon amour » ?",
      "a": [
        "Eiji Okada",
        "Macha Méril",
        "Yves Montand",
        "Oskar Werner"
      ],
      "c": 0,
      "info": "Eiji Okada joue dans Hiroshima mon amour (1959).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Alain Resnais ?",
      "a": [
        "Hiroshima mon amour",
        "Un long dimanche de fiançailles",
        "La Peau douce",
        "Le Bonheur"
      ],
      "c": 0,
      "info": "Alain Resnais a réalisé Hiroshima mon amour (1959).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Emmanuelle Riva ?",
      "a": [
        "Hiroshima mon amour",
        "Rien à déclarer",
        "La Grande Vadrouille",
        "La Cité des enfants perdus"
      ],
      "c": 0,
      "info": "Emmanuelle Riva figure dans Hiroshima mon amour (1959).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Hiroshima mon amour » ?",
      "a": [
        "Années 2010",
        "Années 1940",
        "Années 1950",
        "Années 1970"
      ],
      "c": 2,
      "info": "Hiroshima mon amour est sorti en 1959, dans les années 1950.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Emmanuelle Riva et Eiji Okada ?",
      "a": [
        "Les Compères",
        "Le Mépris",
        "La Règle du jeu",
        "Hiroshima mon amour"
      ],
      "c": 3,
      "info": "Emmanuelle Riva et Eiji Okada jouent dans Hiroshima mon amour (1959).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « L'Année dernière à Marienbad » ?",
      "a": [
        "Alain Resnais",
        "Jean Cocteau",
        "Jean-Marie Poiré",
        "François Truffaut"
      ],
      "c": 0,
      "info": "L'Année dernière à Marienbad (1961) : réalisation de Alain Resnais.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « L'Année dernière à Marienbad » est-il sorti ?",
      "a": [
        "1961",
        "1981",
        "1986",
        "1938"
      ],
      "c": 0,
      "info": "L'Année dernière à Marienbad est sorti en 1961.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « L'Année dernière à Marienbad » ?",
      "a": [
        "Jean-Pierre Léaud",
        "Alain Delon",
        "Delphine Seyrig",
        "Dominique Pinon"
      ],
      "c": 2,
      "info": "Delphine Seyrig joue dans L'Année dernière à Marienbad (1961).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « L'Année dernière à Marienbad » ?",
      "a": [
        "Véra Clouzot",
        "Giorgio Albertazzi",
        "Simone Signoret",
        "Michel Piccoli"
      ],
      "c": 1,
      "info": "Giorgio Albertazzi joue dans L'Année dernière à Marienbad (1961).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Alain Resnais ?",
      "a": [
        "À bout de souffle",
        "L'Année dernière à Marienbad",
        "Le Clan des Siciliens",
        "Le Bonheur"
      ],
      "c": 1,
      "info": "Alain Resnais a réalisé L'Année dernière à Marienbad (1961).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Delphine Seyrig ?",
      "a": [
        "Un singe en hiver",
        "Les Aventures de Rabbi Jacob",
        "La Haine",
        "L'Année dernière à Marienbad"
      ],
      "c": 3,
      "info": "Delphine Seyrig figure dans L'Année dernière à Marienbad (1961).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « L'Année dernière à Marienbad » ?",
      "a": [
        "Années 1930",
        "Années 1950",
        "Années 1970",
        "Années 1960"
      ],
      "c": 3,
      "info": "L'Année dernière à Marienbad est sorti en 1961, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Delphine Seyrig et Giorgio Albertazzi ?",
      "a": [
        "L'Année dernière à Marienbad",
        "Le Père Noël est une ordure",
        "Le Dernier Métro",
        "Les Anges gardiens"
      ],
      "c": 0,
      "info": "Delphine Seyrig et Giorgio Albertazzi jouent dans L'Année dernière à Marienbad (1961).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Mon oncle d'Amérique » ?",
      "a": [
        "Michel Hazanavicius",
        "Gérard Oury",
        "Alain Resnais",
        "Jean Cocteau"
      ],
      "c": 2,
      "info": "Mon oncle d'Amérique (1980) : réalisation de Alain Resnais.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Mon oncle d'Amérique » est-il sorti ?",
      "a": [
        "1980",
        "1956",
        "1964",
        "1967"
      ],
      "c": 0,
      "info": "Mon oncle d'Amérique est sorti en 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Mon oncle d'Amérique » ?",
      "a": [
        "Corinne Marchand",
        "Arletty",
        "Gérard Depardieu",
        "Brigitte Bardot"
      ],
      "c": 2,
      "info": "Gérard Depardieu joue dans Mon oncle d'Amérique (1980).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Mon oncle d'Amérique » ?",
      "a": [
        "Jean-Louis Barrault",
        "Nicole Garcia",
        "Jean Rochefort",
        "Hubert Koundé"
      ],
      "c": 1,
      "info": "Nicole Garcia joue dans Mon oncle d'Amérique (1980).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Alain Resnais ?",
      "a": [
        "La Haine",
        "Mon oncle d'Amérique",
        "Le Père Noël est une ordure",
        "La Nuit américaine"
      ],
      "c": 1,
      "info": "Alain Resnais a réalisé Mon oncle d'Amérique (1980).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Gérard Depardieu ?",
      "a": [
        "Mon oncle d'Amérique",
        "Les Fugitifs",
        "Le Doulos",
        "Le Cercle rouge"
      ],
      "c": 0,
      "info": "Gérard Depardieu figure dans Mon oncle d'Amérique (1980).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Mon oncle d'Amérique » ?",
      "a": [
        "Années 1930",
        "Années 1980",
        "Années 2000",
        "Années 1960"
      ],
      "c": 1,
      "info": "Mon oncle d'Amérique est sorti en 1980, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Gérard Depardieu et Nicole Garcia ?",
      "a": [
        "Mon oncle d'Amérique",
        "The Artist",
        "Le Doulos",
        "La Soupe aux choux"
      ],
      "c": 0,
      "info": "Gérard Depardieu et Nicole Garcia jouent dans Mon oncle d'Amérique (1980).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Samouraï » ?",
      "a": [
        "Jean-Pierre Melville",
        "Olivier Nakache et Éric Toledano",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Jean-Pierre Jeunet et Marc Caro"
      ],
      "c": 0,
      "info": "Le Samouraï (1967) : réalisation de Jean-Pierre Melville.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Samouraï » est-il sorti ?",
      "a": [
        "2008",
        "1954",
        "2010",
        "1967"
      ],
      "c": 3,
      "info": "Le Samouraï est sorti en 1967.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Samouraï » ?",
      "a": [
        "Alain Delon",
        "Sandrine Bonnaire",
        "Delphine Seyrig",
        "Brigitte Bardot"
      ],
      "c": 0,
      "info": "Alain Delon joue dans Le Samouraï (1967).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Samouraï » ?",
      "a": [
        "Josette Day",
        "Bérénice Bejo",
        "Dominique Farrugia",
        "François Périer"
      ],
      "c": 3,
      "info": "François Périer joue dans Le Samouraï (1967).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Pierre Melville ?",
      "a": [
        "Le Samouraï",
        "Astérix et Obélix : Mission Cléopâtre",
        "Le Père Noël est une ordure",
        "Les Bronzés font du ski"
      ],
      "c": 0,
      "info": "Jean-Pierre Melville a réalisé Le Samouraï (1967).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Alain Delon ?",
      "a": [
        "Le Samouraï",
        "Mon oncle d'Amérique",
        "La Grande Illusion",
        "Bande à part"
      ],
      "c": 0,
      "info": "Alain Delon figure dans Le Samouraï (1967).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Samouraï » ?",
      "a": [
        "Années 1940",
        "Années 1930",
        "Années 1960",
        "Années 1980"
      ],
      "c": 2,
      "info": "Le Samouraï est sorti en 1967, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Alain Delon et François Périer ?",
      "a": [
        "La Cité de la peur",
        "La Règle du jeu",
        "Monsieur Hire",
        "Le Samouraï"
      ],
      "c": 3,
      "info": "Alain Delon et François Périer jouent dans Le Samouraï (1967).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Cercle rouge » ?",
      "a": [
        "Jean-Pierre Melville",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Jean-Marie Poiré",
        "Alain Chabat"
      ],
      "c": 0,
      "info": "Le Cercle rouge (1970) : réalisation de Jean-Pierre Melville.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Cercle rouge » est-il sorti ?",
      "a": [
        "2004",
        "1963",
        "1978",
        "1970"
      ],
      "c": 3,
      "info": "Le Cercle rouge est sorti en 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Cercle rouge » ?",
      "a": [
        "Jean-Paul Belmondo",
        "Alain Delon",
        "Dominique Pinon",
        "Gérard Philipe"
      ],
      "c": 1,
      "info": "Alain Delon joue dans Le Cercle rouge (1970).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Cercle rouge » ?",
      "a": [
        "Eiji Okada",
        "Bourvil",
        "Michel Piccoli",
        "Louis de Funès"
      ],
      "c": 1,
      "info": "Bourvil joue dans Le Cercle rouge (1970).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Pierre Melville ?",
      "a": [
        "La Grande Vadrouille",
        "Intouchables",
        "La Môme",
        "Le Cercle rouge"
      ],
      "c": 3,
      "info": "Jean-Pierre Melville a réalisé Le Cercle rouge (1970).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Alain Delon ?",
      "a": [
        "Le Cercle rouge",
        "La Cité de la peur",
        "Astérix et Obélix : Mission Cléopâtre",
        "Le Bonheur"
      ],
      "c": 0,
      "info": "Alain Delon figure dans Le Cercle rouge (1970).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Cercle rouge » ?",
      "a": [
        "Années 1990",
        "Années 1930",
        "Années 1980",
        "Années 1970"
      ],
      "c": 3,
      "info": "Le Cercle rouge est sorti en 1970, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Alain Delon et Bourvil ?",
      "a": [
        "Alexandre le Bienheureux",
        "La Môme",
        "Le Cercle rouge",
        "Bande à part"
      ],
      "c": 2,
      "info": "Alain Delon et Bourvil jouent dans Le Cercle rouge (1970).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « L'Armée des ombres » ?",
      "a": [
        "Claude Autant-Lara",
        "Gérard Oury",
        "François Truffaut",
        "Jean-Pierre Melville"
      ],
      "c": 3,
      "info": "L'Armée des ombres (1969) : réalisation de Jean-Pierre Melville.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « L'Armée des ombres » est-il sorti ?",
      "a": [
        "2017",
        "2012",
        "1969",
        "2009"
      ],
      "c": 2,
      "info": "L'Armée des ombres est sorti en 1969.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « L'Armée des ombres » ?",
      "a": [
        "Jean Gabin",
        "Alain Chabat",
        "Lino Ventura",
        "Jean-Paul Belmondo"
      ],
      "c": 2,
      "info": "Lino Ventura joue dans L'Armée des ombres (1969).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « L'Armée des ombres » ?",
      "a": [
        "Josiane Balasko",
        "Claire Maurier",
        "Simone Signoret",
        "Pierre Fresnay"
      ],
      "c": 2,
      "info": "Simone Signoret joue dans L'Armée des ombres (1969).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Pierre Melville ?",
      "a": [
        "L'Armée des ombres",
        "La Cité de la peur",
        "Un long dimanche de fiançailles",
        "Le Sens de la fête"
      ],
      "c": 0,
      "info": "Jean-Pierre Melville a réalisé L'Armée des ombres (1969).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Lino Ventura ?",
      "a": [
        "Pierrot le Fou",
        "Bande à part",
        "L'Armée des ombres",
        "La Classe américaine"
      ],
      "c": 2,
      "info": "Lino Ventura figure dans L'Armée des ombres (1969).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « L'Armée des ombres » ?",
      "a": [
        "Années 1940",
        "Années 1930",
        "Années 1960",
        "Années 2000"
      ],
      "c": 2,
      "info": "L'Armée des ombres est sorti en 1969, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Lino Ventura et Simone Signoret ?",
      "a": [
        "L'Armée des ombres",
        "Le Placard",
        "La Belle et la Bête",
        "Bienvenue chez les Ch'tis"
      ],
      "c": 0,
      "info": "Lino Ventura et Simone Signoret jouent dans L'Armée des ombres (1969).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Doulos » ?",
      "a": [
        "Jean-Pierre Melville",
        "Jean Cocteau",
        "Michel Hazanavicius",
        "Olivier Dahan"
      ],
      "c": 0,
      "info": "Le Doulos (1962) : réalisation de Jean-Pierre Melville.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Doulos » est-il sorti ?",
      "a": [
        "1991",
        "1955",
        "1962",
        "1965"
      ],
      "c": 2,
      "info": "Le Doulos est sorti en 1962.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Doulos » ?",
      "a": [
        "Jean-Paul Belmondo",
        "Catherine Deneuve",
        "Arletty",
        "Alain Delon"
      ],
      "c": 0,
      "info": "Jean-Paul Belmondo joue dans Le Doulos (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Doulos » ?",
      "a": [
        "Jules Berry",
        "Serge Reggiani",
        "Marlène Jobert",
        "Véra Clouzot"
      ],
      "c": 1,
      "info": "Serge Reggiani joue dans Le Doulos (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Pierre Melville ?",
      "a": [
        "Les Quatre Cents Coups",
        "Mon oncle d'Amérique",
        "La Guerre des boutons",
        "Le Doulos"
      ],
      "c": 3,
      "info": "Jean-Pierre Melville a réalisé Le Doulos (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean-Paul Belmondo ?",
      "a": [
        "Le Doulos",
        "Le Quai des brumes",
        "La Haine",
        "Le Bonheur"
      ],
      "c": 0,
      "info": "Jean-Paul Belmondo figure dans Le Doulos (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Doulos » ?",
      "a": [
        "Années 1960",
        "Années 1930",
        "Années 1950",
        "Années 2010"
      ],
      "c": 0,
      "info": "Le Doulos est sorti en 1962, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean-Paul Belmondo et Serge Reggiani ?",
      "a": [
        "La Règle du jeu",
        "Le Doulos",
        "Le Grand Blond avec une chaussure noire",
        "La Guerre des boutons"
      ],
      "c": 1,
      "info": "Jean-Paul Belmondo et Serge Reggiani jouent dans Le Doulos (1962).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Tontons flingueurs » ?",
      "a": [
        "Georges Lautner",
        "Olivier Dahan",
        "Michel Hazanavicius",
        "Francis Veber"
      ],
      "c": 0,
      "info": "Les Tontons flingueurs (1963) : réalisation de Georges Lautner.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Tontons flingueurs » est-il sorti ?",
      "a": [
        "1956",
        "1982",
        "1963",
        "1955"
      ],
      "c": 2,
      "info": "Les Tontons flingueurs est sorti en 1963.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Tontons flingueurs » ?",
      "a": [
        "Kad Merad",
        "Jeanne Moreau",
        "Lino Ventura",
        "Jean-Pierre Bacri"
      ],
      "c": 2,
      "info": "Lino Ventura joue dans Les Tontons flingueurs (1963).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Tontons flingueurs » ?",
      "a": [
        "Macha Méril",
        "Bernard Blier",
        "Suzy Delair",
        "Serge Reggiani"
      ],
      "c": 1,
      "info": "Bernard Blier joue dans Les Tontons flingueurs (1963).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Georges Lautner ?",
      "a": [
        "Les Diaboliques",
        "Le Placard",
        "Les Tontons flingueurs",
        "Le Cercle rouge"
      ],
      "c": 2,
      "info": "Georges Lautner a réalisé Les Tontons flingueurs (1963).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Lino Ventura ?",
      "a": [
        "La Grande Vadrouille",
        "Les Tontons flingueurs",
        "Les Anges gardiens",
        "Le Rouge et le Noir"
      ],
      "c": 1,
      "info": "Lino Ventura figure dans Les Tontons flingueurs (1963).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Tontons flingueurs » ?",
      "a": [
        "Années 2000",
        "Années 1960",
        "Années 1940",
        "Années 2010"
      ],
      "c": 1,
      "info": "Les Tontons flingueurs est sorti en 1963, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Lino Ventura et Bernard Blier ?",
      "a": [
        "La Haine",
        "Les Tontons flingueurs",
        "Alexandre le Bienheureux",
        "Le Bonheur"
      ],
      "c": 1,
      "info": "Lino Ventura et Bernard Blier jouent dans Les Tontons flingueurs (1963).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Barbouzes » ?",
      "a": [
        "Jean-Marie Poiré",
        "Georges Lautner",
        "Henri Verneuil",
        "Michel Hazanavicius"
      ],
      "c": 1,
      "info": "Les Barbouzes (1964) : réalisation de Georges Lautner.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Barbouzes » est-il sorti ?",
      "a": [
        "1946",
        "1993",
        "1945",
        "1964"
      ],
      "c": 3,
      "info": "Les Barbouzes est sorti en 1964.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Barbouzes » ?",
      "a": [
        "Lino Ventura",
        "Kad Merad",
        "Vincent Cassel",
        "Delphine Seyrig"
      ],
      "c": 0,
      "info": "Lino Ventura joue dans Les Barbouzes (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Barbouzes » ?",
      "a": [
        "Gérard Depardieu",
        "Jean Carmet",
        "Serge Reggiani",
        "Francis Blanche"
      ],
      "c": 3,
      "info": "Francis Blanche joue dans Les Barbouzes (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Georges Lautner ?",
      "a": [
        "Le Jour se lève",
        "Pierrot le Fou",
        "Un long dimanche de fiançailles",
        "Les Barbouzes"
      ],
      "c": 3,
      "info": "Georges Lautner a réalisé Les Barbouzes (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Lino Ventura ?",
      "a": [
        "L'Année dernière à Marienbad",
        "Les Barbouzes",
        "Les Compères",
        "Le Président"
      ],
      "c": 1,
      "info": "Lino Ventura figure dans Les Barbouzes (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Barbouzes » ?",
      "a": [
        "Années 1940",
        "Années 2000",
        "Années 1930",
        "Années 1960"
      ],
      "c": 3,
      "info": "Les Barbouzes est sorti en 1964, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Lino Ventura et Francis Blanche ?",
      "a": [
        "Hiroshima mon amour",
        "Le Rouge et le Noir",
        "Les Barbouzes",
        "Samba"
      ],
      "c": 2,
      "info": "Lino Ventura et Francis Blanche jouent dans Les Barbouzes (1964).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Un singe en hiver » ?",
      "a": [
        "Alain Resnais",
        "Agnès Varda",
        "Henri Verneuil",
        "Olivier Nakache et Éric Toledano"
      ],
      "c": 2,
      "info": "Un singe en hiver (1962) : réalisation de Henri Verneuil.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Un singe en hiver » est-il sorti ?",
      "a": [
        "1995",
        "1972",
        "1962",
        "1981"
      ],
      "c": 2,
      "info": "Un singe en hiver est sorti en 1962.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Un singe en hiver » ?",
      "a": [
        "André Treton",
        "Lino Ventura",
        "Michel Blanc",
        "Jean Gabin"
      ],
      "c": 3,
      "info": "Jean Gabin joue dans Un singe en hiver (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Un singe en hiver » ?",
      "a": [
        "Marcel Dalio",
        "Jean-Paul Belmondo",
        "Alain Delon",
        "Thierry Lhermitte"
      ],
      "c": 1,
      "info": "Jean-Paul Belmondo joue dans Un singe en hiver (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Henri Verneuil ?",
      "a": [
        "Un singe en hiver",
        "Intouchables",
        "Les Anges gardiens",
        "Les Fugitifs"
      ],
      "c": 0,
      "info": "Henri Verneuil a réalisé Un singe en hiver (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "Le Placard",
        "Les Anges gardiens",
        "Le Doulos",
        "Un singe en hiver"
      ],
      "c": 3,
      "info": "Jean Gabin figure dans Un singe en hiver (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Un singe en hiver » ?",
      "a": [
        "Années 1940",
        "Années 1970",
        "Années 1930",
        "Années 1960"
      ],
      "c": 3,
      "info": "Un singe en hiver est sorti en 1962, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Jean-Paul Belmondo ?",
      "a": [
        "Le Samouraï",
        "Les Enfants du paradis",
        "La Cité de la peur",
        "Un singe en hiver"
      ],
      "c": 3,
      "info": "Jean Gabin et Jean-Paul Belmondo jouent dans Un singe en hiver (1962).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Clan des Siciliens » ?",
      "a": [
        "Michel Hazanavicius et Dominique Mézerette",
        "Henri Verneuil",
        "Jean Girault",
        "Jean Cocteau"
      ],
      "c": 1,
      "info": "Le Clan des Siciliens (1969) : réalisation de Henri Verneuil.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Clan des Siciliens » est-il sorti ?",
      "a": [
        "1969",
        "1959",
        "1947",
        "2006"
      ],
      "c": 0,
      "info": "Le Clan des Siciliens est sorti en 1969.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Clan des Siciliens » ?",
      "a": [
        "Michel Blanc",
        "Jean Gabin",
        "André Treton",
        "Corinne Marchand"
      ],
      "c": 1,
      "info": "Jean Gabin joue dans Le Clan des Siciliens (1969).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Clan des Siciliens » ?",
      "a": [
        "Dany Boon",
        "Simone Simon",
        "Josiane Balasko",
        "Alain Delon"
      ],
      "c": 3,
      "info": "Alain Delon joue dans Le Clan des Siciliens (1969).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Henri Verneuil ?",
      "a": [
        "Les Aventures de Rabbi Jacob",
        "Pierrot le Fou",
        "La Soupe aux choux",
        "Le Clan des Siciliens"
      ],
      "c": 3,
      "info": "Henri Verneuil a réalisé Le Clan des Siciliens (1969).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "Hôtel du Nord",
        "Le Dîner de cons",
        "Le Clan des Siciliens",
        "Orphée"
      ],
      "c": 2,
      "info": "Jean Gabin figure dans Le Clan des Siciliens (1969).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Clan des Siciliens » ?",
      "a": [
        "Années 1980",
        "Années 1960",
        "Années 1970",
        "Années 1940"
      ],
      "c": 1,
      "info": "Le Clan des Siciliens est sorti en 1969, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Alain Delon ?",
      "a": [
        "La Grande Vadrouille",
        "Le Placard",
        "Le Clan des Siciliens",
        "OSS 117 : Rio ne répond plus"
      ],
      "c": 2,
      "info": "Jean Gabin et Alain Delon jouent dans Le Clan des Siciliens (1969).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Mélodie en sous-sol » ?",
      "a": [
        "Dany Boon",
        "Alain Resnais",
        "Francis Veber",
        "Henri Verneuil"
      ],
      "c": 3,
      "info": "Mélodie en sous-sol (1963) : réalisation de Henri Verneuil.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Mélodie en sous-sol » est-il sorti ?",
      "a": [
        "1970",
        "1963",
        "1953",
        "2008"
      ],
      "c": 1,
      "info": "Mélodie en sous-sol est sorti en 1963.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Mélodie en sous-sol » ?",
      "a": [
        "Jean Reno",
        "Anna Karina",
        "Michel Blanc",
        "Jean Gabin"
      ],
      "c": 3,
      "info": "Jean Gabin joue dans Mélodie en sous-sol (1963).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Mélodie en sous-sol » ?",
      "a": [
        "Pierre Fresnay",
        "Alain Delon",
        "Oskar Werner",
        "Jean Rochefort"
      ],
      "c": 1,
      "info": "Alain Delon joue dans Mélodie en sous-sol (1963).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Henri Verneuil ?",
      "a": [
        "Cléo de 5 à 7",
        "Delicatessen",
        "Les Tontons flingueurs",
        "Mélodie en sous-sol"
      ],
      "c": 3,
      "info": "Henri Verneuil a réalisé Mélodie en sous-sol (1963).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "Mélodie en sous-sol",
        "Hôtel du Nord",
        "Le Salaire de la peur",
        "La Peau douce"
      ],
      "c": 0,
      "info": "Jean Gabin figure dans Mélodie en sous-sol (1963).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Mélodie en sous-sol » ?",
      "a": [
        "Années 1950",
        "Années 1930",
        "Années 1960",
        "Années 1990"
      ],
      "c": 2,
      "info": "Mélodie en sous-sol est sorti en 1963, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Alain Delon ?",
      "a": [
        "Le Doulos",
        "La Nuit américaine",
        "Les Visiteurs",
        "Mélodie en sous-sol"
      ],
      "c": 3,
      "info": "Jean Gabin et Alain Delon jouent dans Mélodie en sous-sol (1963).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Président » ?",
      "a": [
        "Jean Cocteau",
        "François Truffaut",
        "Claude Autant-Lara",
        "Henri Verneuil"
      ],
      "c": 3,
      "info": "Le Président (1961) : réalisation de Henri Verneuil.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Président » est-il sorti ?",
      "a": [
        "2006",
        "2008",
        "1961",
        "1993"
      ],
      "c": 2,
      "info": "Le Président est sorti en 1961.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Président » ?",
      "a": [
        "Arletty",
        "Nora Gregor",
        "Ron Perlman",
        "Jean Gabin"
      ],
      "c": 3,
      "info": "Jean Gabin joue dans Le Président (1961).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Président » ?",
      "a": [
        "Vincent Cassel",
        "Claire Maurier",
        "Maria Casarès",
        "Bernard Blier"
      ],
      "c": 3,
      "info": "Bernard Blier joue dans Le Président (1961).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Henri Verneuil ?",
      "a": [
        "Le Président",
        "La Cité de la peur",
        "La Cité des enfants perdus",
        "La Haine"
      ],
      "c": 0,
      "info": "Henri Verneuil a réalisé Le Président (1961).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Gabin ?",
      "a": [
        "La Môme",
        "Le Président",
        "La Cité des enfants perdus",
        "La Guerre des boutons"
      ],
      "c": 1,
      "info": "Jean Gabin figure dans Le Président (1961).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Président » ?",
      "a": [
        "Années 2010",
        "Années 1960",
        "Années 1950",
        "Années 2000"
      ],
      "c": 1,
      "info": "Le Président est sorti en 1961, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Gabin et Bernard Blier ?",
      "a": [
        "Un long dimanche de fiançailles",
        "Quai des Orfèvres",
        "Bienvenue chez les Ch'tis",
        "Le Président"
      ],
      "c": 3,
      "info": "Jean Gabin et Bernard Blier jouent dans Le Président (1961).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Corniaud » ?",
      "a": [
        "Gérard Oury",
        "Dany Boon",
        "Michel Hazanavicius et Dominique Mézerette",
        "François Truffaut"
      ],
      "c": 0,
      "info": "Le Corniaud (1965) : réalisation de Gérard Oury.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Corniaud » est-il sorti ?",
      "a": [
        "1961",
        "1965",
        "1969",
        "1967"
      ],
      "c": 1,
      "info": "Le Corniaud est sorti en 1965.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Corniaud » ?",
      "a": [
        "Bourvil",
        "Philippe Noiret",
        "Nora Gregor",
        "Jean Reno"
      ],
      "c": 0,
      "info": "Bourvil joue dans Le Corniaud (1965).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Corniaud » ?",
      "a": [
        "Michel Piccoli",
        "Jean Seberg",
        "Louis de Funès",
        "Marie-Laure Dougnac"
      ],
      "c": 2,
      "info": "Louis de Funès joue dans Le Corniaud (1965).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Gérard Oury ?",
      "a": [
        "Le Président",
        "Jules et Jim",
        "Le Corniaud",
        "Ridicule"
      ],
      "c": 2,
      "info": "Gérard Oury a réalisé Le Corniaud (1965).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Bourvil ?",
      "a": [
        "Les Bronzés font du ski",
        "Le Dîner de cons",
        "Le Corniaud",
        "Le Rouge et le Noir"
      ],
      "c": 2,
      "info": "Bourvil figure dans Le Corniaud (1965).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Corniaud » ?",
      "a": [
        "Années 1970",
        "Années 2000",
        "Années 1950",
        "Années 1960"
      ],
      "c": 3,
      "info": "Le Corniaud est sorti en 1965, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Bourvil et Louis de Funès ?",
      "a": [
        "Les Quatre Cents Coups",
        "Le Corniaud",
        "La Chèvre",
        "La Guerre des boutons"
      ],
      "c": 1,
      "info": "Bourvil et Louis de Funès jouent dans Le Corniaud (1965).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Grande Vadrouille » ?",
      "a": [
        "Jean-Luc Godard",
        "Gérard Oury",
        "Jean-Pierre Melville",
        "Jean-Pierre Jeunet"
      ],
      "c": 1,
      "info": "La Grande Vadrouille (1966) : réalisation de Gérard Oury.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Grande Vadrouille » est-il sorti ?",
      "a": [
        "1966",
        "1962",
        "1969",
        "1998"
      ],
      "c": 0,
      "info": "La Grande Vadrouille est sorti en 1966.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Grande Vadrouille » ?",
      "a": [
        "Audrey Tautou",
        "Jacqueline Bisset",
        "Bourvil",
        "Simone Signoret"
      ],
      "c": 2,
      "info": "Bourvil joue dans La Grande Vadrouille (1966).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Grande Vadrouille » ?",
      "a": [
        "Louis de Funès",
        "Dominique Farrugia",
        "Gérard Depardieu",
        "Thierry Lhermitte"
      ],
      "c": 0,
      "info": "Louis de Funès joue dans La Grande Vadrouille (1966).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Gérard Oury ?",
      "a": [
        "Mon oncle d'Amérique",
        "La Grande Vadrouille",
        "La Belle et la Bête",
        "La Guerre des boutons"
      ],
      "c": 1,
      "info": "Gérard Oury a réalisé La Grande Vadrouille (1966).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Bourvil ?",
      "a": [
        "Le Dîner de cons",
        "Les Bronzés font du ski",
        "La Grande Vadrouille",
        "Le Dernier Métro"
      ],
      "c": 2,
      "info": "Bourvil figure dans La Grande Vadrouille (1966).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Grande Vadrouille » ?",
      "a": [
        "Années 1990",
        "Années 1970",
        "Années 1960",
        "Années 2010"
      ],
      "c": 2,
      "info": "La Grande Vadrouille est sorti en 1966, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Bourvil et Louis de Funès ?",
      "a": [
        "Mon oncle d'Amérique",
        "La Soupe aux choux",
        "La Grande Vadrouille",
        "Le Jour se lève"
      ],
      "c": 2,
      "info": "Bourvil et Louis de Funès jouent dans La Grande Vadrouille (1966).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Folie des grandeurs » ?",
      "a": [
        "Alain Resnais",
        "Gérard Oury",
        "Jean-Luc Godard",
        "Jean-Marie Poiré"
      ],
      "c": 1,
      "info": "La Folie des grandeurs (1971) : réalisation de Gérard Oury.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Folie des grandeurs » est-il sorti ?",
      "a": [
        "1971",
        "1995",
        "1947",
        "1965"
      ],
      "c": 0,
      "info": "La Folie des grandeurs est sorti en 1971.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Folie des grandeurs » ?",
      "a": [
        "Maurice Barthélemy",
        "Louis de Funès",
        "Benoît Poelvoorde",
        "Alain Delon"
      ],
      "c": 1,
      "info": "Louis de Funès joue dans La Folie des grandeurs (1971).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Folie des grandeurs » ?",
      "a": [
        "Bourvil",
        "Claude Giraud",
        "Yves Montand",
        "Charlotte Gainsbourg"
      ],
      "c": 2,
      "info": "Yves Montand joue dans La Folie des grandeurs (1971).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Gérard Oury ?",
      "a": [
        "Le Doulos",
        "Le Salaire de la peur",
        "La Folie des grandeurs",
        "Le Cercle rouge"
      ],
      "c": 2,
      "info": "Gérard Oury a réalisé La Folie des grandeurs (1971).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Louis de Funès ?",
      "a": [
        "La Folie des grandeurs",
        "L'Armée des ombres",
        "Pierrot le Fou",
        "Orphée"
      ],
      "c": 0,
      "info": "Louis de Funès figure dans La Folie des grandeurs (1971).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Folie des grandeurs » ?",
      "a": [
        "Années 1970",
        "Années 1980",
        "Années 1990",
        "Années 1950"
      ],
      "c": 0,
      "info": "La Folie des grandeurs est sorti en 1971, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Louis de Funès et Yves Montand ?",
      "a": [
        "Le Dernier Métro",
        "La Nuit américaine",
        "Les Rivières pourpres",
        "La Folie des grandeurs"
      ],
      "c": 3,
      "info": "Louis de Funès et Yves Montand jouent dans La Folie des grandeurs (1971).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Aventures de Rabbi Jacob » ?",
      "a": [
        "Olivier Nakache et Éric Toledano",
        "Gérard Oury",
        "Marcel Carné",
        "Jean-Pierre Melville"
      ],
      "c": 1,
      "info": "Les Aventures de Rabbi Jacob (1973) : réalisation de Gérard Oury.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Aventures de Rabbi Jacob » est-il sorti ?",
      "a": [
        "1954",
        "1946",
        "1973",
        "2002"
      ],
      "c": 2,
      "info": "Les Aventures de Rabbi Jacob est sorti en 1973.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Aventures de Rabbi Jacob » ?",
      "a": [
        "Jean-Pierre Bacri",
        "Nora Gregor",
        "Louis de Funès",
        "Bourvil"
      ],
      "c": 2,
      "info": "Louis de Funès joue dans Les Aventures de Rabbi Jacob (1973).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Aventures de Rabbi Jacob » ?",
      "a": [
        "Simone Signoret",
        "Marcel Dalio",
        "Marina Foïs",
        "Claude Giraud"
      ],
      "c": 3,
      "info": "Claude Giraud joue dans Les Aventures de Rabbi Jacob (1973).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Gérard Oury ?",
      "a": [
        "Le Dîner de cons",
        "Les Aventures de Rabbi Jacob",
        "Le Doulos",
        "Les Rivières pourpres"
      ],
      "c": 1,
      "info": "Gérard Oury a réalisé Les Aventures de Rabbi Jacob (1973).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Louis de Funès ?",
      "a": [
        "Les Enfants du paradis",
        "Les Aventures de Rabbi Jacob",
        "Quai des Orfèvres",
        "Le Président"
      ],
      "c": 1,
      "info": "Louis de Funès figure dans Les Aventures de Rabbi Jacob (1973).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Aventures de Rabbi Jacob » ?",
      "a": [
        "Années 1940",
        "Années 1990",
        "Années 1970",
        "Années 2000"
      ],
      "c": 2,
      "info": "Les Aventures de Rabbi Jacob est sorti en 1973, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Louis de Funès et Claude Giraud ?",
      "a": [
        "Les Aventures de Rabbi Jacob",
        "La Môme",
        "Les Quatre Cents Coups",
        "La Cité de la peur"
      ],
      "c": 0,
      "info": "Louis de Funès et Claude Giraud jouent dans Les Aventures de Rabbi Jacob (1973).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Grand Blond avec une chaussure noire » ?",
      "a": [
        "Alain Chabat",
        "Jean Girault",
        "Yves Robert",
        "Alexandre de La Patellière et Matthieu Delaporte"
      ],
      "c": 2,
      "info": "Le Grand Blond avec une chaussure noire (1972) : réalisation de Yves Robert.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Grand Blond avec une chaussure noire » est-il sorti ?",
      "a": [
        "1972",
        "1981",
        "1938",
        "1980"
      ],
      "c": 0,
      "info": "Le Grand Blond avec une chaussure noire est sorti en 1972.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Grand Blond avec une chaussure noire » ?",
      "a": [
        "Pierre Richard",
        "Christian Clavier",
        "Brigitte Bardot",
        "Philippe Noiret"
      ],
      "c": 0,
      "info": "Pierre Richard joue dans Le Grand Blond avec une chaussure noire (1972).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Grand Blond avec une chaussure noire » ?",
      "a": [
        "Michel Piccoli",
        "Thierry Lhermitte",
        "Marina Foïs",
        "Jean Rochefort"
      ],
      "c": 3,
      "info": "Jean Rochefort joue dans Le Grand Blond avec une chaussure noire (1972).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Yves Robert ?",
      "a": [
        "OSS 117 : Rio ne répond plus",
        "Le Grand Blond avec une chaussure noire",
        "Les Anges gardiens",
        "L'Année dernière à Marienbad"
      ],
      "c": 1,
      "info": "Yves Robert a réalisé Le Grand Blond avec une chaussure noire (1972).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Pierre Richard ?",
      "a": [
        "Le Grand Blond avec une chaussure noire",
        "Le Quai des brumes",
        "La Haine",
        "Le Samouraï"
      ],
      "c": 0,
      "info": "Pierre Richard figure dans Le Grand Blond avec une chaussure noire (1972).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Grand Blond avec une chaussure noire » ?",
      "a": [
        "Années 1990",
        "Années 1960",
        "Années 1980",
        "Années 1970"
      ],
      "c": 3,
      "info": "Le Grand Blond avec une chaussure noire est sorti en 1972, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Pierre Richard et Jean Rochefort ?",
      "a": [
        "La Folie des grandeurs",
        "La Grande Illusion",
        "Les Bronzés",
        "Le Grand Blond avec une chaussure noire"
      ],
      "c": 3,
      "info": "Pierre Richard et Jean Rochefort jouent dans Le Grand Blond avec une chaussure noire (1972).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Retour du Grand Blond » ?",
      "a": [
        "Dany Boon",
        "Olivier Nakache et Éric Toledano",
        "Yves Robert",
        "Marcel Carné"
      ],
      "c": 2,
      "info": "Le Retour du Grand Blond (1974) : réalisation de Yves Robert.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Retour du Grand Blond » est-il sorti ?",
      "a": [
        "2010",
        "1974",
        "1971",
        "2014"
      ],
      "c": 1,
      "info": "Le Retour du Grand Blond est sorti en 1974.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Retour du Grand Blond » ?",
      "a": [
        "Lino Ventura",
        "Pierre Richard",
        "Jean-Paul Belmondo",
        "Benoît Poelvoorde"
      ],
      "c": 1,
      "info": "Pierre Richard joue dans Le Retour du Grand Blond (1974).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Retour du Grand Blond » ?",
      "a": [
        "Jean Carmet",
        "Suzy Delair",
        "Gaspard Ulliel",
        "Jean Rochefort"
      ],
      "c": 3,
      "info": "Jean Rochefort joue dans Le Retour du Grand Blond (1974).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Yves Robert ?",
      "a": [
        "Les Rivières pourpres",
        "Le Dîner de cons",
        "Le Retour du Grand Blond",
        "Pierrot le Fou"
      ],
      "c": 2,
      "info": "Yves Robert a réalisé Le Retour du Grand Blond (1974).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Pierre Richard ?",
      "a": [
        "Les Rivières pourpres",
        "Le Retour du Grand Blond",
        "La Belle et la Bête",
        "Orphée"
      ],
      "c": 1,
      "info": "Pierre Richard figure dans Le Retour du Grand Blond (1974).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Retour du Grand Blond » ?",
      "a": [
        "Années 2010",
        "Années 1930",
        "Années 1970",
        "Années 1940"
      ],
      "c": 2,
      "info": "Le Retour du Grand Blond est sorti en 1974, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Pierre Richard et Jean Rochefort ?",
      "a": [
        "Le Retour du Grand Blond",
        "Les Quatre Cents Coups",
        "Delicatessen",
        "Bande à part"
      ],
      "c": 0,
      "info": "Pierre Richard et Jean Rochefort jouent dans Le Retour du Grand Blond (1974).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Guerre des boutons » ?",
      "a": [
        "Jean-Pierre Jeunet",
        "Alain Chabat",
        "Henri-Georges Clouzot",
        "Yves Robert"
      ],
      "c": 3,
      "info": "La Guerre des boutons (1962) : réalisation de Yves Robert.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Guerre des boutons » est-il sorti ?",
      "a": [
        "2007",
        "1994",
        "1962",
        "1939"
      ],
      "c": 2,
      "info": "La Guerre des boutons est sorti en 1962.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Guerre des boutons » ?",
      "a": [
        "André Treton",
        "Jean Marais",
        "Marion Cotillard",
        "Jeanne Moreau"
      ],
      "c": 0,
      "info": "André Treton joue dans La Guerre des boutons (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Guerre des boutons » ?",
      "a": [
        "Jules Berry",
        "Martin Lartigue",
        "Bourvil",
        "Christian Clavier"
      ],
      "c": 1,
      "info": "Martin Lartigue joue dans La Guerre des boutons (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Yves Robert ?",
      "a": [
        "La Guerre des boutons",
        "Hôtel du Nord",
        "Sans toit ni loi",
        "Les Rivières pourpres"
      ],
      "c": 0,
      "info": "Yves Robert a réalisé La Guerre des boutons (1962).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir André Treton ?",
      "a": [
        "La Guerre des boutons",
        "Les Anges gardiens",
        "L'Année dernière à Marienbad",
        "Les Bronzés font du ski"
      ],
      "c": 0,
      "info": "André Treton figure dans La Guerre des boutons (1962).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Guerre des boutons » ?",
      "a": [
        "Années 1960",
        "Années 1930",
        "Années 1990",
        "Années 2010"
      ],
      "c": 0,
      "info": "La Guerre des boutons est sorti en 1962, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit André Treton et Martin Lartigue ?",
      "a": [
        "Un long dimanche de fiançailles",
        "Les Fugitifs",
        "La Guerre des boutons",
        "L'Armée des ombres"
      ],
      "c": 2,
      "info": "André Treton et Martin Lartigue jouent dans La Guerre des boutons (1962).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Alexandre le Bienheureux » ?",
      "a": [
        "Olivier Nakache et Éric Toledano",
        "Yves Robert",
        "Georges Lautner",
        "Gérard Oury"
      ],
      "c": 1,
      "info": "Alexandre le Bienheureux (1968) : réalisation de Yves Robert.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Alexandre le Bienheureux » est-il sorti ?",
      "a": [
        "1968",
        "2001",
        "1954",
        "1956"
      ],
      "c": 0,
      "info": "Alexandre le Bienheureux est sorti en 1968.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Alexandre le Bienheureux » ?",
      "a": [
        "Alain Chabat",
        "André Treton",
        "Jean-Pierre Bacri",
        "Philippe Noiret"
      ],
      "c": 3,
      "info": "Philippe Noiret joue dans Alexandre le Bienheureux (1968).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Alexandre le Bienheureux » ?",
      "a": [
        "Marlène Jobert",
        "Louise Monot",
        "Sylvie Testud",
        "Françoise Dorléac"
      ],
      "c": 0,
      "info": "Marlène Jobert joue dans Alexandre le Bienheureux (1968).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Yves Robert ?",
      "a": [
        "Jules et Jim",
        "La Peau douce",
        "Les Diaboliques",
        "Alexandre le Bienheureux"
      ],
      "c": 3,
      "info": "Yves Robert a réalisé Alexandre le Bienheureux (1968).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Philippe Noiret ?",
      "a": [
        "Le Gendarme de Saint-Tropez",
        "La Bête humaine",
        "Alexandre le Bienheureux",
        "Monsieur Hire"
      ],
      "c": 2,
      "info": "Philippe Noiret figure dans Alexandre le Bienheureux (1968).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Alexandre le Bienheureux » ?",
      "a": [
        "Années 1950",
        "Années 1980",
        "Années 1960",
        "Années 2010"
      ],
      "c": 2,
      "info": "Alexandre le Bienheureux est sorti en 1968, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Philippe Noiret et Marlène Jobert ?",
      "a": [
        "La Cité de la peur",
        "Alexandre le Bienheureux",
        "Les Enfants du paradis",
        "Les Tontons flingueurs"
      ],
      "c": 1,
      "info": "Philippe Noiret et Marlène Jobert jouent dans Alexandre le Bienheureux (1968).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Gendarme de Saint-Tropez » ?",
      "a": [
        "Jean-Marie Poiré",
        "Jean Girault",
        "Alain Berbérian",
        "Alexandre de La Patellière et Matthieu Delaporte"
      ],
      "c": 1,
      "info": "Le Gendarme de Saint-Tropez (1964) : réalisation de Jean Girault.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Gendarme de Saint-Tropez » est-il sorti ?",
      "a": [
        "1950",
        "1981",
        "1956",
        "1964"
      ],
      "c": 3,
      "info": "Le Gendarme de Saint-Tropez est sorti en 1964.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Gendarme de Saint-Tropez » ?",
      "a": [
        "Louis de Funès",
        "Sandrine Bonnaire",
        "Alain Chabat",
        "Jean Reno"
      ],
      "c": 0,
      "info": "Louis de Funès joue dans Le Gendarme de Saint-Tropez (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Gendarme de Saint-Tropez » ?",
      "a": [
        "Geneviève Grad",
        "Valérie Benguigui",
        "Thierry Lhermitte",
        "Fanny Ardant"
      ],
      "c": 0,
      "info": "Geneviève Grad joue dans Le Gendarme de Saint-Tropez (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean Girault ?",
      "a": [
        "Le Gendarme de Saint-Tropez",
        "Mon oncle d'Amérique",
        "Le Corniaud",
        "Les Barbouzes"
      ],
      "c": 0,
      "info": "Jean Girault a réalisé Le Gendarme de Saint-Tropez (1964).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Louis de Funès ?",
      "a": [
        "Le Gendarme de Saint-Tropez",
        "Le Mépris",
        "Le Dîner de cons",
        "Mélodie en sous-sol"
      ],
      "c": 0,
      "info": "Louis de Funès figure dans Le Gendarme de Saint-Tropez (1964).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Gendarme de Saint-Tropez » ?",
      "a": [
        "Années 1940",
        "Années 1960",
        "Années 1950",
        "Années 2000"
      ],
      "c": 1,
      "info": "Le Gendarme de Saint-Tropez est sorti en 1964, dans les années 1960.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Louis de Funès et Geneviève Grad ?",
      "a": [
        "The Artist",
        "Le Retour du Grand Blond",
        "Le Cercle rouge",
        "Le Gendarme de Saint-Tropez"
      ],
      "c": 3,
      "info": "Louis de Funès et Geneviève Grad jouent dans Le Gendarme de Saint-Tropez (1964).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Soupe aux choux » ?",
      "a": [
        "Jean Girault",
        "Agnès Varda",
        "Jean-Marie Poiré",
        "Jean-Luc Godard"
      ],
      "c": 0,
      "info": "La Soupe aux choux (1981) : réalisation de Jean Girault.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Soupe aux choux » est-il sorti ?",
      "a": [
        "1986",
        "1965",
        "1981",
        "1998"
      ],
      "c": 2,
      "info": "La Soupe aux choux est sorti en 1981.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Soupe aux choux » ?",
      "a": [
        "Louis de Funès",
        "Jean Reno",
        "Jean-Paul Belmondo",
        "Jean-Pierre Bacri"
      ],
      "c": 0,
      "info": "Louis de Funès joue dans La Soupe aux choux (1981).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Soupe aux choux » ?",
      "a": [
        "Marlène Jobert",
        "Bernard Blier",
        "Jean Carmet",
        "Jean-Paul Belmondo"
      ],
      "c": 2,
      "info": "Jean Carmet joue dans La Soupe aux choux (1981).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean Girault ?",
      "a": [
        "Les Rivières pourpres",
        "RRRrrrr!!!",
        "L'Armée des ombres",
        "La Soupe aux choux"
      ],
      "c": 3,
      "info": "Jean Girault a réalisé La Soupe aux choux (1981).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Louis de Funès ?",
      "a": [
        "La Soupe aux choux",
        "Les Bronzés",
        "L'Armée des ombres",
        "Le Grand Blond avec une chaussure noire"
      ],
      "c": 0,
      "info": "Louis de Funès figure dans La Soupe aux choux (1981).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Soupe aux choux » ?",
      "a": [
        "Années 1930",
        "Années 1980",
        "Années 2010",
        "Années 2000"
      ],
      "c": 1,
      "info": "La Soupe aux choux est sorti en 1981, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Louis de Funès et Jean Carmet ?",
      "a": [
        "La Soupe aux choux",
        "La Nuit américaine",
        "Le Sens de la fête",
        "Mon oncle d'Amérique"
      ],
      "c": 0,
      "info": "Louis de Funès et Jean Carmet jouent dans La Soupe aux choux (1981).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Bronzés » ?",
      "a": [
        "Jean Girault",
        "Dany Boon",
        "Patrice Leconte",
        "Jean-Pierre Jeunet"
      ],
      "c": 2,
      "info": "Les Bronzés (1978) : réalisation de Patrice Leconte.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Bronzés » est-il sorti ?",
      "a": [
        "1989",
        "1937",
        "1978",
        "1945"
      ],
      "c": 2,
      "info": "Les Bronzés est sorti en 1978.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Bronzés » ?",
      "a": [
        "Michel Blanc",
        "Nora Gregor",
        "Louis de Funès",
        "Gérard Depardieu"
      ],
      "c": 0,
      "info": "Michel Blanc joue dans Les Bronzés (1978).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Bronzés » ?",
      "a": [
        "Josiane Balasko",
        "Alain Delon",
        "Claire Drouot",
        "Gérard Depardieu"
      ],
      "c": 0,
      "info": "Josiane Balasko joue dans Les Bronzés (1978).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Patrice Leconte ?",
      "a": [
        "Le Prénom",
        "Les Bronzés",
        "La Soupe aux choux",
        "Mon oncle d'Amérique"
      ],
      "c": 1,
      "info": "Patrice Leconte a réalisé Les Bronzés (1978).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Michel Blanc ?",
      "a": [
        "Pierrot le Fou",
        "Les Bronzés",
        "Le Placard",
        "Le Jour se lève"
      ],
      "c": 1,
      "info": "Michel Blanc figure dans Les Bronzés (1978).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Bronzés » ?",
      "a": [
        "Années 1970",
        "Années 1950",
        "Années 1960",
        "Années 1930"
      ],
      "c": 0,
      "info": "Les Bronzés est sorti en 1978, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Michel Blanc et Josiane Balasko ?",
      "a": [
        "Les Bronzés",
        "Les Enfants du paradis",
        "Pierrot le Fou",
        "Les Anges gardiens"
      ],
      "c": 0,
      "info": "Michel Blanc et Josiane Balasko jouent dans Les Bronzés (1978).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Bronzés font du ski » ?",
      "a": [
        "Michel Hazanavicius",
        "Jean Cocteau",
        "Patrice Leconte",
        "Alain Chabat"
      ],
      "c": 2,
      "info": "Les Bronzés font du ski (1979) : réalisation de Patrice Leconte.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Bronzés font du ski » est-il sorti ?",
      "a": [
        "1993",
        "1969",
        "1950",
        "1979"
      ],
      "c": 3,
      "info": "Les Bronzés font du ski est sorti en 1979.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Bronzés font du ski » ?",
      "a": [
        "Michel Blanc",
        "Louis de Funès",
        "Delphine Seyrig",
        "Dustin Hoffman"
      ],
      "c": 0,
      "info": "Michel Blanc joue dans Les Bronzés font du ski (1979).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Bronzés font du ski » ?",
      "a": [
        "Louis de Funès",
        "Danielle Darrieux",
        "Gaspard Ulliel",
        "Christian Clavier"
      ],
      "c": 3,
      "info": "Christian Clavier joue dans Les Bronzés font du ski (1979).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Patrice Leconte ?",
      "a": [
        "L'Année dernière à Marienbad",
        "Le Père Noël est une ordure",
        "Les Bronzés font du ski",
        "Orphée"
      ],
      "c": 2,
      "info": "Patrice Leconte a réalisé Les Bronzés font du ski (1979).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Michel Blanc ?",
      "a": [
        "Les Bronzés font du ski",
        "Le Père Noël est une ordure",
        "Le Clan des Siciliens",
        "Les Compères"
      ],
      "c": 0,
      "info": "Michel Blanc figure dans Les Bronzés font du ski (1979).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Bronzés font du ski » ?",
      "a": [
        "Années 1980",
        "Années 1970",
        "Années 1930",
        "Années 2010"
      ],
      "c": 1,
      "info": "Les Bronzés font du ski est sorti en 1979, dans les années 1970.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Michel Blanc et Christian Clavier ?",
      "a": [
        "Les Bronzés font du ski",
        "La Soupe aux choux",
        "Les Quatre Cents Coups",
        "Le Dîner de cons"
      ],
      "c": 0,
      "info": "Michel Blanc et Christian Clavier jouent dans Les Bronzés font du ski (1979).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Ridicule » ?",
      "a": [
        "Henri-Georges Clouzot",
        "Michel Hazanavicius et Dominique Mézerette",
        "Patrice Leconte",
        "Mathieu Kassovitz"
      ],
      "c": 2,
      "info": "Ridicule (1996) : réalisation de Patrice Leconte.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Ridicule » est-il sorti ?",
      "a": [
        "1947",
        "1996",
        "1981",
        "2011"
      ],
      "c": 1,
      "info": "Ridicule est sorti en 1996.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Ridicule » ?",
      "a": [
        "Charles Berling",
        "Pierre Richard",
        "Jacques Villeret",
        "Ron Perlman"
      ],
      "c": 0,
      "info": "Charles Berling joue dans Ridicule (1996).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Ridicule » ?",
      "a": [
        "Thierry Lhermitte",
        "Véra Clouzot",
        "Fanny Ardant",
        "Serge Reggiani"
      ],
      "c": 2,
      "info": "Fanny Ardant joue dans Ridicule (1996).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Patrice Leconte ?",
      "a": [
        "Ridicule",
        "Cléo de 5 à 7",
        "Samba",
        "Le Grand Blond avec une chaussure noire"
      ],
      "c": 0,
      "info": "Patrice Leconte a réalisé Ridicule (1996).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Charles Berling ?",
      "a": [
        "Le Gendarme de Saint-Tropez",
        "Le Rouge et le Noir",
        "La Belle et la Bête",
        "Ridicule"
      ],
      "c": 3,
      "info": "Charles Berling figure dans Ridicule (1996).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Ridicule » ?",
      "a": [
        "Années 1990",
        "Années 1940",
        "Années 1960",
        "Années 1980"
      ],
      "c": 0,
      "info": "Ridicule est sorti en 1996, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Charles Berling et Fanny Ardant ?",
      "a": [
        "À bout de souffle",
        "Ridicule",
        "Le Grand Blond avec une chaussure noire",
        "Le Prénom"
      ],
      "c": 1,
      "info": "Charles Berling et Fanny Ardant jouent dans Ridicule (1996).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Monsieur Hire » ?",
      "a": [
        "Patrice Leconte",
        "Francis Veber",
        "Yves Robert",
        "Olivier Dahan"
      ],
      "c": 0,
      "info": "Monsieur Hire (1989) : réalisation de Patrice Leconte.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Monsieur Hire » est-il sorti ?",
      "a": [
        "1989",
        "2001",
        "1947",
        "1974"
      ],
      "c": 0,
      "info": "Monsieur Hire est sorti en 1989.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Monsieur Hire » ?",
      "a": [
        "Anna Karina",
        "Michel Blanc",
        "Philippe Noiret",
        "Dustin Hoffman"
      ],
      "c": 1,
      "info": "Michel Blanc joue dans Monsieur Hire (1989).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Monsieur Hire » ?",
      "a": [
        "Suzy Delair",
        "Maria Casarès",
        "Sandrine Bonnaire",
        "Jean Rochefort"
      ],
      "c": 2,
      "info": "Sandrine Bonnaire joue dans Monsieur Hire (1989).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Patrice Leconte ?",
      "a": [
        "Les Diaboliques",
        "Le Retour du Grand Blond",
        "Les Tontons flingueurs",
        "Monsieur Hire"
      ],
      "c": 3,
      "info": "Patrice Leconte a réalisé Monsieur Hire (1989).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Michel Blanc ?",
      "a": [
        "Les Barbouzes",
        "Monsieur Hire",
        "Le Mépris",
        "Les Fugitifs"
      ],
      "c": 1,
      "info": "Michel Blanc figure dans Monsieur Hire (1989).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Monsieur Hire » ?",
      "a": [
        "Années 1990",
        "Années 1930",
        "Années 1980",
        "Années 1970"
      ],
      "c": 2,
      "info": "Monsieur Hire est sorti en 1989, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Michel Blanc et Sandrine Bonnaire ?",
      "a": [
        "La Nuit américaine",
        "Mon oncle d'Amérique",
        "Monsieur Hire",
        "Le Grand Blond avec une chaussure noire"
      ],
      "c": 2,
      "info": "Michel Blanc et Sandrine Bonnaire jouent dans Monsieur Hire (1989).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Père Noël est une ordure » ?",
      "a": [
        "Jean-Marie Poiré",
        "Jean-Pierre Melville",
        "Henri Verneuil",
        "Francis Veber"
      ],
      "c": 0,
      "info": "Le Père Noël est une ordure (1982) : réalisation de Jean-Marie Poiré.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Père Noël est une ordure » est-il sorti ?",
      "a": [
        "1982",
        "1939",
        "2009",
        "1956"
      ],
      "c": 0,
      "info": "Le Père Noël est une ordure est sorti en 1982.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Père Noël est une ordure » ?",
      "a": [
        "Corinne Marchand",
        "Jean-Paul Belmondo",
        "Anémone",
        "Jean-Claude Drouot"
      ],
      "c": 2,
      "info": "Anémone joue dans Le Père Noël est une ordure (1982).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Père Noël est une ordure » ?",
      "a": [
        "Hubert Koundé",
        "Daniel Emilfork",
        "Pierre Fresnay",
        "Thierry Lhermitte"
      ],
      "c": 3,
      "info": "Thierry Lhermitte joue dans Le Père Noël est une ordure (1982).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Marie Poiré ?",
      "a": [
        "La Cité des enfants perdus",
        "Pierrot le Fou",
        "Les Rivières pourpres",
        "Le Père Noël est une ordure"
      ],
      "c": 3,
      "info": "Jean-Marie Poiré a réalisé Le Père Noël est une ordure (1982).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Anémone ?",
      "a": [
        "Le Père Noël est une ordure",
        "The Artist",
        "Les Fugitifs",
        "Le Dernier Métro"
      ],
      "c": 0,
      "info": "Anémone figure dans Le Père Noël est une ordure (1982).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Père Noël est une ordure » ?",
      "a": [
        "Années 2000",
        "Années 1980",
        "Années 1930",
        "Années 1990"
      ],
      "c": 1,
      "info": "Le Père Noël est une ordure est sorti en 1982, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Anémone et Thierry Lhermitte ?",
      "a": [
        "Les Fugitifs",
        "La Belle et la Bête",
        "Le Père Noël est une ordure",
        "La Grande Vadrouille"
      ],
      "c": 2,
      "info": "Anémone et Thierry Lhermitte jouent dans Le Père Noël est une ordure (1982).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Visiteurs » ?",
      "a": [
        "Claude Autant-Lara",
        "Jean Renoir",
        "Jean-Pierre Jeunet et Marc Caro",
        "Jean-Marie Poiré"
      ],
      "c": 3,
      "info": "Les Visiteurs (1993) : réalisation de Jean-Marie Poiré.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Visiteurs » est-il sorti ?",
      "a": [
        "1947",
        "1963",
        "1979",
        "1993"
      ],
      "c": 3,
      "info": "Les Visiteurs est sorti en 1993.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Visiteurs » ?",
      "a": [
        "André Treton",
        "Christian Clavier",
        "Jean Desailly",
        "Nora Gregor"
      ],
      "c": 1,
      "info": "Christian Clavier joue dans Les Visiteurs (1993).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Visiteurs » ?",
      "a": [
        "Josiane Balasko",
        "Dominique Farrugia",
        "Jean Reno",
        "Marlène Jobert"
      ],
      "c": 2,
      "info": "Jean Reno joue dans Les Visiteurs (1993).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Marie Poiré ?",
      "a": [
        "La Grande Vadrouille",
        "RRRrrrr!!!",
        "La Grande Illusion",
        "Les Visiteurs"
      ],
      "c": 3,
      "info": "Jean-Marie Poiré a réalisé Les Visiteurs (1993).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Christian Clavier ?",
      "a": [
        "Les Visiteurs",
        "Le Prénom",
        "Samba",
        "Rien à déclarer"
      ],
      "c": 0,
      "info": "Christian Clavier figure dans Les Visiteurs (1993).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Visiteurs » ?",
      "a": [
        "Années 1930",
        "Années 1960",
        "Années 1980",
        "Années 1990"
      ],
      "c": 3,
      "info": "Les Visiteurs est sorti en 1993, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Christian Clavier et Jean Reno ?",
      "a": [
        "La Peau douce",
        "Le Rouge et le Noir",
        "Les Visiteurs",
        "La Traversée de Paris"
      ],
      "c": 2,
      "info": "Christian Clavier et Jean Reno jouent dans Les Visiteurs (1993).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Anges gardiens » ?",
      "a": [
        "Jean-Luc Godard",
        "Jean-Marie Poiré",
        "Jean-Pierre Jeunet",
        "Jean Cocteau"
      ],
      "c": 1,
      "info": "Les Anges gardiens (1995) : réalisation de Jean-Marie Poiré.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Anges gardiens » est-il sorti ?",
      "a": [
        "1995",
        "1974",
        "1982",
        "1956"
      ],
      "c": 0,
      "info": "Les Anges gardiens est sorti en 1995.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Anges gardiens » ?",
      "a": [
        "Gérard Depardieu",
        "Alain Delon",
        "Audrey Tautou",
        "Jean-Pierre Léaud"
      ],
      "c": 0,
      "info": "Gérard Depardieu joue dans Les Anges gardiens (1995).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Anges gardiens » ?",
      "a": [
        "Christian Clavier",
        "Antoine Bourseiller",
        "Charlotte Gainsbourg",
        "Marcel Dalio"
      ],
      "c": 0,
      "info": "Christian Clavier joue dans Les Anges gardiens (1995).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Marie Poiré ?",
      "a": [
        "Un long dimanche de fiançailles",
        "La Classe américaine",
        "Les Anges gardiens",
        "L'Armée des ombres"
      ],
      "c": 2,
      "info": "Jean-Marie Poiré a réalisé Les Anges gardiens (1995).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Gérard Depardieu ?",
      "a": [
        "Les Bronzés",
        "Bienvenue chez les Ch'tis",
        "Les Anges gardiens",
        "La Chèvre"
      ],
      "c": 2,
      "info": "Gérard Depardieu figure dans Les Anges gardiens (1995).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Anges gardiens » ?",
      "a": [
        "Années 2010",
        "Années 1960",
        "Années 1990",
        "Années 1940"
      ],
      "c": 2,
      "info": "Les Anges gardiens est sorti en 1995, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Gérard Depardieu et Christian Clavier ?",
      "a": [
        "OSS 117 : Le Caire, nid d'espions",
        "Les Anges gardiens",
        "La Traversée de Paris",
        "The Artist"
      ],
      "c": 1,
      "info": "Gérard Depardieu et Christian Clavier jouent dans Les Anges gardiens (1995).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Dîner de cons » ?",
      "a": [
        "Henri Verneuil",
        "Francis Veber",
        "Dany Boon",
        "Jean-Pierre Melville"
      ],
      "c": 1,
      "info": "Le Dîner de cons (1998) : réalisation de Francis Veber.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Dîner de cons » est-il sorti ?",
      "a": [
        "1996",
        "1966",
        "1998",
        "1953"
      ],
      "c": 2,
      "info": "Le Dîner de cons est sorti en 1998.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Dîner de cons » ?",
      "a": [
        "Jacques Villeret",
        "Arletty",
        "Marion Cotillard",
        "Jean-Pierre Bacri"
      ],
      "c": 0,
      "info": "Jacques Villeret joue dans Le Dîner de cons (1998).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Dîner de cons » ?",
      "a": [
        "Thierry Lhermitte",
        "Marlène Jobert",
        "Marina Foïs",
        "Alain Delon"
      ],
      "c": 0,
      "info": "Thierry Lhermitte joue dans Le Dîner de cons (1998).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Francis Veber ?",
      "a": [
        "Ridicule",
        "Le Dîner de cons",
        "Sans toit ni loi",
        "Bande à part"
      ],
      "c": 1,
      "info": "Francis Veber a réalisé Le Dîner de cons (1998).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jacques Villeret ?",
      "a": [
        "Hiroshima mon amour",
        "La Règle du jeu",
        "Le Dîner de cons",
        "Intouchables"
      ],
      "c": 2,
      "info": "Jacques Villeret figure dans Le Dîner de cons (1998).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Dîner de cons » ?",
      "a": [
        "Années 1990",
        "Années 2010",
        "Années 1940",
        "Années 1960"
      ],
      "c": 0,
      "info": "Le Dîner de cons est sorti en 1998, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jacques Villeret et Thierry Lhermitte ?",
      "a": [
        "Le Dîner de cons",
        "Mon oncle d'Amérique",
        "Les Quatre Cents Coups",
        "Les Rivières pourpres"
      ],
      "c": 0,
      "info": "Jacques Villeret et Thierry Lhermitte jouent dans Le Dîner de cons (1998).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Chèvre » ?",
      "a": [
        "Francis Veber",
        "Olivier Nakache et Éric Toledano",
        "Marcel Carné",
        "Olivier Dahan"
      ],
      "c": 0,
      "info": "La Chèvre (1981) : réalisation de Francis Veber.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Chèvre » est-il sorti ?",
      "a": [
        "1981",
        "1974",
        "1973",
        "1998"
      ],
      "c": 0,
      "info": "La Chèvre est sorti en 1981.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Chèvre » ?",
      "a": [
        "Pierre Richard",
        "Jean Reno",
        "Jacqueline Bisset",
        "Anémone"
      ],
      "c": 0,
      "info": "Pierre Richard joue dans La Chèvre (1981).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Chèvre » ?",
      "a": [
        "Nicole Garcia",
        "Gérard Depardieu",
        "Valérie Benguigui",
        "Claire Maurier"
      ],
      "c": 1,
      "info": "Gérard Depardieu joue dans La Chèvre (1981).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Francis Veber ?",
      "a": [
        "Jules et Jim",
        "RRRrrrr!!!",
        "Quai des Orfèvres",
        "La Chèvre"
      ],
      "c": 3,
      "info": "Francis Veber a réalisé La Chèvre (1981).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Pierre Richard ?",
      "a": [
        "Le Salaire de la peur",
        "Hôtel du Nord",
        "La Chèvre",
        "Le Sens de la fête"
      ],
      "c": 2,
      "info": "Pierre Richard figure dans La Chèvre (1981).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Chèvre » ?",
      "a": [
        "Années 1930",
        "Années 1980",
        "Années 2010",
        "Années 1950"
      ],
      "c": 1,
      "info": "La Chèvre est sorti en 1981, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Pierre Richard et Gérard Depardieu ?",
      "a": [
        "Le Clan des Siciliens",
        "Le Bonheur",
        "La Chèvre",
        "Intouchables"
      ],
      "c": 2,
      "info": "Pierre Richard et Gérard Depardieu jouent dans La Chèvre (1981).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Compères » ?",
      "a": [
        "Marcel Carné",
        "Jean Girault",
        "Francis Veber",
        "Mathieu Kassovitz"
      ],
      "c": 2,
      "info": "Les Compères (1983) : réalisation de Francis Veber.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Compères » est-il sorti ?",
      "a": [
        "1989",
        "1938",
        "1983",
        "1963"
      ],
      "c": 2,
      "info": "Les Compères est sorti en 1983.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Compères » ?",
      "a": [
        "Pierre Richard",
        "André Treton",
        "Yves Montand",
        "Dominique Pinon"
      ],
      "c": 0,
      "info": "Pierre Richard joue dans Les Compères (1983).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Compères » ?",
      "a": [
        "Daniel Emilfork",
        "Gérard Depardieu",
        "Suzy Delair",
        "Marcel Dalio"
      ],
      "c": 1,
      "info": "Gérard Depardieu joue dans Les Compères (1983).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Francis Veber ?",
      "a": [
        "Le Jour se lève",
        "Les Bronzés font du ski",
        "Les Compères",
        "La Grande Illusion"
      ],
      "c": 2,
      "info": "Francis Veber a réalisé Les Compères (1983).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Pierre Richard ?",
      "a": [
        "Rien à déclarer",
        "Les Compères",
        "Le Bonheur",
        "Les Bronzés font du ski"
      ],
      "c": 1,
      "info": "Pierre Richard figure dans Les Compères (1983).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Compères » ?",
      "a": [
        "Années 1950",
        "Années 1980",
        "Années 2000",
        "Années 1970"
      ],
      "c": 1,
      "info": "Les Compères est sorti en 1983, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Pierre Richard et Gérard Depardieu ?",
      "a": [
        "Les Compères",
        "Samba",
        "La Classe américaine",
        "La Haine"
      ],
      "c": 0,
      "info": "Pierre Richard et Gérard Depardieu jouent dans Les Compères (1983).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Fugitifs » ?",
      "a": [
        "Marcel Carné",
        "Henri-Georges Clouzot",
        "Francis Veber",
        "Alain Berbérian"
      ],
      "c": 2,
      "info": "Les Fugitifs (1986) : réalisation de Francis Veber.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Fugitifs » est-il sorti ?",
      "a": [
        "1973",
        "1964",
        "1998",
        "1986"
      ],
      "c": 3,
      "info": "Les Fugitifs est sorti en 1986.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Fugitifs » ?",
      "a": [
        "Arletty",
        "Pierre Richard",
        "Benoît Poelvoorde",
        "Emmanuelle Riva"
      ],
      "c": 1,
      "info": "Pierre Richard joue dans Les Fugitifs (1986).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Fugitifs » ?",
      "a": [
        "Nicole Garcia",
        "Gérard Depardieu",
        "Daniel Emilfork",
        "Danielle Darrieux"
      ],
      "c": 1,
      "info": "Gérard Depardieu joue dans Les Fugitifs (1986).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Francis Veber ?",
      "a": [
        "Les Fugitifs",
        "Rien à déclarer",
        "Les Diaboliques",
        "Les Tontons flingueurs"
      ],
      "c": 0,
      "info": "Francis Veber a réalisé Les Fugitifs (1986).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Pierre Richard ?",
      "a": [
        "Les Fugitifs",
        "La Peau douce",
        "Sans toit ni loi",
        "La Môme"
      ],
      "c": 0,
      "info": "Pierre Richard figure dans Les Fugitifs (1986).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Fugitifs » ?",
      "a": [
        "Années 1970",
        "Années 2000",
        "Années 1980",
        "Années 1930"
      ],
      "c": 2,
      "info": "Les Fugitifs est sorti en 1986, dans les années 1980.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Pierre Richard et Gérard Depardieu ?",
      "a": [
        "Les Diaboliques",
        "Un singe en hiver",
        "Le Bonheur",
        "Les Fugitifs"
      ],
      "c": 3,
      "info": "Pierre Richard et Gérard Depardieu jouent dans Les Fugitifs (1986).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Placard » ?",
      "a": [
        "Jean-Pierre Melville",
        "Francis Veber",
        "Patrice Leconte",
        "François Truffaut"
      ],
      "c": 1,
      "info": "Le Placard (2001) : réalisation de Francis Veber.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Placard » est-il sorti ?",
      "a": [
        "1996",
        "1962",
        "2001",
        "1970"
      ],
      "c": 2,
      "info": "Le Placard est sorti en 2001.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Placard » ?",
      "a": [
        "Daniel Auteuil",
        "Sandrine Bonnaire",
        "Lino Ventura",
        "Jean Gabin"
      ],
      "c": 0,
      "info": "Daniel Auteuil joue dans Le Placard (2001).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Placard » ?",
      "a": [
        "Pierre Fresnay",
        "Vincent Cassel",
        "Marlène Jobert",
        "Gérard Depardieu"
      ],
      "c": 3,
      "info": "Gérard Depardieu joue dans Le Placard (2001).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Francis Veber ?",
      "a": [
        "Le Cercle rouge",
        "Le Placard",
        "Le Jour se lève",
        "La Traversée de Paris"
      ],
      "c": 1,
      "info": "Francis Veber a réalisé Le Placard (2001).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Daniel Auteuil ?",
      "a": [
        "Le Placard",
        "La Peau douce",
        "La Cité des enfants perdus",
        "Monsieur Hire"
      ],
      "c": 0,
      "info": "Daniel Auteuil figure dans Le Placard (2001).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Placard » ?",
      "a": [
        "Années 2000",
        "Années 1980",
        "Années 1960",
        "Années 1930"
      ],
      "c": 0,
      "info": "Le Placard est sorti en 2001, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Daniel Auteuil et Gérard Depardieu ?",
      "a": [
        "Les Bronzés font du ski",
        "Le Père Noël est une ordure",
        "Sans toit ni loi",
        "Le Placard"
      ],
      "c": 3,
      "info": "Daniel Auteuil et Gérard Depardieu jouent dans Le Placard (2001).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Cité de la peur » ?",
      "a": [
        "Alain Berbérian",
        "Marcel Carné",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Henri Verneuil"
      ],
      "c": 0,
      "info": "La Cité de la peur (1994) : réalisation de Alain Berbérian.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Cité de la peur » est-il sorti ?",
      "a": [
        "2008",
        "2007",
        "1994",
        "1978"
      ],
      "c": 2,
      "info": "La Cité de la peur est sorti en 1994.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Cité de la peur » ?",
      "a": [
        "Maurice Barthélemy",
        "Alain Chabat",
        "Simone Signoret",
        "Jean Marais"
      ],
      "c": 1,
      "info": "Alain Chabat joue dans La Cité de la peur (1994).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Cité de la peur » ?",
      "a": [
        "Claire Drouot",
        "Jamel Debbouze",
        "Eiji Okada",
        "Dominique Farrugia"
      ],
      "c": 3,
      "info": "Dominique Farrugia joue dans La Cité de la peur (1994).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Alain Berbérian ?",
      "a": [
        "Le Père Noël est une ordure",
        "La Grande Vadrouille",
        "Les Tontons flingueurs",
        "La Cité de la peur"
      ],
      "c": 3,
      "info": "Alain Berbérian a réalisé La Cité de la peur (1994).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Alain Chabat ?",
      "a": [
        "Le Dernier Métro",
        "Astérix et Obélix : Mission Cléopâtre",
        "La Cité de la peur",
        "Le Corniaud"
      ],
      "c": 2,
      "info": "Alain Chabat figure dans La Cité de la peur (1994).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Cité de la peur » ?",
      "a": [
        "Années 1990",
        "Années 1950",
        "Années 1980",
        "Années 1940"
      ],
      "c": 0,
      "info": "La Cité de la peur est sorti en 1994, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Alain Chabat et Dominique Farrugia ?",
      "a": [
        "Les Compères",
        "La Cité de la peur",
        "L'Armée des ombres",
        "Le Jour se lève"
      ],
      "c": 1,
      "info": "Alain Chabat et Dominique Farrugia jouent dans La Cité de la peur (1994).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Astérix et Obélix : Mission Cléopâtre » ?",
      "a": [
        "Alain Chabat",
        "Olivier Nakache et Éric Toledano",
        "Jean-Luc Godard",
        "Henri Verneuil"
      ],
      "c": 0,
      "info": "Astérix et Obélix : Mission Cléopâtre (2002) : réalisation de Alain Chabat.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Astérix et Obélix : Mission Cléopâtre » est-il sorti ?",
      "a": [
        "1950",
        "1986",
        "2010",
        "2002"
      ],
      "c": 3,
      "info": "Astérix et Obélix : Mission Cléopâtre est sorti en 2002.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Astérix et Obélix : Mission Cléopâtre » ?",
      "a": [
        "François Cluzet",
        "André Treton",
        "Emmanuelle Riva",
        "Christian Clavier"
      ],
      "c": 3,
      "info": "Christian Clavier joue dans Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Astérix et Obélix : Mission Cléopâtre » ?",
      "a": [
        "Jamel Debbouze",
        "Jean Seberg",
        "Maria Casarès",
        "Marlène Jobert"
      ],
      "c": 0,
      "info": "Jamel Debbouze joue dans Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Alain Chabat ?",
      "a": [
        "Le Père Noël est une ordure",
        "La Classe américaine",
        "Astérix et Obélix : Mission Cléopâtre",
        "Bienvenue chez les Ch'tis"
      ],
      "c": 2,
      "info": "Alain Chabat a réalisé Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Christian Clavier ?",
      "a": [
        "Astérix et Obélix : Mission Cléopâtre",
        "La Bête humaine",
        "Le Dernier Métro",
        "Monsieur Hire"
      ],
      "c": 0,
      "info": "Christian Clavier figure dans Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Astérix et Obélix : Mission Cléopâtre » ?",
      "a": [
        "Années 1940",
        "Années 2010",
        "Années 1950",
        "Années 2000"
      ],
      "c": 3,
      "info": "Astérix et Obélix : Mission Cléopâtre est sorti en 2002, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Christian Clavier et Jamel Debbouze ?",
      "a": [
        "Le Jour se lève",
        "Astérix et Obélix : Mission Cléopâtre",
        "Les Bronzés",
        "Rien à déclarer"
      ],
      "c": 1,
      "info": "Christian Clavier et Jamel Debbouze jouent dans Astérix et Obélix : Mission Cléopâtre (2002).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « RRRrrrr!!! » ?",
      "a": [
        "Alain Chabat",
        "Agnès Varda",
        "Gérard Oury",
        "Jean Renoir"
      ],
      "c": 0,
      "info": "RRRrrrr!!! (2004) : réalisation de Alain Chabat.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « RRRrrrr!!! » est-il sorti ?",
      "a": [
        "1973",
        "2001",
        "1968",
        "2004"
      ],
      "c": 3,
      "info": "RRRrrrr!!! est sorti en 2004.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « RRRrrrr!!! » ?",
      "a": [
        "Anna Karina",
        "Maurice Barthélemy",
        "Daniel Auteuil",
        "François Cluzet"
      ],
      "c": 1,
      "info": "Maurice Barthélemy joue dans RRRrrrr!!! (2004).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « RRRrrrr!!! » ?",
      "a": [
        "Marina Foïs",
        "Gilles Lellouche",
        "Vincent Cassel",
        "Bernard Blier"
      ],
      "c": 0,
      "info": "Marina Foïs joue dans RRRrrrr!!! (2004).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Alain Chabat ?",
      "a": [
        "Les Aventures de Rabbi Jacob",
        "Sans toit ni loi",
        "Mélodie en sous-sol",
        "RRRrrrr!!!"
      ],
      "c": 3,
      "info": "Alain Chabat a réalisé RRRrrrr!!! (2004).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Maurice Barthélemy ?",
      "a": [
        "Le Retour du Grand Blond",
        "Le Père Noël est une ordure",
        "La Soupe aux choux",
        "RRRrrrr!!!"
      ],
      "c": 3,
      "info": "Maurice Barthélemy figure dans RRRrrrr!!! (2004).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « RRRrrrr!!! » ?",
      "a": [
        "Années 1940",
        "Années 1930",
        "Années 1990",
        "Années 2000"
      ],
      "c": 3,
      "info": "RRRrrrr!!! est sorti en 2004, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Maurice Barthélemy et Marina Foïs ?",
      "a": [
        "Monsieur Hire",
        "Samba",
        "Le Président",
        "RRRrrrr!!!"
      ],
      "c": 3,
      "info": "Maurice Barthélemy et Marina Foïs jouent dans RRRrrrr!!! (2004).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Haine » ?",
      "a": [
        "Jean Cocteau",
        "Jean-Pierre Jeunet et Marc Caro",
        "François Truffaut",
        "Mathieu Kassovitz"
      ],
      "c": 3,
      "info": "La Haine (1995) : réalisation de Mathieu Kassovitz.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Haine » est-il sorti ?",
      "a": [
        "1945",
        "1995",
        "1998",
        "2006"
      ],
      "c": 1,
      "info": "La Haine est sorti en 1995.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Haine » ?",
      "a": [
        "Philippe Noiret",
        "Vincent Cassel",
        "Dustin Hoffman",
        "Patrick Bruel"
      ],
      "c": 1,
      "info": "Vincent Cassel joue dans La Haine (1995).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Haine » ?",
      "a": [
        "Maria Casarès",
        "Yves Montand",
        "Claire Maurier",
        "Hubert Koundé"
      ],
      "c": 3,
      "info": "Hubert Koundé joue dans La Haine (1995).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Mathieu Kassovitz ?",
      "a": [
        "Les Quatre Cents Coups",
        "Samba",
        "La Haine",
        "La Règle du jeu"
      ],
      "c": 2,
      "info": "Mathieu Kassovitz a réalisé La Haine (1995).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Vincent Cassel ?",
      "a": [
        "Les Anges gardiens",
        "La Haine",
        "RRRrrrr!!!",
        "Le Samouraï"
      ],
      "c": 1,
      "info": "Vincent Cassel figure dans La Haine (1995).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Haine » ?",
      "a": [
        "Années 2010",
        "Années 1950",
        "Années 1980",
        "Années 1990"
      ],
      "c": 3,
      "info": "La Haine est sorti en 1995, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Vincent Cassel et Hubert Koundé ?",
      "a": [
        "Les Diaboliques",
        "La Haine",
        "Orphée",
        "Un singe en hiver"
      ],
      "c": 1,
      "info": "Vincent Cassel et Hubert Koundé jouent dans La Haine (1995).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Les Rivières pourpres » ?",
      "a": [
        "Francis Veber",
        "Mathieu Kassovitz",
        "Jean-Marie Poiré",
        "Olivier Dahan"
      ],
      "c": 1,
      "info": "Les Rivières pourpres (2000) : réalisation de Mathieu Kassovitz.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Les Rivières pourpres » est-il sorti ?",
      "a": [
        "2000",
        "1938",
        "2010",
        "1959"
      ],
      "c": 0,
      "info": "Les Rivières pourpres est sorti en 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Les Rivières pourpres » ?",
      "a": [
        "Jean Reno",
        "Dustin Hoffman",
        "Alain Chabat",
        "Maurice Barthélemy"
      ],
      "c": 0,
      "info": "Jean Reno joue dans Les Rivières pourpres (2000).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Rivières pourpres » ?",
      "a": [
        "Bourvil",
        "Marie-Laure Dougnac",
        "Dany Boon",
        "Vincent Cassel"
      ],
      "c": 3,
      "info": "Vincent Cassel joue dans Les Rivières pourpres (2000).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Mathieu Kassovitz ?",
      "a": [
        "Le Père Noël est une ordure",
        "Les Barbouzes",
        "Les Rivières pourpres",
        "Alexandre le Bienheureux"
      ],
      "c": 2,
      "info": "Mathieu Kassovitz a réalisé Les Rivières pourpres (2000).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Reno ?",
      "a": [
        "Les Rivières pourpres",
        "Bande à part",
        "La Grande Illusion",
        "La Guerre des boutons"
      ],
      "c": 0,
      "info": "Jean Reno figure dans Les Rivières pourpres (2000).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Rivières pourpres » ?",
      "a": [
        "Années 1950",
        "Années 2000",
        "Années 1970",
        "Années 1940"
      ],
      "c": 1,
      "info": "Les Rivières pourpres est sorti en 2000, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Reno et Vincent Cassel ?",
      "a": [
        "Astérix et Obélix : Mission Cléopâtre",
        "Un long dimanche de fiançailles",
        "Les Rivières pourpres",
        "La Soupe aux choux"
      ],
      "c": 2,
      "info": "Jean Reno et Vincent Cassel jouent dans Les Rivières pourpres (2000).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Un long dimanche de fiançailles » ?",
      "a": [
        "Henri-Georges Clouzot",
        "Francis Veber",
        "Olivier Dahan",
        "Jean-Pierre Jeunet"
      ],
      "c": 3,
      "info": "Un long dimanche de fiançailles (2004) : réalisation de Jean-Pierre Jeunet.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Un long dimanche de fiançailles » est-il sorti ?",
      "a": [
        "2004",
        "1978",
        "1939",
        "2011"
      ],
      "c": 0,
      "info": "Un long dimanche de fiançailles est sorti en 2004.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Un long dimanche de fiançailles » ?",
      "a": [
        "Pierre Richard",
        "Christian Clavier",
        "Jean-Pierre Léaud",
        "Audrey Tautou"
      ],
      "c": 3,
      "info": "Audrey Tautou joue dans Un long dimanche de fiançailles (2004).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Un long dimanche de fiançailles » ?",
      "a": [
        "Gaspard Ulliel",
        "Sandrine Bonnaire",
        "Francis Blanche",
        "Eiji Okada"
      ],
      "c": 0,
      "info": "Gaspard Ulliel joue dans Un long dimanche de fiançailles (2004).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Pierre Jeunet ?",
      "a": [
        "Les Bronzés font du ski",
        "Hôtel du Nord",
        "Un long dimanche de fiançailles",
        "La Classe américaine"
      ],
      "c": 2,
      "info": "Jean-Pierre Jeunet a réalisé Un long dimanche de fiançailles (2004).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Audrey Tautou ?",
      "a": [
        "Quai des Orfèvres",
        "Le Gendarme de Saint-Tropez",
        "La Règle du jeu",
        "Un long dimanche de fiançailles"
      ],
      "c": 3,
      "info": "Audrey Tautou figure dans Un long dimanche de fiançailles (2004).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Un long dimanche de fiançailles » ?",
      "a": [
        "Années 1930",
        "Années 1990",
        "Années 1960",
        "Années 2000"
      ],
      "c": 3,
      "info": "Un long dimanche de fiançailles est sorti en 2004, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Audrey Tautou et Gaspard Ulliel ?",
      "a": [
        "Un long dimanche de fiançailles",
        "La Nuit américaine",
        "Le Quai des brumes",
        "Le Gendarme de Saint-Tropez"
      ],
      "c": 0,
      "info": "Audrey Tautou et Gaspard Ulliel jouent dans Un long dimanche de fiançailles (2004).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Delicatessen » ?",
      "a": [
        "François Truffaut",
        "Jean-Pierre Jeunet et Marc Caro",
        "Henri-Georges Clouzot",
        "Henri Verneuil"
      ],
      "c": 1,
      "info": "Delicatessen (1991) : réalisation de Jean-Pierre Jeunet et Marc Caro.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Delicatessen » est-il sorti ?",
      "a": [
        "1981",
        "1937",
        "1991",
        "1993"
      ],
      "c": 2,
      "info": "Delicatessen est sorti en 1991.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Delicatessen » ?",
      "a": [
        "Anémone",
        "Alain Chabat",
        "Dominique Pinon",
        "Jacques Villeret"
      ],
      "c": 2,
      "info": "Dominique Pinon joue dans Delicatessen (1991).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Delicatessen » ?",
      "a": [
        "Charles Vanel",
        "Véra Clouzot",
        "Sami Frey",
        "Marie-Laure Dougnac"
      ],
      "c": 3,
      "info": "Marie-Laure Dougnac joue dans Delicatessen (1991).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Pierre Jeunet et Marc Caro ?",
      "a": [
        "Astérix et Obélix : Mission Cléopâtre",
        "Delicatessen",
        "Intouchables",
        "Hiroshima mon amour"
      ],
      "c": 1,
      "info": "Jean-Pierre Jeunet et Marc Caro a réalisé Delicatessen (1991).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Dominique Pinon ?",
      "a": [
        "Le Sens de la fête",
        "Les Quatre Cents Coups",
        "Delicatessen",
        "La Folie des grandeurs"
      ],
      "c": 2,
      "info": "Dominique Pinon figure dans Delicatessen (1991).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Delicatessen » ?",
      "a": [
        "Années 1970",
        "Années 1990",
        "Années 2000",
        "Années 1960"
      ],
      "c": 1,
      "info": "Delicatessen est sorti en 1991, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Dominique Pinon et Marie-Laure Dougnac ?",
      "a": [
        "Le Prénom",
        "La Classe américaine",
        "La Règle du jeu",
        "Delicatessen"
      ],
      "c": 3,
      "info": "Dominique Pinon et Marie-Laure Dougnac jouent dans Delicatessen (1991).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Cité des enfants perdus » ?",
      "a": [
        "Jean-Pierre Jeunet et Marc Caro",
        "Henri-Georges Clouzot",
        "Olivier Dahan",
        "Alain Resnais"
      ],
      "c": 0,
      "info": "La Cité des enfants perdus (1995) : réalisation de Jean-Pierre Jeunet et Marc Caro.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Cité des enfants perdus » est-il sorti ?",
      "a": [
        "1939",
        "1978",
        "2011",
        "1995"
      ],
      "c": 3,
      "info": "La Cité des enfants perdus est sorti en 1995.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Cité des enfants perdus » ?",
      "a": [
        "Emmanuelle Riva",
        "Audrey Tautou",
        "Delphine Seyrig",
        "Ron Perlman"
      ],
      "c": 3,
      "info": "Ron Perlman joue dans La Cité des enfants perdus (1995).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Cité des enfants perdus » ?",
      "a": [
        "Louise Monot",
        "Marie-Laure Dougnac",
        "Daniel Emilfork",
        "Pierre Fresnay"
      ],
      "c": 2,
      "info": "Daniel Emilfork joue dans La Cité des enfants perdus (1995).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Jean-Pierre Jeunet et Marc Caro ?",
      "a": [
        "La Cité des enfants perdus",
        "Bienvenue chez les Ch'tis",
        "Rien à déclarer",
        "Mélodie en sous-sol"
      ],
      "c": 0,
      "info": "Jean-Pierre Jeunet et Marc Caro a réalisé La Cité des enfants perdus (1995).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Ron Perlman ?",
      "a": [
        "Le Bonheur",
        "La Cité des enfants perdus",
        "L'Année dernière à Marienbad",
        "Hôtel du Nord"
      ],
      "c": 1,
      "info": "Ron Perlman figure dans La Cité des enfants perdus (1995).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Cité des enfants perdus » ?",
      "a": [
        "Années 1990",
        "Années 1950",
        "Années 1970",
        "Années 1940"
      ],
      "c": 0,
      "info": "La Cité des enfants perdus est sorti en 1995, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Ron Perlman et Daniel Emilfork ?",
      "a": [
        "Les Bronzés font du ski",
        "Les Diaboliques",
        "Le Samouraï",
        "La Cité des enfants perdus"
      ],
      "c": 3,
      "info": "Ron Perlman et Daniel Emilfork jouent dans La Cité des enfants perdus (1995).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Môme » ?",
      "a": [
        "Georges Lautner",
        "Olivier Dahan",
        "Jean-Pierre Jeunet",
        "Jean Renoir"
      ],
      "c": 1,
      "info": "La Môme (2007) : réalisation de Olivier Dahan.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Môme » est-il sorti ?",
      "a": [
        "1996",
        "1960",
        "2007",
        "2017"
      ],
      "c": 2,
      "info": "La Môme est sorti en 2007.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Môme » ?",
      "a": [
        "Yves Montand",
        "Arletty",
        "Nora Gregor",
        "Marion Cotillard"
      ],
      "c": 3,
      "info": "Marion Cotillard joue dans La Môme (2007).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Môme » ?",
      "a": [
        "Yves Montand",
        "Bernard Blier",
        "Francis Blanche",
        "Sylvie Testud"
      ],
      "c": 3,
      "info": "Sylvie Testud joue dans La Môme (2007).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Olivier Dahan ?",
      "a": [
        "La Môme",
        "OSS 117 : Rio ne répond plus",
        "La Bête humaine",
        "La Grande Vadrouille"
      ],
      "c": 0,
      "info": "Olivier Dahan a réalisé La Môme (2007).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Marion Cotillard ?",
      "a": [
        "Les Barbouzes",
        "La Môme",
        "Les Anges gardiens",
        "Le Gendarme de Saint-Tropez"
      ],
      "c": 1,
      "info": "Marion Cotillard figure dans La Môme (2007).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Môme » ?",
      "a": [
        "Années 1990",
        "Années 1980",
        "Années 2010",
        "Années 2000"
      ],
      "c": 3,
      "info": "La Môme est sorti en 2007, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Marion Cotillard et Sylvie Testud ?",
      "a": [
        "La Traversée de Paris",
        "La Peau douce",
        "Ridicule",
        "La Môme"
      ],
      "c": 3,
      "info": "Marion Cotillard et Sylvie Testud jouent dans La Môme (2007).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Intouchables » ?",
      "a": [
        "Olivier Nakache et Éric Toledano",
        "Jean Renoir",
        "Claude Autant-Lara",
        "Alexandre de La Patellière et Matthieu Delaporte"
      ],
      "c": 0,
      "info": "Intouchables (2011) : réalisation de Olivier Nakache et Éric Toledano.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Intouchables » est-il sorti ?",
      "a": [
        "2017",
        "2006",
        "2011",
        "1962"
      ],
      "c": 2,
      "info": "Intouchables est sorti en 2011.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Intouchables » ?",
      "a": [
        "François Cluzet",
        "Jean-Pierre Bacri",
        "Arletty",
        "Anémone"
      ],
      "c": 0,
      "info": "François Cluzet joue dans Intouchables (2011).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Intouchables » ?",
      "a": [
        "Jamel Debbouze",
        "Fanny Ardant",
        "Omar Sy",
        "Gaspard Ulliel"
      ],
      "c": 2,
      "info": "Omar Sy joue dans Intouchables (2011).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Olivier Nakache et Éric Toledano ?",
      "a": [
        "La Chèvre",
        "Les Barbouzes",
        "La Grande Vadrouille",
        "Intouchables"
      ],
      "c": 3,
      "info": "Olivier Nakache et Éric Toledano a réalisé Intouchables (2011).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir François Cluzet ?",
      "a": [
        "Le Cercle rouge",
        "Intouchables",
        "Les Diaboliques",
        "La Soupe aux choux"
      ],
      "c": 1,
      "info": "François Cluzet figure dans Intouchables (2011).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Intouchables » ?",
      "a": [
        "Années 1990",
        "Années 2000",
        "Années 2010",
        "Années 1940"
      ],
      "c": 2,
      "info": "Intouchables est sorti en 2011, dans les années 2010.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit François Cluzet et Omar Sy ?",
      "a": [
        "La Nuit américaine",
        "Les Aventures de Rabbi Jacob",
        "Intouchables",
        "Bienvenue chez les Ch'tis"
      ],
      "c": 2,
      "info": "François Cluzet et Omar Sy jouent dans Intouchables (2011).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Sens de la fête » ?",
      "a": [
        "Dany Boon",
        "Olivier Nakache et Éric Toledano",
        "Mathieu Kassovitz",
        "Jean-Pierre Jeunet"
      ],
      "c": 1,
      "info": "Le Sens de la fête (2017) : réalisation de Olivier Nakache et Éric Toledano.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Sens de la fête » est-il sorti ?",
      "a": [
        "1966",
        "1970",
        "2017",
        "2009"
      ],
      "c": 2,
      "info": "Le Sens de la fête est sorti en 2017.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Sens de la fête » ?",
      "a": [
        "Nora Gregor",
        "Delphine Seyrig",
        "Jean-Pierre Bacri",
        "Gérard Depardieu"
      ],
      "c": 2,
      "info": "Jean-Pierre Bacri joue dans Le Sens de la fête (2017).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Sens de la fête » ?",
      "a": [
        "Bourvil",
        "Marina Foïs",
        "Suzy Delair",
        "Gilles Lellouche"
      ],
      "c": 3,
      "info": "Gilles Lellouche joue dans Le Sens de la fête (2017).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Olivier Nakache et Éric Toledano ?",
      "a": [
        "Le Jour se lève",
        "Mon oncle d'Amérique",
        "Les Visiteurs",
        "Le Sens de la fête"
      ],
      "c": 3,
      "info": "Olivier Nakache et Éric Toledano a réalisé Le Sens de la fête (2017).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean-Pierre Bacri ?",
      "a": [
        "Le Sens de la fête",
        "La Classe américaine",
        "Cléo de 5 à 7",
        "Le Salaire de la peur"
      ],
      "c": 0,
      "info": "Jean-Pierre Bacri figure dans Le Sens de la fête (2017).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Sens de la fête » ?",
      "a": [
        "Années 1940",
        "Années 2010",
        "Années 1990",
        "Années 1950"
      ],
      "c": 1,
      "info": "Le Sens de la fête est sorti en 2017, dans les années 2010.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean-Pierre Bacri et Gilles Lellouche ?",
      "a": [
        "Les Bronzés font du ski",
        "Un long dimanche de fiançailles",
        "Le Sens de la fête",
        "Le Président"
      ],
      "c": 2,
      "info": "Jean-Pierre Bacri et Gilles Lellouche jouent dans Le Sens de la fête (2017).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Samba » ?",
      "a": [
        "Yves Robert",
        "Olivier Nakache et Éric Toledano",
        "Jean Girault",
        "Dany Boon"
      ],
      "c": 1,
      "info": "Samba (2014) : réalisation de Olivier Nakache et Éric Toledano.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Samba » est-il sorti ?",
      "a": [
        "1954",
        "2014",
        "1945",
        "1973"
      ],
      "c": 1,
      "info": "Samba est sorti en 2014.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Samba » ?",
      "a": [
        "Jean Desailly",
        "Omar Sy",
        "Vincent Cassel",
        "Nora Gregor"
      ],
      "c": 1,
      "info": "Omar Sy joue dans Samba (2014).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Samba » ?",
      "a": [
        "Charlotte Gainsbourg",
        "Oskar Werner",
        "Marina Foïs",
        "Giorgio Albertazzi"
      ],
      "c": 0,
      "info": "Charlotte Gainsbourg joue dans Samba (2014).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Olivier Nakache et Éric Toledano ?",
      "a": [
        "Le Quai des brumes",
        "La Haine",
        "Samba",
        "Astérix et Obélix : Mission Cléopâtre"
      ],
      "c": 2,
      "info": "Olivier Nakache et Éric Toledano a réalisé Samba (2014).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Omar Sy ?",
      "a": [
        "Les Barbouzes",
        "Les Compères",
        "La Chèvre",
        "Samba"
      ],
      "c": 3,
      "info": "Omar Sy figure dans Samba (2014).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Samba » ?",
      "a": [
        "Années 1930",
        "Années 2010",
        "Années 1980",
        "Années 2000"
      ],
      "c": 1,
      "info": "Samba est sorti en 2014, dans les années 2010.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Omar Sy et Charlotte Gainsbourg ?",
      "a": [
        "Samba",
        "Le Gendarme de Saint-Tropez",
        "Alexandre le Bienheureux",
        "Le Corniaud"
      ],
      "c": 0,
      "info": "Omar Sy et Charlotte Gainsbourg jouent dans Samba (2014).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Bienvenue chez les Ch'tis » ?",
      "a": [
        "Henri-Georges Clouzot",
        "Jean Renoir",
        "Claude Autant-Lara",
        "Dany Boon"
      ],
      "c": 3,
      "info": "Bienvenue chez les Ch'tis (2008) : réalisation de Dany Boon.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Bienvenue chez les Ch'tis » est-il sorti ?",
      "a": [
        "2017",
        "2008",
        "1961",
        "1998"
      ],
      "c": 1,
      "info": "Bienvenue chez les Ch'tis est sorti en 2008.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Bienvenue chez les Ch'tis » ?",
      "a": [
        "Patrick Bruel",
        "Jean-Pierre Léaud",
        "Jean-Claude Drouot",
        "Kad Merad"
      ],
      "c": 3,
      "info": "Kad Merad joue dans Bienvenue chez les Ch'tis (2008).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Bienvenue chez les Ch'tis » ?",
      "a": [
        "Thierry Lhermitte",
        "Jean Carmet",
        "Dany Boon",
        "Simone Simon"
      ],
      "c": 2,
      "info": "Dany Boon joue dans Bienvenue chez les Ch'tis (2008).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Dany Boon ?",
      "a": [
        "Le Sens de la fête",
        "Bienvenue chez les Ch'tis",
        "OSS 117 : Rio ne répond plus",
        "Orphée"
      ],
      "c": 1,
      "info": "Dany Boon a réalisé Bienvenue chez les Ch'tis (2008).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Kad Merad ?",
      "a": [
        "La Chèvre",
        "Les Quatre Cents Coups",
        "Bienvenue chez les Ch'tis",
        "Un long dimanche de fiançailles"
      ],
      "c": 2,
      "info": "Kad Merad figure dans Bienvenue chez les Ch'tis (2008).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Bienvenue chez les Ch'tis » ?",
      "a": [
        "Années 1930",
        "Années 1960",
        "Années 2000",
        "Années 1990"
      ],
      "c": 2,
      "info": "Bienvenue chez les Ch'tis est sorti en 2008, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Kad Merad et Dany Boon ?",
      "a": [
        "Bienvenue chez les Ch'tis",
        "La Folie des grandeurs",
        "La Haine",
        "Alexandre le Bienheureux"
      ],
      "c": 0,
      "info": "Kad Merad et Dany Boon jouent dans Bienvenue chez les Ch'tis (2008).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Rien à déclarer » ?",
      "a": [
        "Alain Berbérian",
        "Jean-Pierre Jeunet",
        "Dany Boon",
        "Michel Hazanavicius"
      ],
      "c": 2,
      "info": "Rien à déclarer (2010) : réalisation de Dany Boon.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Rien à déclarer » est-il sorti ?",
      "a": [
        "1964",
        "1973",
        "1982",
        "2010"
      ],
      "c": 3,
      "info": "Rien à déclarer est sorti en 2010.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Rien à déclarer » ?",
      "a": [
        "Charles Berling",
        "Alain Chabat",
        "Jeanne Moreau",
        "Benoît Poelvoorde"
      ],
      "c": 3,
      "info": "Benoît Poelvoorde joue dans Rien à déclarer (2010).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Rien à déclarer » ?",
      "a": [
        "Marina Foïs",
        "Dany Boon",
        "Christian Clavier",
        "Suzy Delair"
      ],
      "c": 1,
      "info": "Dany Boon joue dans Rien à déclarer (2010).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Dany Boon ?",
      "a": [
        "Rien à déclarer",
        "Les Quatre Cents Coups",
        "Jules et Jim",
        "Delicatessen"
      ],
      "c": 0,
      "info": "Dany Boon a réalisé Rien à déclarer (2010).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Benoît Poelvoorde ?",
      "a": [
        "RRRrrrr!!!",
        "Les Bronzés",
        "L'Année dernière à Marienbad",
        "Rien à déclarer"
      ],
      "c": 3,
      "info": "Benoît Poelvoorde figure dans Rien à déclarer (2010).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Rien à déclarer » ?",
      "a": [
        "Années 1930",
        "Années 2010",
        "Années 1960",
        "Années 2000"
      ],
      "c": 1,
      "info": "Rien à déclarer est sorti en 2010, dans les années 2010.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Benoît Poelvoorde et Dany Boon ?",
      "a": [
        "Un long dimanche de fiançailles",
        "Rien à déclarer",
        "Le Président",
        "Le Dîner de cons"
      ],
      "c": 1,
      "info": "Benoît Poelvoorde et Dany Boon jouent dans Rien à déclarer (2010).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « OSS 117 : Le Caire, nid d'espions » ?",
      "a": [
        "Olivier Dahan",
        "Michel Hazanavicius",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Jean-Pierre Jeunet"
      ],
      "c": 1,
      "info": "OSS 117 : Le Caire, nid d'espions (2006) : réalisation de Michel Hazanavicius.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « OSS 117 : Le Caire, nid d'espions » est-il sorti ?",
      "a": [
        "2006",
        "1985",
        "2014",
        "1974"
      ],
      "c": 0,
      "info": "OSS 117 : Le Caire, nid d'espions est sorti en 2006.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « OSS 117 : Le Caire, nid d'espions » ?",
      "a": [
        "Jean Reno",
        "Christian Clavier",
        "Jean Dujardin",
        "Bourvil"
      ],
      "c": 2,
      "info": "Jean Dujardin joue dans OSS 117 : Le Caire, nid d'espions (2006).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « OSS 117 : Le Caire, nid d'espions » ?",
      "a": [
        "Jean Reno",
        "Françoise Dorléac",
        "Alain Delon",
        "Bérénice Bejo"
      ],
      "c": 3,
      "info": "Bérénice Bejo joue dans OSS 117 : Le Caire, nid d'espions (2006).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Michel Hazanavicius ?",
      "a": [
        "Les Bronzés font du ski",
        "La Peau douce",
        "OSS 117 : Le Caire, nid d'espions",
        "L'Année dernière à Marienbad"
      ],
      "c": 2,
      "info": "Michel Hazanavicius a réalisé OSS 117 : Le Caire, nid d'espions (2006).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Dujardin ?",
      "a": [
        "Les Fugitifs",
        "L'Année dernière à Marienbad",
        "Le Rouge et le Noir",
        "OSS 117 : Le Caire, nid d'espions"
      ],
      "c": 3,
      "info": "Jean Dujardin figure dans OSS 117 : Le Caire, nid d'espions (2006).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « OSS 117 : Le Caire, nid d'espions » ?",
      "a": [
        "Années 2010",
        "Années 1980",
        "Années 2000",
        "Années 1950"
      ],
      "c": 2,
      "info": "OSS 117 : Le Caire, nid d'espions est sorti en 2006, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Dujardin et Bérénice Bejo ?",
      "a": [
        "La Môme",
        "La Peau douce",
        "OSS 117 : Le Caire, nid d'espions",
        "Le Père Noël est une ordure"
      ],
      "c": 2,
      "info": "Jean Dujardin et Bérénice Bejo jouent dans OSS 117 : Le Caire, nid d'espions (2006).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « OSS 117 : Rio ne répond plus » ?",
      "a": [
        "Georges Lautner",
        "Henri Verneuil",
        "Michel Hazanavicius",
        "Jean-Luc Godard"
      ],
      "c": 2,
      "info": "OSS 117 : Rio ne répond plus (2009) : réalisation de Michel Hazanavicius.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « OSS 117 : Rio ne répond plus » est-il sorti ?",
      "a": [
        "2009",
        "1961",
        "1945",
        "1974"
      ],
      "c": 0,
      "info": "OSS 117 : Rio ne répond plus est sorti en 2009.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « OSS 117 : Rio ne répond plus » ?",
      "a": [
        "Corinne Marchand",
        "Yves Montand",
        "Jean Dujardin",
        "Catherine Deneuve"
      ],
      "c": 2,
      "info": "Jean Dujardin joue dans OSS 117 : Rio ne répond plus (2009).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « OSS 117 : Rio ne répond plus » ?",
      "a": [
        "Bérénice Bejo",
        "Gérard Depardieu",
        "Louise Monot",
        "Bourvil"
      ],
      "c": 2,
      "info": "Louise Monot joue dans OSS 117 : Rio ne répond plus (2009).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Michel Hazanavicius ?",
      "a": [
        "Cléo de 5 à 7",
        "Le Placard",
        "Le Dîner de cons",
        "OSS 117 : Rio ne répond plus"
      ],
      "c": 3,
      "info": "Michel Hazanavicius a réalisé OSS 117 : Rio ne répond plus (2009).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Dujardin ?",
      "a": [
        "La Traversée de Paris",
        "Les Quatre Cents Coups",
        "La Haine",
        "OSS 117 : Rio ne répond plus"
      ],
      "c": 3,
      "info": "Jean Dujardin figure dans OSS 117 : Rio ne répond plus (2009).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « OSS 117 : Rio ne répond plus » ?",
      "a": [
        "Années 2000",
        "Années 1970",
        "Années 1990",
        "Années 1930"
      ],
      "c": 0,
      "info": "OSS 117 : Rio ne répond plus est sorti en 2009, dans les années 2000.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Dujardin et Louise Monot ?",
      "a": [
        "Le Dernier Métro",
        "À bout de souffle",
        "OSS 117 : Rio ne répond plus",
        "Hôtel du Nord"
      ],
      "c": 2,
      "info": "Jean Dujardin et Louise Monot jouent dans OSS 117 : Rio ne répond plus (2009).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « The Artist » ?",
      "a": [
        "Michel Hazanavicius",
        "Georges Lautner",
        "Claude Autant-Lara",
        "Jean Cocteau"
      ],
      "c": 0,
      "info": "The Artist (2011) : réalisation de Michel Hazanavicius.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « The Artist » est-il sorti ?",
      "a": [
        "1994",
        "2017",
        "2011",
        "1953"
      ],
      "c": 2,
      "info": "The Artist est sorti en 2011.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « The Artist » ?",
      "a": [
        "Louis de Funès",
        "Delphine Seyrig",
        "Jean Dujardin",
        "Jean-Claude Drouot"
      ],
      "c": 2,
      "info": "Jean Dujardin joue dans The Artist (2011).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « The Artist » ?",
      "a": [
        "Antoine Bourseiller",
        "Bérénice Bejo",
        "Macha Méril",
        "Hubert Koundé"
      ],
      "c": 1,
      "info": "Bérénice Bejo joue dans The Artist (2011).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Michel Hazanavicius ?",
      "a": [
        "Hiroshima mon amour",
        "The Artist",
        "Les Quatre Cents Coups",
        "La Règle du jeu"
      ],
      "c": 1,
      "info": "Michel Hazanavicius a réalisé The Artist (2011).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Jean Dujardin ?",
      "a": [
        "Les Compères",
        "Ridicule",
        "The Artist",
        "La Bête humaine"
      ],
      "c": 2,
      "info": "Jean Dujardin figure dans The Artist (2011).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « The Artist » ?",
      "a": [
        "Années 1940",
        "Années 2010",
        "Années 1930",
        "Années 1990"
      ],
      "c": 1,
      "info": "The Artist est sorti en 2011, dans les années 2010.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Jean Dujardin et Bérénice Bejo ?",
      "a": [
        "The Artist",
        "Samba",
        "La Cité de la peur",
        "Le Rouge et le Noir"
      ],
      "c": 0,
      "info": "Jean Dujardin et Bérénice Bejo jouent dans The Artist (2011).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « La Classe américaine » ?",
      "a": [
        "Michel Hazanavicius et Dominique Mézerette",
        "François Truffaut",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Claude Autant-Lara"
      ],
      "c": 0,
      "info": "La Classe américaine (1993) : réalisation de Michel Hazanavicius et Dominique Mézerette.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « La Classe américaine » est-il sorti ?",
      "a": [
        "1938",
        "1980",
        "1993",
        "1970"
      ],
      "c": 2,
      "info": "La Classe américaine est sorti en 1993.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « La Classe américaine » ?",
      "a": [
        "Alain Chabat",
        "Jean-Pierre Bacri",
        "Dustin Hoffman",
        "Jean Gabin"
      ],
      "c": 2,
      "info": "Dustin Hoffman joue dans La Classe américaine (1993).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Classe américaine » ?",
      "a": [
        "Maria Casarès",
        "Yves Montand",
        "Robert Redford",
        "François Périer"
      ],
      "c": 2,
      "info": "Robert Redford joue dans La Classe américaine (1993).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Michel Hazanavicius et Dominique Mézerette ?",
      "a": [
        "La Classe américaine",
        "Le Grand Blond avec une chaussure noire",
        "Les Rivières pourpres",
        "Les Fugitifs"
      ],
      "c": 0,
      "info": "Michel Hazanavicius et Dominique Mézerette a réalisé La Classe américaine (1993).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Dustin Hoffman ?",
      "a": [
        "La Classe américaine",
        "Le Grand Blond avec une chaussure noire",
        "Le Gendarme de Saint-Tropez",
        "Pierrot le Fou"
      ],
      "c": 0,
      "info": "Dustin Hoffman figure dans La Classe américaine (1993).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Classe américaine » ?",
      "a": [
        "Années 1940",
        "Années 1970",
        "Années 1960",
        "Années 1990"
      ],
      "c": 3,
      "info": "La Classe américaine est sorti en 1993, dans les années 1990.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Dustin Hoffman et Robert Redford ?",
      "a": [
        "Les Rivières pourpres",
        "La Classe américaine",
        "La Cité des enfants perdus",
        "Mélodie en sous-sol"
      ],
      "c": 1,
      "info": "Dustin Hoffman et Robert Redford jouent dans La Classe américaine (1993).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Le Prénom » ?",
      "a": [
        "Gérard Oury",
        "Alexandre de La Patellière et Matthieu Delaporte",
        "Jean-Pierre Melville",
        "Michel Hazanavicius"
      ],
      "c": 1,
      "info": "Le Prénom (2012) : réalisation de Alexandre de La Patellière et Matthieu Delaporte.",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "En quelle année « Le Prénom » est-il sorti ?",
      "a": [
        "1963",
        "2012",
        "1996",
        "2014"
      ],
      "c": 1,
      "info": "Le Prénom est sorti en 2012.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel interprète figure au générique de « Le Prénom » ?",
      "a": [
        "Patrick Bruel",
        "Sandrine Bonnaire",
        "Alain Chabat",
        "Michel Blanc"
      ],
      "c": 0,
      "info": "Patrick Bruel joue dans Le Prénom (2012).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Prénom » ?",
      "a": [
        "Marlène Jobert",
        "Omar Sy",
        "Daniel Emilfork",
        "Valérie Benguigui"
      ],
      "c": 3,
      "info": "Valérie Benguigui joue dans Le Prénom (2012).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film a été réalisé par Alexandre de La Patellière et Matthieu Delaporte ?",
      "a": [
        "Le Retour du Grand Blond",
        "Bienvenue chez les Ch'tis",
        "Le Samouraï",
        "Le Prénom"
      ],
      "c": 3,
      "info": "Alexandre de La Patellière et Matthieu Delaporte a réalisé Le Prénom (2012).",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Dans quel film peut-on voir Patrick Bruel ?",
      "a": [
        "Le Salaire de la peur",
        "La Classe américaine",
        "Le Prénom",
        "La Cité de la peur"
      ],
      "c": 2,
      "info": "Patrick Bruel figure dans Le Prénom (2012).",
      "level": "amateur",
      "origin": "FR"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Prénom » ?",
      "a": [
        "Années 2000",
        "Années 2010",
        "Années 1990",
        "Années 1960"
      ],
      "c": 1,
      "info": "Le Prénom est sorti en 2012, dans les années 2010.",
      "level": "cinephile",
      "origin": "FR"
    },
    {
      "q": "Quel film réunit Patrick Bruel et Valérie Benguigui ?",
      "a": [
        "Le Prénom",
        "Le Placard",
        "Les Diaboliques",
        "Les Bronzés"
      ],
      "c": 0,
      "info": "Patrick Bruel et Valérie Benguigui jouent dans Le Prénom (2012).",
      "level": "expert",
      "origin": "FR"
    },
    {
      "q": "Qui a réalisé « Avatar » ?",
      "a": [
        "James Cameron",
        "Peter Jackson",
        "Ridley Scott",
        "Quentin Tarantino"
      ],
      "c": 0,
      "info": "Avatar (2009) : réalisation de James Cameron.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Avatar » est-il sorti ?",
      "a": [
        "1982",
        "1972",
        "2009",
        "2000"
      ],
      "c": 2,
      "info": "Avatar est sorti en 2009.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Avatar » ?",
      "a": [
        "Michael J. Fox",
        "Sam Worthington",
        "Roy Scheider",
        "Russell Crowe"
      ],
      "c": 1,
      "info": "Sam Worthington joue dans Avatar (2009).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Avatar » ?",
      "a": [
        "Ingrid Bergman",
        "Tim Roth",
        "John Cazale",
        "Zoe Saldaña"
      ],
      "c": 3,
      "info": "Zoe Saldaña joue dans Avatar (2009).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par James Cameron ?",
      "a": [
        "Le Seigneur des anneaux : Les Deux Tours",
        "Seul au monde",
        "Avatar",
        "Gladiator"
      ],
      "c": 2,
      "info": "James Cameron a réalisé Avatar (2009).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Sam Worthington ?",
      "a": [
        "Avatar",
        "Forrest Gump",
        "Casablanca",
        "Pulp Fiction"
      ],
      "c": 0,
      "info": "Sam Worthington figure dans Avatar (2009).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Avatar » ?",
      "a": [
        "Années 1940",
        "Années 2000",
        "Années 1990",
        "Années 1970"
      ],
      "c": 1,
      "info": "Avatar est sorti en 2009, dans les années 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Sam Worthington et Zoe Saldaña ?",
      "a": [
        "La Liste de Schindler",
        "Avatar",
        "Seul au monde",
        "Forrest Gump"
      ],
      "c": 1,
      "info": "Sam Worthington et Zoe Saldaña jouent dans Avatar (2009).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Le Parrain » ?",
      "a": [
        "Francis Ford Coppola",
        "Ridley Scott",
        "Robert Zemeckis",
        "Peter Jackson"
      ],
      "c": 0,
      "info": "Le Parrain (1972) : réalisation de Francis Ford Coppola.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Le Parrain » est-il sorti ?",
      "a": [
        "1972",
        "2009",
        "1993",
        "1975"
      ],
      "c": 0,
      "info": "Le Parrain est sorti en 1972.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Le Parrain » ?",
      "a": [
        "Humphrey Bogart",
        "Patrick Swayze",
        "Sam Worthington",
        "Marlon Brando"
      ],
      "c": 3,
      "info": "Marlon Brando joue dans Le Parrain (1972).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Parrain » ?",
      "a": [
        "Samuel L. Jackson",
        "Al Pacino",
        "Ingrid Bergman",
        "John Cazale"
      ],
      "c": 1,
      "info": "Al Pacino joue dans Le Parrain (1972).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Francis Ford Coppola ?",
      "a": [
        "Le Parrain",
        "La Liste de Schindler",
        "Gladiator",
        "Pulp Fiction"
      ],
      "c": 0,
      "info": "Francis Ford Coppola a réalisé Le Parrain (1972).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Marlon Brando ?",
      "a": [
        "Le Parrain",
        "Forrest Gump",
        "Les Dents de la mer",
        "Jurassic Park"
      ],
      "c": 0,
      "info": "Marlon Brando figure dans Le Parrain (1972).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Parrain » ?",
      "a": [
        "Années 1990",
        "Années 1980",
        "Années 1940",
        "Années 1970"
      ],
      "c": 3,
      "info": "Le Parrain est sorti en 1972, dans les années 1970.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Marlon Brando et Al Pacino ?",
      "a": [
        "Casablanca",
        "Dirty Dancing",
        "Avatar",
        "Le Parrain"
      ],
      "c": 3,
      "info": "Marlon Brando et Al Pacino jouent dans Le Parrain (1972).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Apocalypse Now » ?",
      "a": [
        "Peter Jackson",
        "Steven Spielberg",
        "Robert Zemeckis",
        "Francis Ford Coppola"
      ],
      "c": 3,
      "info": "Apocalypse Now (1979) : réalisation de Francis Ford Coppola.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Apocalypse Now » est-il sorti ?",
      "a": [
        "1975",
        "1979",
        "1994",
        "1987"
      ],
      "c": 1,
      "info": "Apocalypse Now est sorti en 1979.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Apocalypse Now » ?",
      "a": [
        "Henry Thomas",
        "Martin Sheen",
        "Roy Scheider",
        "Michael J. Fox"
      ],
      "c": 1,
      "info": "Martin Sheen joue dans Apocalypse Now (1979).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Apocalypse Now » ?",
      "a": [
        "Ian McKellen",
        "Viggo Mortensen",
        "Marlon Brando",
        "Lucy Liu"
      ],
      "c": 2,
      "info": "Marlon Brando joue dans Apocalypse Now (1979).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Francis Ford Coppola ?",
      "a": [
        "Reservoir Dogs",
        "Pulp Fiction",
        "Apocalypse Now",
        "Seul au monde"
      ],
      "c": 2,
      "info": "Francis Ford Coppola a réalisé Apocalypse Now (1979).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Martin Sheen ?",
      "a": [
        "Gladiator",
        "Apocalypse Now",
        "Les Dents de la mer",
        "Jurassic Park"
      ],
      "c": 1,
      "info": "Martin Sheen figure dans Apocalypse Now (1979).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Apocalypse Now » ?",
      "a": [
        "Années 1970",
        "Années 1990",
        "Années 1940",
        "Années 2000"
      ],
      "c": 0,
      "info": "Apocalypse Now est sorti en 1979, dans les années 1970.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Martin Sheen et Marlon Brando ?",
      "a": [
        "La Liste de Schindler",
        "E.T. l'extra-terrestre",
        "Pulp Fiction",
        "Apocalypse Now"
      ],
      "c": 3,
      "info": "Martin Sheen et Marlon Brando jouent dans Apocalypse Now (1979).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Conversation secrète » ?",
      "a": [
        "Michael Curtiz",
        "Emile Ardolino",
        "Francis Ford Coppola",
        "Quentin Tarantino"
      ],
      "c": 2,
      "info": "Conversation secrète (1974) : réalisation de Francis Ford Coppola.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Conversation secrète » est-il sorti ?",
      "a": [
        "1987",
        "1974",
        "1982",
        "2000"
      ],
      "c": 1,
      "info": "Conversation secrète est sorti en 1974.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Conversation secrète » ?",
      "a": [
        "Gene Hackman",
        "Roy Scheider",
        "Martin Sheen",
        "Liam Neeson"
      ],
      "c": 0,
      "info": "Gene Hackman joue dans Conversation secrète (1974).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Conversation secrète » ?",
      "a": [
        "Christopher Lloyd",
        "Viggo Mortensen",
        "Joaquin Phoenix",
        "John Cazale"
      ],
      "c": 3,
      "info": "John Cazale joue dans Conversation secrète (1974).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Francis Ford Coppola ?",
      "a": [
        "Retour vers le futur",
        "Conversation secrète",
        "Reservoir Dogs",
        "Kill Bill : Volume 1"
      ],
      "c": 1,
      "info": "Francis Ford Coppola a réalisé Conversation secrète (1974).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Gene Hackman ?",
      "a": [
        "Le Seigneur des anneaux : Le Retour du roi",
        "Conversation secrète",
        "Les Dents de la mer",
        "Le Seigneur des anneaux : Les Deux Tours"
      ],
      "c": 1,
      "info": "Gene Hackman figure dans Conversation secrète (1974).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Conversation secrète » ?",
      "a": [
        "Années 1940",
        "Années 1970",
        "Années 1990",
        "Années 1980"
      ],
      "c": 1,
      "info": "Conversation secrète est sorti en 1974, dans les années 1970.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Gene Hackman et John Cazale ?",
      "a": [
        "Conversation secrète",
        "Reservoir Dogs",
        "Pulp Fiction",
        "Avatar"
      ],
      "c": 0,
      "info": "Gene Hackman et John Cazale jouent dans Conversation secrète (1974).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Pulp Fiction » ?",
      "a": [
        "Emile Ardolino",
        "James Cameron",
        "Quentin Tarantino",
        "Ridley Scott"
      ],
      "c": 2,
      "info": "Pulp Fiction (1994) : réalisation de Quentin Tarantino.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Pulp Fiction » est-il sorti ?",
      "a": [
        "1994",
        "2001",
        "2003",
        "1975"
      ],
      "c": 0,
      "info": "Pulp Fiction est sorti en 1994.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Pulp Fiction » ?",
      "a": [
        "Sam Worthington",
        "John Travolta",
        "Liam Neeson",
        "Roy Scheider"
      ],
      "c": 1,
      "info": "John Travolta joue dans Pulp Fiction (1994).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Pulp Fiction » ?",
      "a": [
        "Ralph Fiennes",
        "Lucy Liu",
        "Samuel L. Jackson",
        "Viggo Mortensen"
      ],
      "c": 2,
      "info": "Samuel L. Jackson joue dans Pulp Fiction (1994).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Quentin Tarantino ?",
      "a": [
        "Retour vers le futur",
        "La Liste de Schindler",
        "Pulp Fiction",
        "Forrest Gump"
      ],
      "c": 2,
      "info": "Quentin Tarantino a réalisé Pulp Fiction (1994).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir John Travolta ?",
      "a": [
        "Gladiator",
        "Le Seigneur des anneaux : Les Deux Tours",
        "Pulp Fiction",
        "Conversation secrète"
      ],
      "c": 2,
      "info": "John Travolta figure dans Pulp Fiction (1994).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Pulp Fiction » ?",
      "a": [
        "Années 1970",
        "Années 2000",
        "Années 1940",
        "Années 1990"
      ],
      "c": 3,
      "info": "Pulp Fiction est sorti en 1994, dans les années 1990.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit John Travolta et Samuel L. Jackson ?",
      "a": [
        "Les Dents de la mer",
        "Casablanca",
        "Le Seigneur des anneaux : Les Deux Tours",
        "Pulp Fiction"
      ],
      "c": 3,
      "info": "John Travolta et Samuel L. Jackson jouent dans Pulp Fiction (1994).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Reservoir Dogs » ?",
      "a": [
        "Francis Ford Coppola",
        "Michael Curtiz",
        "Quentin Tarantino",
        "James Cameron"
      ],
      "c": 2,
      "info": "Reservoir Dogs (1992) : réalisation de Quentin Tarantino.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Reservoir Dogs » est-il sorti ?",
      "a": [
        "1975",
        "1972",
        "1982",
        "1992"
      ],
      "c": 3,
      "info": "Reservoir Dogs est sorti en 1992.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Reservoir Dogs » ?",
      "a": [
        "Tom Hanks",
        "Gene Hackman",
        "Harvey Keitel",
        "Roy Scheider"
      ],
      "c": 2,
      "info": "Harvey Keitel joue dans Reservoir Dogs (1992).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Reservoir Dogs » ?",
      "a": [
        "Marlon Brando",
        "Ingrid Bergman",
        "Laura Dern",
        "Tim Roth"
      ],
      "c": 3,
      "info": "Tim Roth joue dans Reservoir Dogs (1992).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Quentin Tarantino ?",
      "a": [
        "Reservoir Dogs",
        "Avatar",
        "Le Seigneur des anneaux : La Communauté de l'anneau",
        "La Liste de Schindler"
      ],
      "c": 0,
      "info": "Quentin Tarantino a réalisé Reservoir Dogs (1992).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Harvey Keitel ?",
      "a": [
        "Le Seigneur des anneaux : Les Deux Tours",
        "Reservoir Dogs",
        "Le Seigneur des anneaux : La Communauté de l'anneau",
        "Le Seigneur des anneaux : Le Retour du roi"
      ],
      "c": 1,
      "info": "Harvey Keitel figure dans Reservoir Dogs (1992).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Reservoir Dogs » ?",
      "a": [
        "Années 1990",
        "Années 1980",
        "Années 2000",
        "Années 1970"
      ],
      "c": 0,
      "info": "Reservoir Dogs est sorti en 1992, dans les années 1990.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Harvey Keitel et Tim Roth ?",
      "a": [
        "E.T. l'extra-terrestre",
        "Le Seigneur des anneaux : Le Retour du roi",
        "Dirty Dancing",
        "Reservoir Dogs"
      ],
      "c": 3,
      "info": "Harvey Keitel et Tim Roth jouent dans Reservoir Dogs (1992).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Kill Bill : Volume 1 » ?",
      "a": [
        "Steven Spielberg",
        "Robert Zemeckis",
        "Francis Ford Coppola",
        "Quentin Tarantino"
      ],
      "c": 3,
      "info": "Kill Bill : Volume 1 (2003) : réalisation de Quentin Tarantino.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Kill Bill : Volume 1 » est-il sorti ?",
      "a": [
        "2009",
        "2003",
        "1992",
        "2000"
      ],
      "c": 1,
      "info": "Kill Bill : Volume 1 est sorti en 2003.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Kill Bill : Volume 1 » ?",
      "a": [
        "Sam Neill",
        "Martin Sheen",
        "Uma Thurman",
        "Elijah Wood"
      ],
      "c": 2,
      "info": "Uma Thurman joue dans Kill Bill : Volume 1 (2003).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Kill Bill : Volume 1 » ?",
      "a": [
        "Lucy Liu",
        "Ralph Fiennes",
        "Helen Hunt",
        "Samuel L. Jackson"
      ],
      "c": 0,
      "info": "Lucy Liu joue dans Kill Bill : Volume 1 (2003).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Quentin Tarantino ?",
      "a": [
        "Jurassic Park",
        "La Liste de Schindler",
        "Forrest Gump",
        "Kill Bill : Volume 1"
      ],
      "c": 3,
      "info": "Quentin Tarantino a réalisé Kill Bill : Volume 1 (2003).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Uma Thurman ?",
      "a": [
        "Kill Bill : Volume 1",
        "Le Parrain",
        "Le Seigneur des anneaux : La Communauté de l'anneau",
        "Gladiator"
      ],
      "c": 0,
      "info": "Uma Thurman figure dans Kill Bill : Volume 1 (2003).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Kill Bill : Volume 1 » ?",
      "a": [
        "Années 1970",
        "Années 1990",
        "Années 2000",
        "Années 1940"
      ],
      "c": 2,
      "info": "Kill Bill : Volume 1 est sorti en 2003, dans les années 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Uma Thurman et Lucy Liu ?",
      "a": [
        "Kill Bill : Volume 1",
        "Casablanca",
        "Apocalypse Now",
        "Le Seigneur des anneaux : La Communauté de l'anneau"
      ],
      "c": 0,
      "info": "Uma Thurman et Lucy Liu jouent dans Kill Bill : Volume 1 (2003).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Jurassic Park » ?",
      "a": [
        "Francis Ford Coppola",
        "Emile Ardolino",
        "Steven Spielberg",
        "Michael Curtiz"
      ],
      "c": 2,
      "info": "Jurassic Park (1993) : réalisation de Steven Spielberg.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Jurassic Park » est-il sorti ?",
      "a": [
        "1993",
        "2002",
        "2001",
        "2000"
      ],
      "c": 0,
      "info": "Jurassic Park est sorti en 1993.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Jurassic Park » ?",
      "a": [
        "Harvey Keitel",
        "Sam Neill",
        "Michael J. Fox",
        "Roy Scheider"
      ],
      "c": 1,
      "info": "Sam Neill joue dans Jurassic Park (1993).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Jurassic Park » ?",
      "a": [
        "Al Pacino",
        "Laura Dern",
        "Jennifer Grey",
        "Ralph Fiennes"
      ],
      "c": 1,
      "info": "Laura Dern joue dans Jurassic Park (1993).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Steven Spielberg ?",
      "a": [
        "Reservoir Dogs",
        "Jurassic Park",
        "Le Parrain",
        "Seul au monde"
      ],
      "c": 1,
      "info": "Steven Spielberg a réalisé Jurassic Park (1993).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Sam Neill ?",
      "a": [
        "Kill Bill : Volume 1",
        "Le Seigneur des anneaux : Le Retour du roi",
        "Jurassic Park",
        "Forrest Gump"
      ],
      "c": 2,
      "info": "Sam Neill figure dans Jurassic Park (1993).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Jurassic Park » ?",
      "a": [
        "Années 2000",
        "Années 1970",
        "Années 1990",
        "Années 1940"
      ],
      "c": 2,
      "info": "Jurassic Park est sorti en 1993, dans les années 1990.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Sam Neill et Laura Dern ?",
      "a": [
        "Le Seigneur des anneaux : Les Deux Tours",
        "Jurassic Park",
        "Reservoir Dogs",
        "Apocalypse Now"
      ],
      "c": 1,
      "info": "Sam Neill et Laura Dern jouent dans Jurassic Park (1993).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Les Dents de la mer » ?",
      "a": [
        "James Cameron",
        "Emile Ardolino",
        "Steven Spielberg",
        "Robert Zemeckis"
      ],
      "c": 2,
      "info": "Les Dents de la mer (1975) : réalisation de Steven Spielberg.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Les Dents de la mer » est-il sorti ?",
      "a": [
        "1972",
        "2009",
        "1975",
        "1979"
      ],
      "c": 2,
      "info": "Les Dents de la mer est sorti en 1975.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Les Dents de la mer » ?",
      "a": [
        "Martin Sheen",
        "Michael J. Fox",
        "Marlon Brando",
        "Roy Scheider"
      ],
      "c": 3,
      "info": "Roy Scheider joue dans Les Dents de la mer (1975).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Les Dents de la mer » ?",
      "a": [
        "Richard Dreyfuss",
        "Christopher Lloyd",
        "Lucy Liu",
        "Marlon Brando"
      ],
      "c": 0,
      "info": "Richard Dreyfuss joue dans Les Dents de la mer (1975).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Steven Spielberg ?",
      "a": [
        "Pulp Fiction",
        "Reservoir Dogs",
        "Les Dents de la mer",
        "Conversation secrète"
      ],
      "c": 2,
      "info": "Steven Spielberg a réalisé Les Dents de la mer (1975).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Roy Scheider ?",
      "a": [
        "Dirty Dancing",
        "Le Seigneur des anneaux : Les Deux Tours",
        "Les Dents de la mer",
        "Gladiator"
      ],
      "c": 2,
      "info": "Roy Scheider figure dans Les Dents de la mer (1975).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Les Dents de la mer » ?",
      "a": [
        "Années 2000",
        "Années 1970",
        "Années 1980",
        "Années 1940"
      ],
      "c": 1,
      "info": "Les Dents de la mer est sorti en 1975, dans les années 1970.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Roy Scheider et Richard Dreyfuss ?",
      "a": [
        "Les Dents de la mer",
        "Gladiator",
        "Apocalypse Now",
        "Forrest Gump"
      ],
      "c": 0,
      "info": "Roy Scheider et Richard Dreyfuss jouent dans Les Dents de la mer (1975).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « E.T. l'extra-terrestre » ?",
      "a": [
        "Michael Curtiz",
        "Emile Ardolino",
        "Steven Spielberg",
        "James Cameron"
      ],
      "c": 2,
      "info": "E.T. l'extra-terrestre (1982) : réalisation de Steven Spielberg.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « E.T. l'extra-terrestre » est-il sorti ?",
      "a": [
        "1982",
        "1993",
        "1975",
        "2009"
      ],
      "c": 0,
      "info": "E.T. l'extra-terrestre est sorti en 1982.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « E.T. l'extra-terrestre » ?",
      "a": [
        "Patrick Swayze",
        "Uma Thurman",
        "Henry Thomas",
        "Sam Worthington"
      ],
      "c": 2,
      "info": "Henry Thomas joue dans E.T. l'extra-terrestre (1982).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « E.T. l'extra-terrestre » ?",
      "a": [
        "John Cazale",
        "Joaquin Phoenix",
        "Viggo Mortensen",
        "Drew Barrymore"
      ],
      "c": 3,
      "info": "Drew Barrymore joue dans E.T. l'extra-terrestre (1982).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Steven Spielberg ?",
      "a": [
        "E.T. l'extra-terrestre",
        "Le Seigneur des anneaux : Le Retour du roi",
        "Retour vers le futur",
        "Apocalypse Now"
      ],
      "c": 0,
      "info": "Steven Spielberg a réalisé E.T. l'extra-terrestre (1982).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Henry Thomas ?",
      "a": [
        "Le Seigneur des anneaux : Le Retour du roi",
        "Retour vers le futur",
        "Le Parrain",
        "E.T. l'extra-terrestre"
      ],
      "c": 3,
      "info": "Henry Thomas figure dans E.T. l'extra-terrestre (1982).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « E.T. l'extra-terrestre » ?",
      "a": [
        "Années 1940",
        "Années 1980",
        "Années 1990",
        "Années 1970"
      ],
      "c": 1,
      "info": "E.T. l'extra-terrestre est sorti en 1982, dans les années 1980.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Henry Thomas et Drew Barrymore ?",
      "a": [
        "E.T. l'extra-terrestre",
        "Le Seigneur des anneaux : Les Deux Tours",
        "Apocalypse Now",
        "Conversation secrète"
      ],
      "c": 0,
      "info": "Henry Thomas et Drew Barrymore jouent dans E.T. l'extra-terrestre (1982).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « La Liste de Schindler » ?",
      "a": [
        "Steven Spielberg",
        "Peter Jackson",
        "Emile Ardolino",
        "Michael Curtiz"
      ],
      "c": 0,
      "info": "La Liste de Schindler (1993) : réalisation de Steven Spielberg.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « La Liste de Schindler » est-il sorti ?",
      "a": [
        "2000",
        "1982",
        "1942",
        "1993"
      ],
      "c": 3,
      "info": "La Liste de Schindler est sorti en 1993.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « La Liste de Schindler » ?",
      "a": [
        "John Travolta",
        "Humphrey Bogart",
        "Martin Sheen",
        "Liam Neeson"
      ],
      "c": 3,
      "info": "Liam Neeson joue dans La Liste de Schindler (1993).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « La Liste de Schindler » ?",
      "a": [
        "Richard Dreyfuss",
        "John Cazale",
        "Ralph Fiennes",
        "Laura Dern"
      ],
      "c": 2,
      "info": "Ralph Fiennes joue dans La Liste de Schindler (1993).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Steven Spielberg ?",
      "a": [
        "Apocalypse Now",
        "Retour vers le futur",
        "La Liste de Schindler",
        "Avatar"
      ],
      "c": 2,
      "info": "Steven Spielberg a réalisé La Liste de Schindler (1993).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Liam Neeson ?",
      "a": [
        "Pulp Fiction",
        "Conversation secrète",
        "Le Parrain",
        "La Liste de Schindler"
      ],
      "c": 3,
      "info": "Liam Neeson figure dans La Liste de Schindler (1993).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « La Liste de Schindler » ?",
      "a": [
        "Années 1990",
        "Années 1940",
        "Années 1970",
        "Années 1980"
      ],
      "c": 0,
      "info": "La Liste de Schindler est sorti en 1993, dans les années 1990.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Liam Neeson et Ralph Fiennes ?",
      "a": [
        "Le Seigneur des anneaux : Le Retour du roi",
        "La Liste de Schindler",
        "Casablanca",
        "Apocalypse Now"
      ],
      "c": 1,
      "info": "Liam Neeson et Ralph Fiennes jouent dans La Liste de Schindler (1993).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Retour vers le futur » ?",
      "a": [
        "Emile Ardolino",
        "Robert Zemeckis",
        "Peter Jackson",
        "Steven Spielberg"
      ],
      "c": 1,
      "info": "Retour vers le futur (1985) : réalisation de Robert Zemeckis.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Retour vers le futur » est-il sorti ?",
      "a": [
        "1987",
        "1982",
        "2009",
        "1985"
      ],
      "c": 3,
      "info": "Retour vers le futur est sorti en 1985.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Retour vers le futur » ?",
      "a": [
        "Russell Crowe",
        "Roy Scheider",
        "Uma Thurman",
        "Michael J. Fox"
      ],
      "c": 3,
      "info": "Michael J. Fox joue dans Retour vers le futur (1985).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Retour vers le futur » ?",
      "a": [
        "Christopher Lloyd",
        "Samuel L. Jackson",
        "Ralph Fiennes",
        "Richard Dreyfuss"
      ],
      "c": 0,
      "info": "Christopher Lloyd joue dans Retour vers le futur (1985).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Robert Zemeckis ?",
      "a": [
        "Jurassic Park",
        "Conversation secrète",
        "Pulp Fiction",
        "Retour vers le futur"
      ],
      "c": 3,
      "info": "Robert Zemeckis a réalisé Retour vers le futur (1985).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Michael J. Fox ?",
      "a": [
        "Gladiator",
        "Retour vers le futur",
        "Avatar",
        "Casablanca"
      ],
      "c": 1,
      "info": "Michael J. Fox figure dans Retour vers le futur (1985).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Retour vers le futur » ?",
      "a": [
        "Années 1990",
        "Années 1940",
        "Années 1970",
        "Années 1980"
      ],
      "c": 3,
      "info": "Retour vers le futur est sorti en 1985, dans les années 1980.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Michael J. Fox et Christopher Lloyd ?",
      "a": [
        "Retour vers le futur",
        "La Liste de Schindler",
        "Le Seigneur des anneaux : Les Deux Tours",
        "E.T. l'extra-terrestre"
      ],
      "c": 0,
      "info": "Michael J. Fox et Christopher Lloyd jouent dans Retour vers le futur (1985).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Forrest Gump » ?",
      "a": [
        "Robert Zemeckis",
        "James Cameron",
        "Emile Ardolino",
        "Michael Curtiz"
      ],
      "c": 0,
      "info": "Forrest Gump (1994) : réalisation de Robert Zemeckis.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Forrest Gump » est-il sorti ?",
      "a": [
        "1994",
        "2009",
        "1992",
        "2003"
      ],
      "c": 0,
      "info": "Forrest Gump est sorti en 1994.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Forrest Gump » ?",
      "a": [
        "Roy Scheider",
        "Tom Hanks",
        "Elijah Wood",
        "Michael J. Fox"
      ],
      "c": 1,
      "info": "Tom Hanks joue dans Forrest Gump (1994).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Forrest Gump » ?",
      "a": [
        "Christopher Lloyd",
        "Lucy Liu",
        "Marlon Brando",
        "Robin Wright"
      ],
      "c": 3,
      "info": "Robin Wright joue dans Forrest Gump (1994).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Robert Zemeckis ?",
      "a": [
        "Dirty Dancing",
        "Le Seigneur des anneaux : La Communauté de l'anneau",
        "Le Seigneur des anneaux : Le Retour du roi",
        "Forrest Gump"
      ],
      "c": 3,
      "info": "Robert Zemeckis a réalisé Forrest Gump (1994).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Tom Hanks ?",
      "a": [
        "La Liste de Schindler",
        "Gladiator",
        "Les Dents de la mer",
        "Forrest Gump"
      ],
      "c": 3,
      "info": "Tom Hanks figure dans Forrest Gump (1994).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Forrest Gump » ?",
      "a": [
        "Années 1940",
        "Années 1990",
        "Années 2000",
        "Années 1980"
      ],
      "c": 1,
      "info": "Forrest Gump est sorti en 1994, dans les années 1990.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Tom Hanks et Robin Wright ?",
      "a": [
        "Forrest Gump",
        "Les Dents de la mer",
        "Casablanca",
        "Apocalypse Now"
      ],
      "c": 0,
      "info": "Tom Hanks et Robin Wright jouent dans Forrest Gump (1994).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Seul au monde » ?",
      "a": [
        "Ridley Scott",
        "Robert Zemeckis",
        "Michael Curtiz",
        "James Cameron"
      ],
      "c": 1,
      "info": "Seul au monde (2000) : réalisation de Robert Zemeckis.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Seul au monde » est-il sorti ?",
      "a": [
        "2000",
        "1992",
        "1942",
        "1979"
      ],
      "c": 0,
      "info": "Seul au monde est sorti en 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Seul au monde » ?",
      "a": [
        "Sam Worthington",
        "Tom Hanks",
        "Uma Thurman",
        "Russell Crowe"
      ],
      "c": 1,
      "info": "Tom Hanks joue dans Seul au monde (2000).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Seul au monde » ?",
      "a": [
        "Helen Hunt",
        "Ralph Fiennes",
        "Drew Barrymore",
        "Christopher Lloyd"
      ],
      "c": 0,
      "info": "Helen Hunt joue dans Seul au monde (2000).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Robert Zemeckis ?",
      "a": [
        "Kill Bill : Volume 1",
        "Seul au monde",
        "Dirty Dancing",
        "Casablanca"
      ],
      "c": 1,
      "info": "Robert Zemeckis a réalisé Seul au monde (2000).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Tom Hanks ?",
      "a": [
        "Dirty Dancing",
        "Avatar",
        "Le Seigneur des anneaux : Le Retour du roi",
        "Seul au monde"
      ],
      "c": 3,
      "info": "Tom Hanks figure dans Seul au monde (2000).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Seul au monde » ?",
      "a": [
        "Années 2000",
        "Années 1940",
        "Années 1970",
        "Années 1980"
      ],
      "c": 0,
      "info": "Seul au monde est sorti en 2000, dans les années 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Tom Hanks et Helen Hunt ?",
      "a": [
        "Seul au monde",
        "Le Parrain",
        "Avatar",
        "Les Dents de la mer"
      ],
      "c": 0,
      "info": "Tom Hanks et Helen Hunt jouent dans Seul au monde (2000).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Casablanca » ?",
      "a": [
        "Emile Ardolino",
        "Ridley Scott",
        "Michael Curtiz",
        "Quentin Tarantino"
      ],
      "c": 2,
      "info": "Casablanca (1942) : réalisation de Michael Curtiz.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Casablanca » est-il sorti ?",
      "a": [
        "1994",
        "1942",
        "2009",
        "1975"
      ],
      "c": 1,
      "info": "Casablanca est sorti en 1942.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Casablanca » ?",
      "a": [
        "Humphrey Bogart",
        "Liam Neeson",
        "Patrick Swayze",
        "Michael J. Fox"
      ],
      "c": 0,
      "info": "Humphrey Bogart joue dans Casablanca (1942).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Casablanca » ?",
      "a": [
        "Samuel L. Jackson",
        "Drew Barrymore",
        "Ingrid Bergman",
        "Joaquin Phoenix"
      ],
      "c": 2,
      "info": "Ingrid Bergman joue dans Casablanca (1942).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Michael Curtiz ?",
      "a": [
        "Casablanca",
        "Conversation secrète",
        "Jurassic Park",
        "Seul au monde"
      ],
      "c": 0,
      "info": "Michael Curtiz a réalisé Casablanca (1942).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Humphrey Bogart ?",
      "a": [
        "Gladiator",
        "Casablanca",
        "Apocalypse Now",
        "Retour vers le futur"
      ],
      "c": 1,
      "info": "Humphrey Bogart figure dans Casablanca (1942).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Casablanca » ?",
      "a": [
        "Années 1940",
        "Années 1990",
        "Années 1980",
        "Années 2000"
      ],
      "c": 0,
      "info": "Casablanca est sorti en 1942, dans les années 1940.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Humphrey Bogart et Ingrid Bergman ?",
      "a": [
        "Casablanca",
        "Dirty Dancing",
        "Conversation secrète",
        "Gladiator"
      ],
      "c": 0,
      "info": "Humphrey Bogart et Ingrid Bergman jouent dans Casablanca (1942).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Le Seigneur des anneaux : La Communauté de l'anneau » ?",
      "a": [
        "Peter Jackson",
        "Michael Curtiz",
        "Francis Ford Coppola",
        "Emile Ardolino"
      ],
      "c": 0,
      "info": "Le Seigneur des anneaux : La Communauté de l'anneau (2001) : réalisation de Peter Jackson.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Le Seigneur des anneaux : La Communauté de l'anneau » est-il sorti ?",
      "a": [
        "1972",
        "1942",
        "1994",
        "2001"
      ],
      "c": 3,
      "info": "Le Seigneur des anneaux : La Communauté de l'anneau est sorti en 2001.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Le Seigneur des anneaux : La Communauté de l'anneau » ?",
      "a": [
        "Elijah Wood",
        "Sam Worthington",
        "Martin Sheen",
        "Humphrey Bogart"
      ],
      "c": 0,
      "info": "Elijah Wood joue dans Le Seigneur des anneaux : La Communauté de l'anneau (2001).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Seigneur des anneaux : La Communauté de l'anneau » ?",
      "a": [
        "Laura Dern",
        "Richard Dreyfuss",
        "Ian McKellen",
        "Viggo Mortensen"
      ],
      "c": 2,
      "info": "Ian McKellen joue dans Le Seigneur des anneaux : La Communauté de l'anneau (2001).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Peter Jackson ?",
      "a": [
        "Le Parrain",
        "Apocalypse Now",
        "Pulp Fiction",
        "Le Seigneur des anneaux : La Communauté de l'anneau"
      ],
      "c": 3,
      "info": "Peter Jackson a réalisé Le Seigneur des anneaux : La Communauté de l'anneau (2001).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Elijah Wood ?",
      "a": [
        "La Liste de Schindler",
        "Forrest Gump",
        "Le Seigneur des anneaux : La Communauté de l'anneau",
        "E.T. l'extra-terrestre"
      ],
      "c": 2,
      "info": "Elijah Wood figure dans Le Seigneur des anneaux : La Communauté de l'anneau (2001).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Seigneur des anneaux : La Communauté de l'anneau » ?",
      "a": [
        "Années 1990",
        "Années 1940",
        "Années 2000",
        "Années 1970"
      ],
      "c": 2,
      "info": "Le Seigneur des anneaux : La Communauté de l'anneau est sorti en 2001, dans les années 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Elijah Wood et Ian McKellen ?",
      "a": [
        "La Liste de Schindler",
        "Le Seigneur des anneaux : La Communauté de l'anneau",
        "Avatar",
        "Reservoir Dogs"
      ],
      "c": 1,
      "info": "Elijah Wood et Ian McKellen jouent dans Le Seigneur des anneaux : La Communauté de l'anneau (2001).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Le Seigneur des anneaux : Les Deux Tours » ?",
      "a": [
        "Robert Zemeckis",
        "Peter Jackson",
        "James Cameron",
        "Ridley Scott"
      ],
      "c": 1,
      "info": "Le Seigneur des anneaux : Les Deux Tours (2002) : réalisation de Peter Jackson.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Le Seigneur des anneaux : Les Deux Tours » est-il sorti ?",
      "a": [
        "1982",
        "2002",
        "2000",
        "1992"
      ],
      "c": 1,
      "info": "Le Seigneur des anneaux : Les Deux Tours est sorti en 2002.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Le Seigneur des anneaux : Les Deux Tours » ?",
      "a": [
        "Elijah Wood",
        "Gene Hackman",
        "John Travolta",
        "Russell Crowe"
      ],
      "c": 0,
      "info": "Elijah Wood joue dans Le Seigneur des anneaux : Les Deux Tours (2002).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Seigneur des anneaux : Les Deux Tours » ?",
      "a": [
        "Viggo Mortensen",
        "Drew Barrymore",
        "Ingrid Bergman",
        "Jennifer Grey"
      ],
      "c": 0,
      "info": "Viggo Mortensen joue dans Le Seigneur des anneaux : Les Deux Tours (2002).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Peter Jackson ?",
      "a": [
        "Avatar",
        "Le Seigneur des anneaux : Les Deux Tours",
        "La Liste de Schindler",
        "E.T. l'extra-terrestre"
      ],
      "c": 1,
      "info": "Peter Jackson a réalisé Le Seigneur des anneaux : Les Deux Tours (2002).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Elijah Wood ?",
      "a": [
        "Les Dents de la mer",
        "Pulp Fiction",
        "Jurassic Park",
        "Le Seigneur des anneaux : Les Deux Tours"
      ],
      "c": 3,
      "info": "Elijah Wood figure dans Le Seigneur des anneaux : Les Deux Tours (2002).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Seigneur des anneaux : Les Deux Tours » ?",
      "a": [
        "Années 1940",
        "Années 1990",
        "Années 1980",
        "Années 2000"
      ],
      "c": 3,
      "info": "Le Seigneur des anneaux : Les Deux Tours est sorti en 2002, dans les années 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Elijah Wood et Viggo Mortensen ?",
      "a": [
        "Le Seigneur des anneaux : Les Deux Tours",
        "Les Dents de la mer",
        "Avatar",
        "Le Parrain"
      ],
      "c": 0,
      "info": "Elijah Wood et Viggo Mortensen jouent dans Le Seigneur des anneaux : Les Deux Tours (2002).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Le Seigneur des anneaux : Le Retour du roi » ?",
      "a": [
        "Emile Ardolino",
        "Peter Jackson",
        "James Cameron",
        "Ridley Scott"
      ],
      "c": 1,
      "info": "Le Seigneur des anneaux : Le Retour du roi (2003) : réalisation de Peter Jackson.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Le Seigneur des anneaux : Le Retour du roi » est-il sorti ?",
      "a": [
        "2003",
        "1972",
        "2001",
        "1987"
      ],
      "c": 0,
      "info": "Le Seigneur des anneaux : Le Retour du roi est sorti en 2003.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Le Seigneur des anneaux : Le Retour du roi » ?",
      "a": [
        "Humphrey Bogart",
        "Elijah Wood",
        "Martin Sheen",
        "Gene Hackman"
      ],
      "c": 1,
      "info": "Elijah Wood joue dans Le Seigneur des anneaux : Le Retour du roi (2003).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Le Seigneur des anneaux : Le Retour du roi » ?",
      "a": [
        "Marlon Brando",
        "Tim Roth",
        "Al Pacino",
        "Viggo Mortensen"
      ],
      "c": 3,
      "info": "Viggo Mortensen joue dans Le Seigneur des anneaux : Le Retour du roi (2003).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Peter Jackson ?",
      "a": [
        "Retour vers le futur",
        "Le Seigneur des anneaux : Le Retour du roi",
        "Le Parrain",
        "Kill Bill : Volume 1"
      ],
      "c": 1,
      "info": "Peter Jackson a réalisé Le Seigneur des anneaux : Le Retour du roi (2003).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Elijah Wood ?",
      "a": [
        "Gladiator",
        "La Liste de Schindler",
        "Apocalypse Now",
        "Le Seigneur des anneaux : Le Retour du roi"
      ],
      "c": 3,
      "info": "Elijah Wood figure dans Le Seigneur des anneaux : Le Retour du roi (2003).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Le Seigneur des anneaux : Le Retour du roi » ?",
      "a": [
        "Années 2000",
        "Années 1980",
        "Années 1990",
        "Années 1970"
      ],
      "c": 0,
      "info": "Le Seigneur des anneaux : Le Retour du roi est sorti en 2003, dans les années 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Elijah Wood et Viggo Mortensen ?",
      "a": [
        "Forrest Gump",
        "Le Seigneur des anneaux : Le Retour du roi",
        "Avatar",
        "E.T. l'extra-terrestre"
      ],
      "c": 1,
      "info": "Elijah Wood et Viggo Mortensen jouent dans Le Seigneur des anneaux : Le Retour du roi (2003).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Dirty Dancing » ?",
      "a": [
        "Emile Ardolino",
        "Ridley Scott",
        "Steven Spielberg",
        "Peter Jackson"
      ],
      "c": 0,
      "info": "Dirty Dancing (1987) : réalisation de Emile Ardolino.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Dirty Dancing » est-il sorti ?",
      "a": [
        "1972",
        "1987",
        "1942",
        "1994"
      ],
      "c": 1,
      "info": "Dirty Dancing est sorti en 1987.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Dirty Dancing » ?",
      "a": [
        "Elijah Wood",
        "John Travolta",
        "Patrick Swayze",
        "Uma Thurman"
      ],
      "c": 2,
      "info": "Patrick Swayze joue dans Dirty Dancing (1987).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Dirty Dancing » ?",
      "a": [
        "Helen Hunt",
        "Samuel L. Jackson",
        "John Cazale",
        "Jennifer Grey"
      ],
      "c": 3,
      "info": "Jennifer Grey joue dans Dirty Dancing (1987).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Emile Ardolino ?",
      "a": [
        "Dirty Dancing",
        "E.T. l'extra-terrestre",
        "Le Parrain",
        "Pulp Fiction"
      ],
      "c": 0,
      "info": "Emile Ardolino a réalisé Dirty Dancing (1987).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Patrick Swayze ?",
      "a": [
        "Avatar",
        "Le Seigneur des anneaux : Les Deux Tours",
        "Dirty Dancing",
        "Apocalypse Now"
      ],
      "c": 2,
      "info": "Patrick Swayze figure dans Dirty Dancing (1987).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Dirty Dancing » ?",
      "a": [
        "Années 2000",
        "Années 1980",
        "Années 1940",
        "Années 1970"
      ],
      "c": 1,
      "info": "Dirty Dancing est sorti en 1987, dans les années 1980.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Patrick Swayze et Jennifer Grey ?",
      "a": [
        "Jurassic Park",
        "Reservoir Dogs",
        "Dirty Dancing",
        "Le Seigneur des anneaux : La Communauté de l'anneau"
      ],
      "c": 2,
      "info": "Patrick Swayze et Jennifer Grey jouent dans Dirty Dancing (1987).",
      "level": "expert",
      "origin": "INT"
    },
    {
      "q": "Qui a réalisé « Gladiator » ?",
      "a": [
        "Michael Curtiz",
        "Emile Ardolino",
        "Ridley Scott",
        "Steven Spielberg"
      ],
      "c": 2,
      "info": "Gladiator (2000) : réalisation de Ridley Scott.",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "En quelle année « Gladiator » est-il sorti ?",
      "a": [
        "1942",
        "2002",
        "2000",
        "1982"
      ],
      "c": 2,
      "info": "Gladiator est sorti en 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel interprète figure au générique de « Gladiator » ?",
      "a": [
        "Elijah Wood",
        "Patrick Swayze",
        "Gene Hackman",
        "Russell Crowe"
      ],
      "c": 3,
      "info": "Russell Crowe joue dans Gladiator (2000).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "Quel autre interprète apparaît dans « Gladiator » ?",
      "a": [
        "Christopher Lloyd",
        "Joaquin Phoenix",
        "Drew Barrymore",
        "Samuel L. Jackson"
      ],
      "c": 1,
      "info": "Joaquin Phoenix joue dans Gladiator (2000).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film a été réalisé par Ridley Scott ?",
      "a": [
        "Le Seigneur des anneaux : La Communauté de l'anneau",
        "Gladiator",
        "Casablanca",
        "Les Dents de la mer"
      ],
      "c": 1,
      "info": "Ridley Scott a réalisé Gladiator (2000).",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Dans quel film peut-on voir Russell Crowe ?",
      "a": [
        "Gladiator",
        "Pulp Fiction",
        "Retour vers le futur",
        "E.T. l'extra-terrestre"
      ],
      "c": 0,
      "info": "Russell Crowe figure dans Gladiator (2000).",
      "level": "amateur",
      "origin": "INT"
    },
    {
      "q": "À quelle décennie appartient la sortie de « Gladiator » ?",
      "a": [
        "Années 2000",
        "Années 1980",
        "Années 1940",
        "Années 1990"
      ],
      "c": 0,
      "info": "Gladiator est sorti en 2000, dans les années 2000.",
      "level": "cinephile",
      "origin": "INT"
    },
    {
      "q": "Quel film réunit Russell Crowe et Joaquin Phoenix ?",
      "a": [
        "Gladiator",
        "Seul au monde",
        "Forrest Gump",
        "La Liste de Schindler"
      ],
      "c": 0,
      "info": "Russell Crowe et Joaquin Phoenix jouent dans Gladiator (2000).",
      "level": "expert",
      "origin": "INT"
    }
  ]
};
