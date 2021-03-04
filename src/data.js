import { calculateMoths } from "./utils/utils";
import questionApp from './images/questionapp.jpg';
import partes from './images/partes.jpg';
import inventario from './images/inventario.jpg';
import gastosvarios from './images/gastosvarios.jpg';
import erp from './images/erp.jpg';
import bancamarch from './images/bancamarch.PNG';
import tpv from './images/tpv.jpeg';
import vrt from './images/vrt.jpg';
import cursoComponentes from './images/curso-componentes.jpg';
import cursoEcmascript6 from './images/curso-ecmascript6.jpg';
import cursoRxjs from './images/curso-rxjs.jpg';
import cursoSql from './images/curso-sql.jpg';
import cursoAngular from './images/curso-angular.jpg';

export const infoPersonal = {
  name: 'Manuel Jiménez Molina',
  profession: 'Front-end Developer',
  phone: '692820544',
  email: 'mjimem8@gmail.com',
  gitHub: 'www.github.com/mjimem8',
  urlLinkedin: 'https://es.linkedin.com/in/manuel-jim%C3%A9nez-molina-a69828187?trk=people-guest_people_search-card',
  address: 'C/ La Viña, nº 17',
  city: 'Monturque',
  postalCode: '14930',
  province: 'Córdoba',
  info1: 'Me considero una persona que busca constantemente nuevos retos y aprender en el transcurso de ellos. Me encanta trabajar en equipo y que todos nos retroalimentemos de lo aprendido anteriormente. Desde que inicié en el ámbito laboral de la programación he realizado multitud de cursos especializados en front-end y sobre todo haciendo mucho hincapié en las buenas prácticas.',
  info2: 'Actualmente me encuentro trabajando en proyectos de Angular en sus últimas versiones pero además tengo experiencia en otras tecnologias como Ionic, Vue.js, React, etc'
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
    subtitle: 'Aplicar toda mi experiencia hacia un código limpio, funcional y facil de leer.'
  },
  {
    icon: 'icon-briefcase',
    title: 'Compromiso',
    subtitle: 'Implicación total con el proyecto y mejora del producto. Muy metódico en la forma de trabajar'
  },
  {
    icon: 'icon-search',
    title: 'Análisis',
    subtitle: 'Poder de análisis sobre cualquier tipo de desarrollo con menor o mayor dificultad.'
  },
  {
    icon: 'icon-bargraph',
    title: 'Polivalencia',
    subtitle: 'Adaptación al proyecto con cualquier tipo de framework o libreria front-end.'
  },
  {
    icon: 'icon-genius',
    title: 'Ideas',
    subtitle: 'Intención de prestar mis conocimientos para aplicar la mejor solución con el grupo de trabajo.'
  },
  {
    icon: 'icon-chat',
    title: 'Soporte',
    subtitle: 'Ayudar a compañeros tecnicamente, como a cliente funcionalmente con el proyecto.'
  },
];

export const skills = [
  {
    name: 'Angular',
    percentaje: '95',
  },
  {
    name: 'Javascript',
    percentaje: '85',
  }, 
  {
    name: 'Typescript',
    percentaje: '90',
  }, 
  {
    name: 'VUE.js',
    percentaje: '70',
  },
  {
    name: 'Redux',
    percentaje: '90',
  }, 
  {
    name: 'CSS y SASS',
    percentaje: '70',
  }, 
  {
    name: 'Ionic',
    percentaje: '85',
  }, 
  {
    name: 'Git',
    percentaje: '80',
  }, 
  {
    name: 'HTML',
    percentaje: '75',
  }, 
  {
    name: 'React',
    percentaje: '65',
  },
  {
    name: 'ECMAScript 6',
    percentaje: '85',
  }, 
  {
    name: 'Testing (Enzyme y Jest)',
    percentaje: '60',
  }
];

export const myWorks = [
  {
    name: 'Inventario Estratos Plus',
    technology: 'Ionic',
    photo: inventario
  },
  {
    name: 'QuestionApp',
    technology: 'Ionic',
    photo: questionApp
  },
  {
    name: 'Partes de trabajo Estratos Plus',
    technology: 'Ionic',
    photo: partes
  },
  {
    name: 'Gastos Varios Estratos',
    technology: 'Ionic',
    photo: gastosvarios
  },
  {
    name: 'TPV',
    technology: 'Vue.js',
    photo: tpv
  },
  {
    name: 'ERP',
    technology: 'CakePHP',
    photo: erp
  },
  {
    name: 'VRT',
    technology: 'Angular',
    photo: vrt
  },
  {
    name: 'Banca March',
    technology: 'Angular',
    photo: bancamarch
  },
];

export const lastCourses = [
  {
    title: 'ECMAScript6 y todos sus detalles',
    date: '18/07/2020',
    photo: cursoEcmascript6
  },
  {
    title: 'SQL - Base de datos avanzado',
    date: '13/05/2020',
    photo: cursoSql
  },
  {
    title: 'Componentes en Angular - nivel PRO',
    date: '05/04/2020',
    photo: cursoComponentes
  },
  {
    title: 'ReactiveX - RxJs y sus detalles',
    date: '29/03/2020',
    photo: cursoRxjs
  },
  {
    title: 'Angular nivel avanzado',
    date: '13/02/2020',
    photo: cursoAngular
  }
];

export const confEmailJS = {
  serviceId: 'service_90y8f1w',
  templateId: 'template_kj7oodx',
  userId: 'user_vsVcRuT7e7PPe0WgTzP1c'
}