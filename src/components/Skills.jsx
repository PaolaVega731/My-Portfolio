import React from "react";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center mt-10 mx-auto max-w-2xl">
      <div>
        <h1 className="text-2xl md:text-2xl font-semibold mb-4">{t("leng")}</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src={"/My-Portfolio/Html5-icon.svg"}
            alt="HTML Icon"
            className="w-6 h-6"
          />
          <p>HTML</p>
          <img
            src={"/My-Portfolio/Css-icon.svg"}
            alt="Css Icon"
            className="w-6 h-6"
          />
          <p>CSS</p>
          <img
            src={"/My-Portfolio/JavaScript-icon.svg"}
            alt="JavaScript Icon"
            className="w-6 h-6"
          />
          <p>JavaScript Vanilla</p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="flex flex-col items-center justify-center text-3xl md:text-2xl font-semibold mb-4">
          {t("leng1")}
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src={"/My-Portfolio/Bootstrap-icon.svg"}
            alt="Bootstrap Icon"
            className="w-6 h-6"
          />
          <p>Bootstrap</p>
          <img
            src={"/My-Portfolio/Tailwind-icon.svg"}
            alt="Tailwind Icon"
            className="w-6 h-6"
          />
          <p>Tailwind</p>
          <img src={"/Github-icon.svg"} alt="GitHub Icon" className="w-6 h-6" />
          <p>GitHub</p>
          <img
            src={"/My-Portfolio/Taypescript-icon.svg"}
            alt="TypeScript Icon"
            className="w-6 h-6"
          />
          <p>TypeScript</p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl md:text-2xl font-semibold mb-4">
          {t("leng2")}
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src={"/My-Portfolio/Nodejs-icon.svg"}
            alt="Nodejs Icon"
            className="w-6 h-6"
          />
          <p>Backend</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
