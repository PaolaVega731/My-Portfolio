import React from "react";
import Cards from "./CardsProjects";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "KGC",
      description: "{description}",
      image:
        "https://raw.githubusercontent.com/itsmepaola/Portfolio-Website/main/src/assets/img/Portfolio.png",
      github: "https://github.com/itsmepaola/Portfolio-Website",
    },
    {
      id: 2,
      title: "Mi Portfolio",
      description: "{description3}",
      image:
        "https://raw.githubusercontent.com/itsmepaola/Portfolio-Website/main/src/assets/img/Portfolio.png",
      github: "https://github.com/itsmepaola/Portfolio-Website",
    },
    {
      id: 3,
      title: "Proyecto final de React",
      description: "{description2}",
      image:
        "https://raw.githubusercontent.com/itsmepaola/Portfolio-Website/main/src/assets/img/Portfolio.png",
      github: "https://github.com/itsmepaola/Portfolio-Website",
    },
    {
      id: 4,
      title: "Proyecto final de Desarrollo web y Javascript",
      description: "{description1}",
      image:
        "https://raw.githubusercontent.com/itsmepaola/Portfolio-Website/main/src/assets/img/Portfolio.png",
      github: "https://github.com/itsmepaola/Portfolio-Website",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <Cards
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          linkGithub={project.github}
        ></Cards>
      ))}
    </div>
  );
};

export default Projects;
