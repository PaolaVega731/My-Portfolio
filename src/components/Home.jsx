import React from "react";

function Home() {
  return (
    <div className="w-6/6 p-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <img
          className="w-50 h-50 mr-4 rounded-lg "
          src="../public/Foto CV.jpg"
          alt="Foto Perfil"
        />
        <h1 className="text-3xl">
          Hola! Soy Paola Vega, Desarrolladora Front-end Jr
        </h1>
        <h2>Formandome para Desarrolladora Full Stack</h2>
        <div>
          <h2 className=" p-6 text-2xl">Bienvenidx a mi portfolio</h2>
        </div>
      </div>
      <a
        href="/public/CV Paola Vega.jpeg"
        className="bg-cyan-600 text-white px-4 py-2 rounded"
        target="_blank"
      >
        <button class="rounded-lg cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
          Mi CV
        </button>
      </a>
    </div>
  );
}

export default Home;
