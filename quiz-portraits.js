// CINEMALAND — 300 personnalités. Photos authentiques chargées depuis Wikimedia, sans clé API.
const acteursQuiz = [
  {
    "name": "Jean Gabin",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Lino Ventura",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean-Paul Belmondo",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Alain Delon",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Louis de Funès",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Bourvil",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Fernandel",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Michel Simon",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean Marais",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Gérard Philipe",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Pierre Brasseur",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Bernard Blier",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Michel Serrault",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Philippe Noiret",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean Rochefort",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Michel Galabru",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Claude Brasseur",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean-Pierre Marielle",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Yves Montand",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Charles Vanel",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean-Louis Trintignant",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Bruno Cremer",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Patrick Dewaere",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Coluche",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Jacques Villeret",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Daniel Auteuil",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Gérard Depardieu",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Pierre Richard",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Michel Piccoli",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean Carmet",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "André Dussollier",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Fabrice Luchini",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Vincent Lindon",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Jean Reno",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Christian Clavier",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Thierry Lhermitte",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Michel Blanc",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Gérard Jugnot",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Josiane Balasko",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Miou-Miou",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Anémone (actrice)",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Isabelle Huppert",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Catherine Deneuve",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Jeanne Moreau",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Brigitte Bardot",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Simone Signoret",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Annie Girardot",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Romy Schneider",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Michèle Morgan",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Arletty",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Danielle Darrieux",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Françoise Dorléac",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Anna Karina",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Delphine Seyrig",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Stéphane Audran",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Marie Trintignant",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Juliette Binoche",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Isabelle Adjani",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Sophie Marceau",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Emmanuelle Béart",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Sandrine Bonnaire",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Nathalie Baye",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Fanny Ardant",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Dominique Sanda",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Carole Bouquet",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Arielle Dombasle",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Sabine Azéma",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Charlotte Rampling",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Charlotte Gainsbourg",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Vanessa Paradis",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Audrey Tautou",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Marion Cotillard",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Léa Seydoux",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Adèle Exarchopoulos",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Virginie Efira",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Cécile de France",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Mélanie Laurent",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Bérénice Bejo",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Valérie Lemercier",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Karin Viard",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Agnès Jaoui",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Anne Alvaro",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Elsa Zylberstein",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Noémie Lvovsky",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Julie Depardieu",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Julie Gayet",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Sara Forestier",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Élodie Bouchez",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Louise Bourgoin",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Clotilde Courau",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Marina Foïs",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Alexandra Lamy",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Camille Cottin",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Laure Calamy",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Anaïs Demoustier",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Leïla Bekhti",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Tahar Rahim",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Omar Sy",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "François Cluzet",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Guillaume Canet",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Romain Duris",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Vincent Cassel",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Mathieu Kassovitz",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Jean Dujardin",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Benoît Magimel",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Gilles Lellouche",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Pio Marmaï",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Pierre Niney",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Raphaël Personnaz",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Louis Garrel",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Gaspard Ulliel",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Niels Arestrup",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Denis Ménochet",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Roschdy Zem",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Reda Kateb",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Kad Merad",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Dany Boon",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Franck Dubosc",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Albert Dupontel",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Benoît Poelvoorde",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Bouli Lanners",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "François Damiens",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Édouard Baer",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Alain Chabat",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Jamel Debbouze",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Gad Elmaleh",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Éric Judor",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Ramzy Bedia",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "José Garcia",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "François Berléand",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Lambert Wilson",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean-Pierre Darroussin",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Jacques Gamblin",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Yvan Attal",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Samuel Le Bihan",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Grégory Gadebois",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Swann Arlaud",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Laurent Lafitte",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Nicolas Duvauchelle",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Melvil Poupaud",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jérémie Renier",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Olivier Gourmet",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Sami Bouajila",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Abdelhafid Metalsi",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Zinedine Soualem",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Éric Cantona",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Patrick Bruel",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Richard Bohringer",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Robin Renucci",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Hippolyte Girardot",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Jean-Pierre Bacri",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Didier Bourdon",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Bernard Campan",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Pascal Légitimus",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Aïssa Maïga",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Firmine Richard",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Ludivine Sagnier",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Chiara Mastroianni",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Marina Hands",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Emmanuelle Devos",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Sylvie Testud",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Mélanie Thierry",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Alice Pol",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Pauline Étienne",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Sara Giraudeau",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Diane Kruger",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Eva Green",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Adele Haenel",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Alice Isaaz",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Maïwenn",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Doria Tillier",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Laurent Terzieff",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Jean Yanne",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jacques Dutronc",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Jean-Pierre Léaud",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Bernadette Lafont",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Marie Dubois",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Claude Jade",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Marlène Jobert",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Nicole Garcia",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Bulle Ogier",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Jane Birkin",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Catherine Frot",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Isabelle Carré",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Mathilde Seigner",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Julie Delpy",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Émilie Dequenne",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Émilie Bière",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Pierre Arditi",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Francis Huster",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Patrick Chesnais",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Charles Berling",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Jacques Weber",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Robert Hossein",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Robert Lamoureux",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Paul Meurisse",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Henri Virlogeux",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Jean Lefebvre",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Darry Cowl",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Francis Blanche",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Bernard Giraudeau",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Jean-Claude Brialy",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Jean-Pierre Cassel",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Charlie Chaplin",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Buster Keaton",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Harold Lloyd",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "Humphrey Bogart",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "James Cagney",
    "origin": "FR",
    "level": "amateur"
  },
  {
    "name": "Cary Grant",
    "origin": "FR",
    "level": "cinephile"
  },
  {
    "name": "James Stewart",
    "origin": "FR",
    "level": "expert"
  },
  {
    "name": "Henry Fonda",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "John Wayne",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Gary Cooper",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Clark Gable",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Marlon Brando",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "James Dean",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Paul Newman",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Robert Redford",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Steve McQueen",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Clint Eastwood",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Dustin Hoffman",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Al Pacino",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Robert De Niro",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Jack Nicholson",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Gene Hackman",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Harrison Ford",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Michael Douglas",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Morgan Freeman",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Denzel Washington",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Tom Hanks",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Tom Cruise",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Brad Pitt",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Leonardo DiCaprio",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Johnny Depp",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "George Clooney",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Matt Damon",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Ben Affleck",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Christian Bale",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Joaquin Phoenix",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Heath Ledger",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Keanu Reeves",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Nicolas Cage",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Samuel L. Jackson",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Bruce Willis",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Arnold Schwarzenegger",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Sylvester Stallone",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Sean Connery",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Roger Moore",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Daniel Craig",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Pierce Brosnan",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Anthony Hopkins",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Michael Caine",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Gary Oldman",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Ralph Fiennes",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Alan Rickman",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Hugh Grant",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Colin Firth",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Hugh Jackman",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Russell Crowe",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Mel Gibson",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Cate Blanchett",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Meryl Streep",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Jodie Foster",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Jessica Lange",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Susan Sarandon",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Glenn Close",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Sigourney Weaver",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Nicole Kidman",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Julia Roberts",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Sandra Bullock",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Emma Thompson",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Kate Winslet",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Rachel Weisz",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Natalie Portman",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Scarlett Johansson",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Anne Hathaway",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Jennifer Lawrence",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Emma Stone",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Margot Robbie",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Michelle Pfeiffer",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Sharon Stone",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Demi Moore",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Winona Ryder",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Uma Thurman",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Audrey Hepburn",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Katharine Hepburn",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Ingrid Bergman",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Greta Garbo",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Marlene Dietrich",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Marilyn Monroe",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Elizabeth Taylor",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Grace Kelly",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Sophia Loren",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Marcel Dalio",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Jean Poiret",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Claude Rich",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Michel Auclair",
    "origin": "INT",
    "level": "expert"
  },
  {
    "name": "Pierre Mondy",
    "origin": "INT",
    "level": "amateur"
  },
  {
    "name": "Michel Duchaussoy",
    "origin": "INT",
    "level": "cinephile"
  },
  {
    "name": "Micheline Presle",
    "origin": "INT",
    "level": "expert"
  }
];
