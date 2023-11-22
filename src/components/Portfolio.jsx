import React from "react";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();

  return (
    <div className="  min-h-screen flex flex-col items-center pt-8">
      <div className=" bg-[#FAF2D3] flex flex-col md:flex-row p-4 shadow-md rounded mb-4 w-full max-w-xl">
        <img
          src="/My-Portfolio/Les Vegetarianes.png"
          alt="Les Vegetarianes"
          className="w-32 h-32 md:w-1/3 md:h-25 pt-8 object-contain rounded-l "
        />
        <div className="p-4 w-full md:w-2/3">
          <h2 className="font-bold mb-2">{t("work1")}</h2>
          <p className="mb-2">{t("work11")}</p>
          <a
            href="https://github.com/PaolaVega731/LesVegetarianes"
            className="text-cyan-600 hover:underline"
            target="_blank"
          >
            {t("work111")}
          </a>
          <h1>
            <a
              href="https://paolavega731.github.io/LesVegetarianes/index.html"
              className="text-cyan-600 hover:underline"
              target="_blank"
            >
              {t("work1111")}
            </a>
          </h1>
        </div>
      </div>

      <div className="bg-[#FAF2D3] flex flex-col md:flex-row p-4 shadow-md rounded mb-4 w-full max-w-xl">
        <img
          src="/My-Portfolio/OrganiChic.png"
          alt="OrganiChic"
          className="w-32 h-32 md:w-1/3 md:h-25 pt-8 object-contain rounded-l"
        />
        <div className="p-4 w-full md:w-2/3">
          <h2 className="font-bold mb-2">{t("work2")}</h2>
          <p className="mb-2">{t("work22")}</p>
          <a
            href="https://github.com/PaolaVega731/Organichic"
            className="text-cyan-600 hover:underline"
            target="_blank"
          >
            {t("work111")}
          </a>
          <h1>
            <a
              href="https://organichic-efzw.vercel.app/"
              className="text-cyan-600 hover:underline"
              target="_blank"
            >
              {t("work1111")}
            </a>
          </h1>
        </div>
      </div>

      <div className="bg-[#FAF2D3] flex flex-col md:flex-row p-4 shadow-md rounded mb-4 w-full max-w-xl">
        <img
          src="/My-Portfolio/Perfil-foto.jpg"
          alt="Mi Portfolio"
          className="w-32 h-32 md:w-1/3 md:h-25 pt-8 object-contain rounded-l"
        />
        <div className="p-4 w-full md:w-2/3">
          <h2 className="font-bold mb-2">{t("work3")}</h2>
          <p className="mb-2">{t("work33")}</p>
          <a
            href="https://github.com/PaolaVega731/My-Portfolio"
            className="text-cyan-600 hover:underline"
            target="_blank"
          >
            {t("work111")}
          </a>
          <h1>
            <a
              href="https://paolavega731.github.io/My-Portfolio/"
              className="text-cyan-600 hover:underline"
              target="_blank"
            >
              {t("work1111")}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
