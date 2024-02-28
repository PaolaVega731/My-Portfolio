import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center pt-4 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
       
        <div className="bg-[#FAF2D3] flex p-4 shadow-md rounded-md">
          <img
            src="/My-Portfolio/Les Vegetarianes.png"
            alt="Les Vegetarianes"
            className="w-40 h-40 object-contain rounded-l mr-8"
          />
          <div className="flex-grow">
            <h2 className="font-bold mb-2">{t("work1")}</h2>
            <p className="mb-2">{t("work11")}</p>
            <a
              href="https://github.com/PaolaVega731/LesVegetarianes"
              className="text-cyan-600 hover:underline block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work111")}
            </a>
            <a
              href="https://paolavega731.github.io/LesVegetarianes/index.html"
              className="text-cyan-600 hover:underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work1111")}
            </a>
          </div>
        </div>

        
        <div className="bg-[#FAF2D3] flex p-6 shadow-md rounded-md">
          <img
            src="/My-Portfolio/OrganiChic.png"
            alt="OrganiChic"
            className="w-40 h-40 object-contain rounded-l mr-4"
          />
          <div className="flex-grow">
            <h2 className="font-bold mb-2">{t("work2")}</h2>
            <p className="mb-2">{t("work22")}</p>
            <a
              href="https://github.com/PaolaVega731/Organichic"
              className="text-cyan-600 hover:underline block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work111")}
            </a>
            <a
              href="https://organichic-efzw.vercel.app/"
              className="text-cyan-600 hover:underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work1111")}
            </a>
          </div>
        </div>

        
        <div className="bg-[#FAF2D3] flex p-6 shadow-md rounded-md">
          <img
            src="/My-Portfolio/Perfil-foto.jpg"
            alt="Mi Portfolio"
            className="w-40 h-40 object-contain rounded-l mr-4"
          />
          <div className="flex-grow">
            <h2 className="font-bold mb-2">{t("work3")}</h2>
            <p className="mb-2">{t("work33")}</p>
            <a
              href="https://github.com/PaolaVega731/My-Portfolio"
              className="text-cyan-600 hover:underline block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work111")}
            </a>
            <a
              href="https://paolavega731.github.io/My-Portfolio/"
              className="text-cyan-600 hover:underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work1111")}
            </a>
          </div>
        </div>

        
        <div className="bg-[#FAF2D3] flex p-6 shadow-md rounded-md">
          <img
            src="/My-Portfolio/Kgc.jpeg"
            alt="KGC"
            className="w-40 h-40 object-contain rounded-l mr-4"
          />
          <div className="flex-grow">
            <h2 className="font-bold mb-2">{t("work4")}</h2>
            <p className="mb-2">{t("work33")}</p>
            <a
              href="https://github.com/PaolaVega731/Paginasgsi2"
              className="text-cyan-600 hover:underline block mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work111")}
            </a>
            <a
              href="https://sgsi-web2-dev-eastus.azurewebsites.net/"
              className="text-cyan-600 hover:underline block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("work1111")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
