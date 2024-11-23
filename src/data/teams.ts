export interface Team {
  id: string;
  name: string;
  titles: number;
  colors: string[];
  stadium: string;
  mascot: string;
  location: string;
  founded: number;
  categories: string[];
  imageUrl: string;
}

export const teams: Team[] = [
  {
    id: "america",
    name: "América",
    titles: 13,
    colors: ["yellow", "blue"],
    stadium: "Estadio Azteca",
    mascot: "Águila",
    location: "Ciudad de México",
    founded: 1916,
    categories: ["historic", "most-titles"],
    imageUrl: "https://escudosfc.com.br/images/amex.png"
  },
  {
    id: "tigres",
    name: "Tigres",
    titles: 8,
    colors: ["yellow", "blue"],
    stadium: "Estadio Universitario",
    mascot: "Tigre",
    location: "Monterrey",
    founded: 1960,
    categories: ["owned-by-cementera", "university-team"],
    imageUrl: "https://escudosfc.com.br/images/tigres.jpg"
  },
  {
    id: "chivas",
    name: "Guadalajara",
    titles: 12,
    colors: ["red", "white"],
    stadium: "Estadio Akron",
    mascot: "Chiva",
    location: "Guadalajara",
    founded: 1906,
    categories: ["historic", "mexican-only","ch14-played-here"],
    imageUrl: "https://escudosfc.com.br/images/chivas_mex.png"
  },
  {
    id: "cruzazul",
    name: "Cruz Azul",
    titles: 8,
    colors: ["blue"],
    stadium: "Estadio Azteca",
    mascot: "Cementero",
    location: "Ciudad de México",
    founded: 1927,
    categories: ["historic", "owned-by-cementera","team-of-LudovicoPeluche"],
    imageUrl: "https://escudosfc.com.br/images/cruzazul.png"
  },
  {
    id: "pumas",
    name: "Pumas UNAM",
    titles: 7,
    colors: ["blue", "gold"],
    stadium: "Estadio Olímpico Universitario",
    mascot: "Puma",
    location: "Ciudad de México",
    founded: 1954,
    categories: ["historic", "university-team"],
    imageUrl: "https://escudosfc.com.br/images/univ_guad_mex.png"
  },
  {
    id: "leon",
    name: "León",
    titles: 8,
    colors: ["green", "white"],
    stadium: "Estadio León",
    mascot: "León",
    location: "León",
    founded: 1944,
    categories: ["nick-name-Panzas-Verdes"],
    imageUrl: "https://escudosfc.com.br/images/leon_mex.png"
  },
  {
    id: "toluca",
    name: "Toluca",
    titles: 10,
    colors: ["red"],
    stadium: "Estadio Nemesio Díez",
    mascot: "Diablo",
    location: "Toluca",
    founded: 1917,
    categories: ["saturdino-cardozo-played-here"],
    imageUrl: "https://escudosfc.com.br/images/toluca.jpg"
  },
  {
    id: "monterrey",
    name: "Monterrey",
    titles: 5,
    colors: ["blue", "white"],
    stadium: "Estadio BBVA",
    mascot: "bulldog inglés",
    location: "Monterrey",
    founded: 1945,
    categories: ["the-most-recent-stadium","team-with-dog-mascot"],
    imageUrl: "https://escudosfc.com.br/images/monterrey.png"
  },
  {
    id: "santos",
    name: "Santos",
    titles: 6,
    colors: ["green", "white"],
    stadium: "Estadio TSM",
    mascot: "Guerrero",
    location: "Torreón",
    founded: 1983,
    categories: ["owned-by-orlegi", "nicknamed-laguneros"],
    imageUrl: "https://escudosfc.com.br/images/santoslaguna2_mex.png"
  },
  {
    id: "atlas",
    name: "Atlas",
    titles: 3,
    colors: ["red", "black"],
    stadium: "Estadio Jalisco",
    mascot: "Zorro",
    location: "Guadalajara",
    founded: 1916,
    categories: ["part-of-clasico-tapatio"],
    imageUrl: "https://escudosfc.com.br/images/atlas.png"
  },
  {
    id: "queretaro",
    name: "Querétaro",
    titles: 0,
    colors: ["blue", "black"],
    stadium: "Estadio Corregidora",
    mascot: "Gallos",
    location: "Querétaro",
    founded: 1950,
    categories: ["team-owned-by-grupo-caliente","ronaldiño-played-here"],
    imageUrl: "https://escudosfc.com.br/images/gallosblancos.png"
  },
  {
    id: "pachuca",
    name: "Pachuca",
    titles: 6,
    colors: ["white", "blue"],
    stadium: "Estadio Hidalgo",
    mascot: "Tuzo",
    location: "Pachuca",
    founded: 1901,
    categories: ["oldest-team-in-liga-mx","owned-by-grupo-pachuca"],
    imageUrl: "https://escudosfc.com.br/images/pachuca.png"
  },
  {
    id: "necaxa",
    name: "Necaxa",
    titles: 3,
    colors: ["red", "white"],
    stadium: "Estadio Victoria",
    mascot: "Rayo",
    location: "Aguascalientes",
    founded: 1923,
    categories: ["the-team-of-don-ramon"],
    imageUrl: "https://escudosfc.com.br/images/necaxa.png"
  },
  {
    id: "mazatlan",
    name: "Mazatlán",
    titles: 0,
    colors: ["purple", "white"],
    stadium: "Estadio Kraken",
    mascot: "Tiburón",
    location: "Mazatlán",
    founded: 2020,
    categories: ["the-most-recent"],
    imageUrl: "https://escudosfc.com.br/images/mazatlan_mex.png"
  },
  {
    id: "juarez",
    name: "Juárez",
    titles: 0,
    colors: ["blue", "white"],
    stadium: "Estadio Olímpico Benito Juárez",
    mascot: "Bravo",
    location: "Ciudad Juárez",
    founded: 2015,
    categories: ["team-in-frontier"],
    imageUrl: "https://escudosfc.com.br/images/juarez.png"
  },
  {
    id: "sanluis",
    name: "Atletico de San Luis",
    titles: 0,
    colors: ["red", "white"],
    stadium: "Estadio Alfonso Lastras",
    mascot: "Snauzer",
    location: "San Luis Potosí",
    founded: 2013,
    categories: ["europeam-ownership","team-with-dog-mascot"],
    imageUrl: "https://escudosfc.com.br/images/san_luis_mex.png"
  },
  {
    id: "tijuana",
    name: "Xolos de Tijuana",
    titles: 1,
    colors: ["red", "black"],
    stadium: "Estadio Caliente",
    mascot: "Xoloitzcuintle",
    location: "Tijuana",
    founded: 2007,
    categories: ["team-with-dog-mascot","team-in-frontier"],
    imageUrl: "https://escudosfc.com.br/images/tihuana_mex.png"
  },
  {
    id: "puebla",
    name: "Puebla",
    titles: 2,
    colors: ["blue", "white"],
    stadium: "Estadio Cuauhtémoc",
    mascot: "Camotero",
    location: "Puebla",
    founded: 1944,
    categories: ["team-with-volcano-nearby"],
    imageUrl: "https://escudosfc.com.br/images/puebla_mex.png"
  }
];