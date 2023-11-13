import React from "react";

function Portfolio() {
  return (
    <div className="flex flex-col items-center pt-8">
      <div className="flex p-4 shadow-md rounded mb-4 w-full max-w-xl">
        <img
          src="/public/Les Vegetarianes.png"
          alt="Les Vegetarianes"
          className="w-1/3 h-32pt-8 object-contain rounded-l"
        />
        <div className="p-4 w-2/3">
          <h2 className="font-bold mb-2">
            Proyecto final de Desarrollo web y JavaScript
          </h2>
          <p className="mb-2">
            Desarrollado con Html, Css, JavaScript, Bootstrap, Sweet Alert2.
            Responsive web design.
          </p>
          <a
            href="https://github.com/PaolaVega731/LesVegetarianes"
            className="text-cyan-600 hover:underline"
            target="_blank"
          >
            Ver en GitHub
          </a>
          <h1>
            <a
              href="https://paolavega731.github.io/LesVegetarianes/index.html"
              className="text-cyan-600 hover:underline"
              target="_blank"
            >
              Abrir Web
            </a>
          </h1>
        </div>
      </div>

      <div className="flex p-4 shadow-md rounded mb-4 w-full max-w-xl">
        <img
          src="/public/OrganiChic.png"
          alt="OrganiChic"
          className="w-1/2 h-50 object-contain rounded-l"
        />
        <div className="p-4 w-1/2">
          <h2 className="font-bold mb-2">Proyecto final de React</h2>
          <p className="mb-2">
            Desarrollado con React,Bootstrap,Css y Firebase
          </p>
          <a
            href="https://github.com/PaolaVega731/Organichic"
            className="text-cyan-600 hover:underline"
            target="_blank"
          >
            Ver en GitHub
          </a>
          <h1>
            <a
              href=""
              className="text-cyan-600 hover:underline"
              target="_blank"
            >
              Abrir Web
            </a>
          </h1>
        </div>
      </div>

      <div className="flex p-4 shadow-md rounded mb-4 w-full max-w-xl">
        <img
          src="/public/Perfil-foto.jpg"
          alt="Mi Portfolio"
          className="w-1/3 h-32 object-contain rounded-l"
        />
        <div className="p-4 w-2/3">
          <h2 className="font-bold mb-2">Mi Porfolio</h2>
          <p className="mb-2">Desarrollado con React y Tailwind</p>
          <a
            href="https://github.com/PaolaVega731/My-Portfolio"
            className="text-cyan-600 hover:underline"
            target="_blank"
          >
            Ver en GitHub
          </a>
          <h1>
            <a
              href=""
              className="text-cyan-600 hover:underline"
              target="_blank"
            >
              Abrir Web
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
