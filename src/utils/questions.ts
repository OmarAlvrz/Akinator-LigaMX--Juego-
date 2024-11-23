import { Team } from '../data/teams';

export interface Question {
  id: string;
  text: string;
  evaluate: (team: Team) => boolean;
}

export const questions: Question[] = [
  {
    id: 'titles',
    text: '¿Tu equipo ha ganado más de 10 títulos de liga?',
    evaluate: (team) => team.titles > 10
  },
  {
    id: 'colors-blue-yellow',
    text: '¿Los colores principales de tu equipo son amarillo y azul?',
    evaluate: (team) => 
      team.colors.includes('yellow') && team.colors.includes('blue')
  },
  {
    id: 'location-cdmx',
    text: '¿Tu equipo es de la Ciudad de México?',
    evaluate: (team) => team.location === 'Ciudad de México'
  },
  {
    id: 'historic',
    text: '¿Tu equipo es considerado uno de los 4 grandes de la liga?',
    evaluate: (team) => team.categories.includes('historic')
  },
  {
    id: 'mascot-feline',
    text: '¿La mascota de tu equipo es un felino?',
    evaluate: (team) => ['Tigre', 'Puma', 'León'].includes(team.mascot)
    },
    {
    id: 'mascot-dog',
    text: '¿Tu equipo tiene un perro como mascota?',
    evaluate: (team) => team.categories.includes('team-with-dog-mascot')
    },
    {
    id: 'frontier-team',
    text: '¿Tu equipo está en la frontera?',
    evaluate: (team) => team.categories.includes('team-in-frontier')
    },
    {
    id: 'colors-red',
    text: '¿Tu equipo usa el color rojo?',
    evaluate: (team) => team.colors.includes('red')
    },
    {
    id: 'location-monterrey',
    text: '¿Tu equipo es de Monterrey?',
    evaluate: (team) => team.location === 'Monterrey'
    },
    {
    id: 'founded-recent',
    text: '¿Tu equipo fue fundado después del año 2000?',
    evaluate: (team) => team.founded > 2000
    },
    {
    id: 'mascot-bird',
    text: '¿La mascota de tu equipo es un ave?',
    evaluate: (team) => ['Águila', 'Gallos'].includes(team.mascot)
    },

    /////// PREGUNTAS NUEVAS ///////
    {
      id: 'colors-purple',
      text: '¿El color principal de tu equipo es morado?',
      evaluate: (team) => team.colors.includes('purple')
    },
    {
      id: 'owned-by-cementera',
      text: '¿Tu equipo es propiedad de una cementera?',
      evaluate: (team) => team.categories.includes('owned-by-cementera')
    },
    {
      id: 'nicknamed-laguneros',
      text: '¿A tu equipo se le conoce como "Laguneros"?',
      evaluate: (team) => team.categories.includes('nicknamed-laguneros')
    },
    {
      id: 'stadium-named-kraken',
      text: '¿Tu equipo juega en un estadio llamado "Kraken"?',
      evaluate: (team) => team.stadium === 'Estadio Kraken'
    },
    {
      id: 'categories-university-team',
      text: '¿Tu equipo es un equipo universitario?',
      evaluate: (team) => team.categories.includes('university-team')
    },
    {
      id: 'mascot-zorro',
      text: '¿La mascota de tu equipo es un zorro?',
      evaluate: (team) => team.mascot === 'Zorro'
    },
    {
      id: 'titleless-team',
      text: '¿Tu equipo no ha ganado ningún título de liga?',
      evaluate: (team) => team.titles === 0
    },
    {
      id: 'team-in-guadalajara',
      text: '¿Tu equipo es de Guadalajara?',
      evaluate: (team) => team.location === 'Guadalajara'
    },
    {
      id: 'owned-by-grupo-caliente',
      text: '¿Tu equipo es propiedad de Grupo Caliente?',
      evaluate: (team) => team.categories.includes('team-owned-by-grupo-caliente')
    },
    {
      id: 'stadium-most-recent',
      text: '¿Tu equipo tiene el estadio más reciente?',
      evaluate: (team) => team.categories.includes('the-most-recent-stadium')
    },
    {
      id: 'mascot-camotero',
      text: '¿La mascota de tu equipo es un camotero?',
      evaluate: (team) => team.mascot === 'Camotero'
    },
    {
      id: 'european-ownership',
      text: '¿Tu equipo es propiedad de otro equipo europeo?',
      evaluate: (team) => team.categories.includes('european-ownership')
    },
    {
      id: 'the-oldes-team',
      text: '¿Tu equipo es el más antiguo de la liga?',
      evaluate: (team) => team.categories.includes('oldest-team-in-liga-mx')
    },
    {
      id: 'team-of-don-ramon',
      text: '¿Don Ramon apoya a tu equipo?',
      evaluate: (team) => team.categories.includes('the-team-of-don-ramon')
    },
    {
      id: 'saturdino-cardozo-played-here',
      text: '¿Saturdino Cardozo es el idolo de su aficion?',
      evaluate: (team) => team.categories.includes('saturdino-cardozo-played-here')
    }
    
  //algunos equipos no tienen pregunta con la cual llegar a ellos, pachuca, necaxa y debe haber otro
  //Por alguna razon la ultima pregunta no se toma en cuenta para filtrar los equipos dando un resultado erroneo
];