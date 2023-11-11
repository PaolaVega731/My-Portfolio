import React from "react";

function Home() {
  return (
    <div className="w-5/6 p-4">
      <div className="flex items-center">
        <img src="" />
        <h1>Hola! Soy Paola Vega, Desarrolladora Front-end Jr</h1>
        <h2>Bienvenidx a mi portfolio</h2>
        <p>
          Si quieres ponerte en contacto conmigo escríbeme a
          paolavegadev@gmail.com
        </p>
        <a
          href="/ruta-a-tu-cv.pdf"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          <button class="rounded-lg cursor-pointer hover:scale-110 hover:bg-indigo-500 duration-300 ...">
            Descargar CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
