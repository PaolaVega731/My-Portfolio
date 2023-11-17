import React from "react";
import { useTranslation } from "react-i18next";

function Contacto() {
  const { t } = useTranslation();

  return (
    <div className="bg-rose-100 min-h-screen text-center">
      <div className="flex justify-center pb-10">
        <h1 className="text-4xl pt-10"> {t("contact")}</h1>
      </div>
      <p className="pb-8">
        <strong>E-mail:</strong>
        <a
          href="mailto: paolavegadev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          paolavegadev@gmail.com
        </a>
      </p>
      <p className="pb-8">
        <strong>Cell.:</strong> (+598)097192004
      </p>
      <p className="pb-8">
        <strong className="pr-2">WhatsApp:</strong>
        <a
          href="https://web.whatsapp.com/"
          className="bg-cyan-600 text-white px-0 py-0 rounded"
          target="_blank"
        >
          <button className=" w-16 rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
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
          <button className="rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
            {t("linkedin")}
          </button>
        </a>
      </p>
    </div>
  );
}

export default Contacto;
