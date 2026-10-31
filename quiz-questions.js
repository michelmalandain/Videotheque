// CINEMALAND — Banque de 200 questions, modifiable indépendamment du salon.
// 100 répliques, 100 questions cinéma. 80 % France, 20 % international.
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
    }
  ]
};
