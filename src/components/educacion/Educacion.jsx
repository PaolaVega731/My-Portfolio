import { useState } from "react";
import { useTranslation } from "react-i18next";

function Educacion() {
  const [mostrarCertificado1, setMostrarCertificado1] = useState(false);
  const [mostrarCertificado2, setMostrarCertificado2] = useState(false);
  const [mostrarCertificado3, setMostrarCertificado3] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center lg:mt-0 mx-auto max-w-md md:max-w-full md:flex md:flex-col md:items-center pt-18">
        <div className="certificado-item flex justify-between mb-12">
          <div className="certificado-info">
            <li className="text-4xl italic hover:not-italic">{t("curso1")}</li>
            <p className="text-2xl"> CoderHouse</p>
            <p className="text-2xl">{t("curso11")}</p>
          </div>
          <button
            className="certificado-btn bg-gray-600 text-white text-lg px-3 py-1 rounded-full ml-4"
            onClick={() => setMostrarCertificado1(!mostrarCertificado1)}
          >
            {t("curso")}
          </button>
        </div>
        <div className="certificado-item flex justify-between mb-12">
          <div className="certificado-info">
            <li className="text-4xl italic hover:not-italic">{t("curso2")}</li>
            <p className="text-2xl"> CoderHouse</p>
            <p className="text-2xl">{t("curso22")}</p>
          </div>
          <button
            className="certificado-btn bg-gray-600 text-white text-lg px-3 py-1 rounded-full ml-4"
            onClick={() => setMostrarCertificado2(!mostrarCertificado2)}
          >
            {t("curso")}
          </button>
        </div>
        <div className="certificado-item flex justify-between">
          <div className="certificado-info">
            <li className="text-4xl italic hover:not-italic"> React Js</li>
            <p className="text-2xl"> CoderHouse</p>
            <p className="text-2xl">{t("curso3")}</p>
          </div>
          <button
            className="certificado-btn bg-gray-600 text-white text-lg px-3 py-1 rounded-full ml-4"
            onClick={() => setMostrarCertificado3(!mostrarCertificado3)}
          >
            {t("curso")}
          </button>
        </div>
      </div>
      <div className="certificado-overlay ml-8">
        <div className={`certificado ${mostrarCertificado1 ? "block" : "hidden"}`}>
          <img
            className="w-90 h-80"
            src="/My-Portfolio/Certificado Desarrollo Web.jpeg"
            alt="Certificado JavaScript"
          />
        </div>
        <div className={`certificado ${mostrarCertificado2 ? "block" : "hidden"}`}>
          <img
            className="w-90 h-80"
            src="/My-Portfolio/Certificado JavaScript.jpg"
            alt="Certificado JavaScript"
          />
        </div>
        <div className={`certificado ${mostrarCertificado3 ? "block" : "hidden"}`}>
          <img
            className="w-90 h-80"
            src="/My-Portfolio/Certificado React.jpg"
            alt="Certificado JavaScript"
          />
        </div>
      </div>
    </div>
  );
}

export default Educacion;
