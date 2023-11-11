import React from "react";
import { useState } from "react";

function Educacion() {
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  return (
    <div className="mt-10 ml-20">
      <div className="flex flex-col space-y-4">
        <li className="text-2xl italic hover:not-italic">Desarrollo web</li>
        <p className="text-lg"> CoderHouse</p>
        <p>Curso de 38 horas dictadas a lo largo de 10 semanas </p>
        <div>
          <p> Abril 2023 - Julio 2023</p>
        </div>
        <button
          className=" text-xl transition ease-in-out delay bg-violet-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          onClick={() => setMostrarCertificado(!mostrarCertificado)}
        >
          Certificado
        </button>
        <div
          className={`certificado ${mostrarCertificado ? "block" : "hidden"}`}
        >
          <img
            className="w-90 h-80"
            src="../public/Certificado Desarrollo Web.jpeg"
            alt="Certificado JavaScript"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <li className="text-2xl italic hover:not-italic">JavaScript Vanilla</li>
        <p className="text-lg"> CoderHouse</p>
        <p>Curso de 36 horas dictadas a lo largo de 9 semanas </p>
        <div>
          <p> Julio 2023 - Septiembre 2023</p>
        </div>
        <button
          class=" text-xl transition ease-in-out delay-150 bg-violet-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          onClick={() => setMostrarCertificado(!mostrarCertificado)}
        >
          Certificado
        </button>
        <div
          className={`certificado ${mostrarCertificado ? "block" : "hidden"}`}
        >
          <img
            className="w-90 h-80"
            src="../public/Certificado JavaScript.jpg"
            alt="Certificado JavaScript"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <li className="text-2xl italic hover:not-italic"> React Js</li>
        <p className="text-lg"> CoderHouse</p>
        <p>Curso de 34 horas dictadas a lo largo de 8 semanas </p>
        <div>
          <p> Septiembre 2023 - Noviembre 2023</p>
        </div>
        <button
          class=" text-xl transition ease-in-out delay-150 bg-violet-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          onClick={() => setMostrarCertificado(!mostrarCertificado)}
        >
          Certificado
        </button>
        <div
          className={`certificado ${mostrarCertificado ? "block" : "hidden"}`}
        >
          <img
            className="w-90 h-80"
            src="../public/Certificado JavaScript.jpg"
            alt="Certificado JavaScript"
          />
        </div>
      </div>
    </div>
  );
}

export default Educacion;
