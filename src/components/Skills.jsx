import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <div className="h-[80vh] flex">
      <div className="flex flex-col items-center justify-center mx-auto max-w-2xl gap-4 px-1">
        <div className="flex flex-col items-center md:items-start ">
          <h1 className="flex flex-col items-center text-center text-3xl font-semibold mb-4 hover:scale-110 2xl:text-5xl">
            {t("leng")}
          </h1>
          <div className="flex flex-wrap gap-4 items-center 2xl:text-3xl w-full justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/Html5-icon.svg"}
                alt="HTML Icon"
                className="w-6 h-6"
              />
              <p>HTML</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/Css-icon.svg"}
                alt="Css Icon"
                className="w-6 h-6"
              />
              <p>CSS</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/JavaScript-icon.svg"}
                alt="JavaScript Icon"
                className="w-6 h-6"
              />
              <p className="">JavaScript Vanilla</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="flex flex-col items-center text-3xl md:text-2xl font-semibold mb-4 hover:scale-110 2xl:text-5xl">
            {t("leng1")}
          </h1>
          <div className="flex flex-wrap gap-4 items-center justify-center 2xl:text-3xl mt-2">
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/React-icon.svg"}
                alt="React Icon"
                className="w-6 h-6"
              />
              <p>React Js</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/Bootstrap-icon.svg"}
                alt="Bootstrap Icon"
                className="w-6 h-6"
              />
              <p>Bootstrap</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/Tailwind-icon.svg"}
                alt="Tailwind Icon"
                className="w-6 h-6"
              />
              <p>Tailwind</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/Github-icon.svg"}
                alt="GitHub Icon"
                className="w-6 h-6"
              />
              <p>GitHub</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/Taypescript-icon.svg"}
                alt="TypeScript Icon"
                className="w-6 h-6"
              />
              <p>TypeScript</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-3xl md:text-2xl font-semibold mb-4 hover:scale-110 2xl:text-5xl">
            {t("leng2")}
          </h1>
          <div className="flex flex-wrap gap-4 items-center justify-center 2xl:text-3xl mt-2">
            <div className="flex items-center gap-2 md:gap-4">
              <img
                src={"/My-Portfolio/Nodejs-icon.svg"}
                alt="Nodejs Icon"
                className="w-6 h-6"
              />
              <p>Backend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;