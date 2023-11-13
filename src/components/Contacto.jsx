import React from "react";

function Contacto() {
  return (
    <div className="text-center">
      <div className="flex justify-center pb-10">
        <h1 className="text-4xl pt-10"> Contáctame!</h1>
      </div>
      <p className="pb-8">
        <strong>Email:</strong> paolavegadev@gmail.com
      </p>
      <p className="pb-8">
        <strong>Cel.:</strong> 097192004
      </p>
      <p className="pb-8">
        <strong className="pr-2">Whatsapp:</strong>
        <a
          href="https://web.whatsapp.com/"
          className="bg-cyan-600 text-white px-0 py-0 rounded"
          target="_blank"
        >
          <button class=" w-16 rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
            wasap
          </button>
        </a>
      </p>
      <p>
        <strong className="pr-2">Linkedin:</strong>
        <a
          href="https://www.linkedin.com/in/paola-vega-578093149/"
          className="bg-cyan-600 text-white px-1 py-0 rounded"
          target="_blank"
        >
          <button class="rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
            Mi Linkedin
          </button>
        </a>
      </p>
    </div>
  );
}

export default Contacto;
