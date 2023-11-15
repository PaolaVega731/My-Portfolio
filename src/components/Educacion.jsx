import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Educacion() {
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="mt-10 ml-20">
      <div className="flex flex-col space-y-4">
        <li className="text-2xl italic hover:not-italic">{t("curso1")}</li>
        <p className="text-lg"> CoderHouse</p>
        <p>{t("curso11")} </p>
        <div>
          <p>{t("curso111")}</p>
        </div>
        <button
          className=" text-xl transition ease-in-out delay bg-cyan-600 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-600 duration-300 ..."
          onClick={() => setMostrarCertificado(!mostrarCertificado)}
        >
          {t("curso")}
        </button>
        <div
          className={`certificado ${mostrarCertificado ? "block" : "hidden"}`}
        >
          <img
            className="w-90 h-80"
            src="/Certificado Desarrollo Web.jpeg"
            alt="Certificado JavaScript"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <li className="text-2xl italic hover:not-italic">{t("curso2")}</li>
        <p className="text-lg"> CoderHouse</p>
        <p>{t("curso22")}</p>
        <div>
          <p>{t("curso222")} </p>
        </div>
        <button
          className=" text-xl transition ease-in-out delay-150 bg-cyan-600 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-600 duration-300 ..."
          onClick={() => setMostrarCertificado(!mostrarCertificado)}
        >
          {t("curso")}
        </button>
        <div
          className={`certificado ${mostrarCertificado ? "block" : "hidden"}`}
        >
          <img
            className="w-90 h-80"
            src="/Certificado JavaScript.jpg"
            alt="Certificado JavaScript"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <li className="text-2xl italic hover:not-italic"> React Js</li>
        <p className="text-lg"> CoderHouse</p>
        <p>{t("curso3")} </p>
        <div>
          <p> {t("curso33")}</p>
        </div>
        <button
          className=" text-xl transition ease-in-out delay-150 bg-cyan-600 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-600 duration-300 ..."
          onClick={() => setMostrarCertificado(!mostrarCertificado)}
        >
          {t("curso")}
        </button>
        <div
          className={`certificado ${mostrarCertificado ? "block" : "hidden"}`}
        >
          <img
            className="w-90 h-80"
            src="/Certificado JavaScript.jpg"
            alt="Certificado JavaScript"
          />
        </div>
      </div>
    </div>
  );
}

export default Educacion;
