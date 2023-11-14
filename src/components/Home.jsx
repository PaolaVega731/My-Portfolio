import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="w-6/6 p-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-4">
        <img
          className="w-50 h-50 mr-4 rounded-lg "
          src="../public/Foto CV.jpg"
          alt="Foto Perfil"
        />
        <h1 className="text-3xl">
          {t("Hello! I am Paola Vega, Developer Web Front-end Jr.")}
        </h1>
        <h2>{t("Training to be a Full stack developer")}</h2>
        <div>
          <h2 className=" p-6 text-2xl">{t("Welcome to my profile")}</h2>
        </div>
      </div>
      <a
        href="/public/CV Paola Vega.jpeg"
        className="bg-cyan-600 text-white px-4 py-2 rounded"
        target="_blank"
      >
        <button class="rounded-lg cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
          Mi CV
        </button>
      </a>
    </div>
  );
}

export default Home;
