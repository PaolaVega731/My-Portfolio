import { useState } from "react";
import { useTranslation } from "react-i18next";

function EducacionMobile() {
  const [mostrarCertificado1, setMostrarCertificado1] = useState(false);
  const [mostrarCertificado2, setMostrarCertificado2] = useState(false);
  const [mostrarCertificado3, setMostrarCertificado3] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center mb-10">
      <div className="x-4 flex flex-col items-center justify-center lg:mt-0 max-w-md md:max-w-full md:flex md:flex-col md:items-center pt-10">
        <div className='flex flex-col space-y-4 items-center md:items-start'>
          <li className='text-2xl italic hover:not-italic'>{t("curso1")}</li>
          <p className='text-lg'> CoderHouse</p>
          <p>{t("curso11")}</p>
          <div>
            <p>{t("curso111")}</p>
          </div>
          <button
            className='text-white text-xl rounded-full bg-gray-600 hover:bg-gray-700 px-4 py-2 transition duration-300 ease-in-out'
            onClick={() => setMostrarCertificado1(!mostrarCertificado1)}
          >
            {t("curso")}
          </button>
          <div className={mostrarCertificado1 ? "block" : "hidden"}>
            <img
              className='w-90 h-80'
              src='/My-Portfolio/Certificado Desarrollo Web.jpeg'
              alt='Certificado JavaScript'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4 items-center md:items-start pt-6'>
          <li className='text-2xl italic hover:not-italic'>{t("curso2")}</li>
          <p className='text-lg'> CoderHouse</p>
          <p>{t("curso22")}</p>
          <div>
            <p>{t("curso222")}</p>
          </div>
          <button
            className='text-white text-xl rounded-full bg-gray-600 hover:bg-gray-700 px-4 py-2 transition duration-300 ease-in-out'
            onClick={() => setMostrarCertificado2(!mostrarCertificado2)}
          >
            {t("curso")}
          </button>
          <div className={mostrarCertificado2 ? "block" : "hidden"}>
            <img
              className='w-90 h-80'
              src='/My-Portfolio/Certificado JavaScript.jpg'
              alt='Certificado JavaScript'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-4 items-center md:items-start pt-6'>
          <li className='text-2xl italic hover:not-italic'> React Js</li>
          <p className='text-lg'> CoderHouse</p>
          <p>{t("curso3")}</p>
          <div>
            <p>{t("curso33")}</p>
          </div>
          <button
            className='text-white text-xl rounded-full bg-gray-600 hover:bg-gray-700 px-4 py-2 transition duration-300 ease-in-out'
            onClick={() => setMostrarCertificado3(!mostrarCertificado3)}
          >
            {t("curso")}
          </button>
          <div className={mostrarCertificado3 ? "block" : "hidden"}>
            <img
              className='w-90 h-80'
              src='/My-Portfolio/Certificado React.jpg'
              alt='Certificado JavaScript'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducacionMobile;
