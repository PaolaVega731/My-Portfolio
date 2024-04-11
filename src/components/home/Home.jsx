import React from "react";
import { useTranslation } from "react-i18next";
import CardsProjects from "../CardsProjects";

function Home() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "KGC",
      image: "/My-Portfolio/Kgc.jpeg",
      tech: "React, Tailwind, Azure",
      linkGithub: "https://github.com/PaolaVega731/Paginasgsi2",
      linkWeb: "https://paginasgsi2.vercel.app/",
      description: t("description"),
    },
    {
      title: "Les Vegetarianes",
      image: "/My-Portfolio/Les Vegetarianes.png",
      tech: "Html, Css, JavaScript, Bootstrap",
      linkGithub: "https://github.com/PaolaVega731/LesVegetarianes",
      linkWeb: "https://paolavega731.github.io/LesVegetarianes/index.html",
      description: t("description1"),
    },
    {
      title: "OrganiChic",
      image: "/My-Portfolio/OrganiChic.png",
      tech: "React, Bootstrap, Css, Firebase, Vercel",
      linkGithub: "https://github.com/PaolaVega731/Organichic",
      linkWeb: "https://organichic-efzw.vercel.app/",
      description: t("description2"),
    },
    {
      title: "Mi Portfolio",
      image: "/My-Portfolio/Perfil-foto.jpg",
      tech: "React , Tailwind",
      linkGithub: "https://github.com/PaolaVega731/My-Portfolio",
      linkWeb: "https://paolavega731.github.io/My-Portfolio/",
      description: t("description3"),
    },
  ];

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-12 lg:mb-8 mb-8 mt-24">
      <div className="lg:w-1/2 lg:mr-8 mb-8 text-center lg:text-left lg:mb-[180px]">
        <div className="flex items-center justify-center lg:justify-start">
          <img
            className="w-64 h-64 lg:w-72 lg:h-72 md:w-48 md:h-48 rounded-lg mb-4 lg:mb-0 lg:mr-8"
            src="/My-Portfolio/Foto CV.jpg"
            alt="Foto Perfil"
          />
          <div>
            <h1 className="text-xl lg:text-3xl 2xl:text-4xl mb-2">
              {t("hello")}
            </h1>
            <h2 className="text-lg md:text-xl hidden lg:block mb-4">
              {t("data")}
            </h2>
            <div className="hidden lg:block">
              <h2 className="p-6 text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                {t("welcome")}
              </h2>
            </div>
            <a
              href="/My-Portfolio/CV Desarrolladora Web.pdf"
              className="bg-gray-600 text-white px-4 py-2 rounded inline-block "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl rounded-lg cursor-pointer hover:scale-110 hover:bg-gray-600 duration-300">
                Mi CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mb-8 -mt-12">
        <h2 className="text-2xl lg:text-4xl font-bold">{t("projectsTitle")}</h2>
      </div>
      <div className="min-h-screen flex flex-col items-center">
        {projects.map((project, index) => (
          <CardsProjects
            key={index}
            title={project.title}
            image={project.image}
            tech={project.tech}
            linkGithub={project.linkGithub}
            linkWeb={project.linkWeb}
            
          >
            {project.description}
          </CardsProjects>
        ))}
      </div>
      <footer className="text-center mt-auto"></footer>
    </div>
  );
}

export default Home;