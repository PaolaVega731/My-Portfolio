import React from "react";
import { useTranslation } from "react-i18next";

function SobreMi() {
  const { t } = useTranslation();
  return (
    <div className="p-20 flex justify-center items-center">
      <img
        className="w-90 h-80 mr-4"
        src="/My-Portfolio/Perfil-foto.jpg"
        alt={t("profilePicture")}
      />
      <div className="text-left">
        <p>{t("my")},</p>

        <h1 className="mt-8 text-lg">
          {t("check")}
          <a
            href="https://www.linkedin.com/in/paola-vega-578093149/"
            className="bg-cyan-600 text-white px-1 py-0 rounded"
            target="_blank"
          >
            <button className="rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...">
              {t("linkedin")}
            </button>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default SobreMi;
