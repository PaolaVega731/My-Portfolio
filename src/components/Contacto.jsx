import React from "react";

function Contacto() {
  return (
    <div className="flex flex-col space-y-4 ml-10">
      <div className="flex justify-center pb-10">
        <h1 className="text-4xl"> Contáctame!</h1>
      </div>
      <p>
        <strong>Email:</strong> paolavegadev@gmail.com
      </p>
      <p>
        <strong>Cel.:</strong> 097192004
      </p>
      <p>
        <strong>Whatsapp:</strong>
        <a
          href="https://web.whatsapp.com/"
          className="bg-blue-500 text-white px-0 py-0 rounded"
        >
          <button class="w-16 rounded-xs cursor-pointer hover:scale-110 hover:bg-indigo-500 duration-300 ...">
            wasap
          </button>
        </a>
      </p>
      <p>
        <strong>Linkedin:</strong>
        <a
          href="https://www.linkedin.com/in/paola-vega-578093149/"
          className="bg-blue-500 text-white px-1 py-0 rounded"
        >
          <button class="rounded-xs cursor-pointer hover:scale-110 hover:bg-indigo-500 duration-300 ...">
            Mi Linkedin
          </button>
        </a>
      </p>
    </div>
  );
}

export default Contacto;
