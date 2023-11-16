import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="w-full p-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <img
          className="w-50 h-50 md:w-32 md:h-32 mr-4 rounded-lg "
          src="/My-Portfolio/Foto CV.jpg"
          alt="Foto Perfil"
        />
        <h1 className="text-3xl md:text-2xl">{t("hello")}</h1>
        <h2 className="md:text-xl">{t("data")}</h2>
        <div>
          <h2 className="p-6 text-2xl md:text-xl">{t("welcome")}</h2>
        </div>
      </div>
      <a
        href="/My-Portfolio/CV Paola Vega.jpeg"
        className="bg-cyan-600 text-white px-4 py-2 rounded"
        target="_blank"
      >
        <button className="rounded-lg cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
          Mi CV
        </button>
      </a>
    </div>
  );
}

export default Home;
