import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        hello: "Hello! I am Paola Vega, Developer Web Front-end Jr.",
        data: "Training to be a Full stack developer",
        welcome: "Welcome to my profile",
        my: "Hello, my name is Paola, I live in Costa Azul, Uruguay. I am proactive, organized and responsible person. My goal is to be part of a dynamic and challenging team where i can share my experience and at the same time acquire new knowledge. I started mu professional career as an Administrative Accountant more than 15 years ago;In these last 6 years I also acquired knowledge as an Analyst in Foreign Trade and Logistics Control in a Chemical Plant. At the end of 2022 I decided to take an omportant turn in my professional career and began my studies in Web Programming. I am currently continuing to train in Backend Programming and am looking to expand my work field in the world of.Web Development.",
        check: "Ckeck out my work experience at:",
        linkedin: "My LinkedIn",
        work1: "Final web development and JavaScript project",
        work11:
          "Developed with Html, Css, JavaScript, Bootstrap and SweetAlert2. Responsive web design.",
        work111: "See on GitHub",
        work1111: " Open Web",
        work2: "React final project",
        work22: "Developed with React, Bootstrap, Css and Firebase",
        work33: "Developed with React and Tailwind",
        work3: "My Profile",
        home: "Home",
        sobremi: "About me",
        porfile: "Portfolio",
        edu: "Eduacation",
        skills: "Skills",
        conta: "Contact",
        curso: "Certificate",
        curso1: "Web Development",
        curso11: "38-hour course taught over 10 weeks",
        curso111: "April 2023 - July 2023",
        curso2: "Vanilla JavaScript",
        curso22: "36-hour course taught over 9 weeks",
        curso222: "July 2023 - September 2023",
        curso3: "34-hour course taught over 8 weeks",
        curso33: "September 2023 - November 2023",
        leng: "Programming languages",
        leng1: "Frameworks and libraries",
        leng2: "Training in...",
        contact: "Contact me!",
      },
    },
    es: {
      translations: {
        hello: "Hola! Soy Paola Vega, Desarrolladora Front-end Jr.",
        data: "Formandome para Desarrolladora Full Stack",
        welcome: "Bienvenido a mi portfolio",
        my: `Hola, mi nombre es Paola, vivo en Costa Azul, Uruguay. Soy un persona
        proactiva,organizada y responsable. Mi objetivo es formar parte de un
        equipo dinámico y desafiante donde poder compartir mi experiencia y a
        su vez adquirir nuevos conocimientos. Empecé mi trayectoria
        profesional como Administrativa Contable hace más de 15 años; en éstos
        últimos 6 años adquirí también conocimientos en Analista en Comercio
        Exterior y Control de logística en una Planta Química. A finales del
        2022 decidí darle un giro importante a mi carrera profesional y
        comencé con mis estudios de Programación Web.
        Actualmente sigo capacitandome en Programación Backend y busco ampliar
        mi campo laboral en el mundo del Desarrollo Web.`,
        check: "Mirá mi experiencia laboral en detalle en:",
        linkedin: "Mi Linkedin",
        work1: "Proyecto final de Desarrollo web y JavaScript",
        work11:
          "Desarrollado con Html, Css, JavaScript, Bootstrap y SweetAlert2. Responsive web design.",
        work111: "Ver en GitHub",
        work1111: "Abrir Web",
        work2: "Proyecto final de React",
        work22: "Desarrollado con React, Bootstarp, Css y Firebase",
        work33: "Desarrollado con React y Tailwind",
        work3: "Mi Portfolio",
        home: "Home",
        sobremi: "Sobre mi",
        porfile: "Portfolio",
        edu: "Educación",
        skills: "Skills",
        conta: "Contacto",
        curso: "Certificado",
        curso1: "Desarrollo web",
        curso11: "Curso de 38 horas dictadas a lo largo de 10 semanas",
        curso111: "Abril 2023 - Julio 2023",
        curso2: "JavaScript Vanilla",
        curso22: "Curso de 36 horas dictadas a lo largo de 9 semanas",
        curso222: "Julio 2023 - Septiembre 2023",
        curso3: "Curso de 34 horas dictadas a lo largo de 8 semanas",
        curso33: "Septiembre 2023 - Noviembre 2023",
        leng: "Lenguajes de programación",
        leng1: "Frameworks y librerías",
        leng2: "Formándome en...",
        contact: "Contáctame!",
      },
    },
  },
  fallbackLng: "es",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
