import { calculateMoths } from "./utils/utils";

export const infoPersonal = {
  name: 'Manuel Jiménez Molina',
  profession: 'Front-end Developer',
  phone: '692820544',
  email: 'mjimem8@gmail.com',
  gitHub: 'www.github.com/mjimem8',
  address: 'C/ La Viña, nº 17',
  city: 'Monturque',
  postalCode: '14930',
  province: 'Córdoba',
  info: 'Me considero una persona que busca constantemente nuevos retos y aprender en el transcurso de ellos. Me encanta trabajar en equipo y que todos nos retroalimentemos de lo aprendido anteriormente. Desde que inicié en el ámbito laboral de la programación he realizado multitud de cursos especializados en front-end y sobre todo haciendo mucho hincapié en las buenas prácticas.'
}

const workExperiences = [
  {
    header: 'PubliCUBE',
    subheader1: 'Front-end',
    subheader2: '3 meses (marzo 2017 - junio 2017)',
    body: 'Estuve desarrollando apps hibridas con ionic v1 (AngularJS) y pude hacer parte de la migración de una aplicación a v2. También programé plugins para wordpress utilizando php y jquery. En este tramo de tiempo no solo estuve centrado en la parte de la lógica, también estuve un tiempo focalizado en aplicar estilos. ',
  },
  {
    header: 'Aicor Consultores',
    subheader1: 'Full-stack',
    subheader2: '1 año y 6 meses (septiembre 2018 - febrero 2020)',
    body: 'Principalmente era desarrollador de aplicaciones hibridas con ionic (hice unas 3 íntegramente yo) con versiones 2 y 3 pero fui intercalando con el desarrollo de algunas aplicaciones SPA con VUE.js y de un ERP desarrollado con CakePHP. En este periodo de tiempo aprendí mucho sobre las buenas prácticas de la programación como los prinpios SOLID o la metodologia de diseño TDD.',
  }, 
  {
    header: 'GRUPO SOLUTIO',
    subheader1: 'Front-end',
    subheader2: '3 meses (febrero 2020 - mayo 2020)',
    body: 'Estuve íntegramente dedicado al desarrollo de aplicaciones web con Angular en versiones 5 y 6.',
  }, 
  {
    header: 'Atmira',
    subheader1: 'Front-end',
    subheader2: `${calculateMoths(new Date('2020/06/17'))} meses (junio 2020 - actualidad)`,
    body: 'Actualmente me encuentro en Atmira desarrollando en las últimas versiones de Angular. Personalmente estoy aprendiendo nuevas tecnologias en mi tiempo libre, ya que me gusta estar reciclandome como profesional.',
  }
];

const studies = [
  {
    header: 'Grado Medio de Sistemas Microinformaticos y Redes',
    subheader1: '2011-2013',
  },
  {
    header: 'Grado Superior de Desarrollo de Aplicaciones Multiplataforma',
    subheader1: '2015-2017',
  }, 
  {
    header: 'Grado Superior de Desarrollo de Aplicaciones Web',
    subheader1: '2017-2018',
  }
];

export const myResume = {
  workExperiences,
  studies
}

export const myServices = [
  {
    icon: 'icon-paintbrush',
    title: 'Código limpio',
    subtitle: 'Aplicar toda mi experiencia hacia un código limpio, funcional y facil de leer'
  },
  {
    icon: 'icon-briefcase',
    title: 'Compromiso',
    subtitle: 'Implicación total con el proyecto y mejora del producto'
  },
  {
    icon: 'icon-search',
    title: 'Análisis',
    subtitle: 'Poder de análisis sobre cualquier tipo de desarrollo con menor o mayor dificultad'
  },
  {
    icon: 'icon-bargraph',
    title: 'Polivalencia',
    subtitle: 'Adaptación al proyecto con cualquier tipo de framework o libreria front-end'
  },
  {
    icon: 'icon-genius',
    title: 'Ideas',
    subtitle: 'Intención de prestar mis conocimientos para aplicar la mejor solución con el grupo de trabajo.'
  },
  {
    icon: 'icon-chat',
    title: 'Soporte',
    subtitle: 'Ayudar a compañeros tecnicamente, como a cliente funcionalmente.'
  },
];