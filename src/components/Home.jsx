import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex bg-violet-500">
      <div className="w-1/6 bg-gray-200 p-4">
        <nav>
          <ul>
            <li>
              <Link to="/sobremi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/portfolio">Portafolio</Link>
            </li>
            <li>
              <Link to="/educacion">Educacion</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-5/6 p-4">
        <div className="flex items-center">
          <img src="" />
          <h1>Paola Vega</h1>
          <h2>Bienvenidx a mi portfolio</h2>
          <p>
            Si quieres ponerte en contacto conmigo escribeme a
            paolavega731@hotmail.com
          </p>
          <a
            href="/ruta-a-tu-cv.pdf"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
              Descargar CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
