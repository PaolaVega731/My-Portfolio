import React from "react";

function Skills() {
  return (
    <div className="mt-10 mx-auto max-w-2xl">
      <div>
        <h1 className="text-3xl font-semibold mb-4">
          Lenguajes de programación
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src={"/public/Html5-icon.svg"}
            alt="HTML Icon"
            className="w-6 h-6"
          />
          <p>HTML</p>
          <img
            src={"/public/Css-icon.svg"}
            alt="Css Icon"
            className="w-6 h-6"
          />
          <p>CSS</p>
          <img
            src={"/public/JavaScript-icon.svg"}
            alt="JavaScript Icon"
            className="w-6 h-6"
          />
          <p>JavaScript Vanilla</p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold mb-4">Frameworks y librerías</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src={"/public/Bootstrap-icon.svg"}
            alt="Bootstrap Icon"
            className="w-6 h-6"
          />
          <p>Bootstrap</p>
          <img
            src={"/public/Tailwind-icon.svg"}
            alt="Tailwind Icon"
            className="w-6 h-6"
          />
          <p>Tailwind</p>
          <img
            src={"/public/Github-icon.svg"}
            alt="GitHub Icon"
            className="w-6 h-6"
          />
          <p>GitHub</p>
          <img
            src={"/public/Taypescript-icon.svg"}
            alt="TypeScript Icon"
            className="w-6 h-6"
          />
          <p>TypeScript</p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold mb-4">Formándome en...</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src={"/public/Nodejs-icon.svg"}
            alt="Nodejs Icon"
            className="w-6 h-6"
          />
          <p>Backend</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
