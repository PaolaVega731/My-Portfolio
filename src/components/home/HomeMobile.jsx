import { useTranslation } from "react-i18next";

function HomeMobile() {
    const { t } = useTranslation();

    return (
        <div className='min-h-screen flex flex-col items-center justify-center p-12 lg:mb-8 mb-8'>
            <div className='lg:w-1/2 lg:mr-8 mb-8 text-center lg:text-left'>
                <div className="flex items-center justify-center lg:justify-start">
                    <img
                        className='w-54 h-44 lg:w-72 lg:h-72 md:w-48 md:h-48 rounded-lg mb-4 lg:mb-0 lg:mr-8'
                        src='/My-Portfolio/Foto CV.jpg'
                        alt='Foto Perfil'
                    />
                    <div>
                        <h1 className='text-xl lg:text-3xl 2xl:text-4xl mb-2'>{t("hello")}</h1>
                        <h2 className='text-lg md:text-xl hidden lg:block mb-4'>{t("data")}</h2>
                        <div className="hidden lg:block">
                            <h2 className='p-6 text-lg md:text-xl lg:text-2xl 2xl:text-3xl'>{t("welcome")}</h2>
                        </div>
                        <a
                            href='/My-Portfolio/CV Paola Vega.jpeg'
                            className='bg-gray-600 text-white px-4 py-2 rounded inline-block'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <button className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl rounded-lg cursor-pointer hover:scale-110 hover:bg-gray-600 duration-300'>
                                Mi CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className=" text-center mb-8">
                <h2 className="text-2xl lg:text-4xl font-bold">{t("projectsTitle")}</h2>
            </div>
            <div className=" flex flex-col p-6 shadow-md rounded-md">
                        <img
                            src="/My-Portfolio/Kgc.jpeg"
                            alt="KGC"
                            className="w-40 h-40 object-contain rounded-l mr-4 self-center"
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
            <div className="min-h-screen flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
                    <div className=" flex flex-col p-4 shadow-md rounded-md">
                        <img
                            src="/My-Portfolio/Les Vegetarianes.png"
                            alt="Les Vegetarianes"
                            className="w-40 h-40 object-contain rounded-l mr-8 self-center"
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
                    <div className=" flex flex-col p-6 shadow-md rounded-md">
                        <img
                            src="/My-Portfolio/OrganiChic.png"
                            alt="OrganiChic"
                            className="w-40 h-40 object-contain rounded-l mr-4 self-center"
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
                    <div className="flex flex-col p-6 shadow-md rounded-md">
                        <img
                            src="/My-Portfolio/Perfil-foto.jpg"
                            alt="Mi Portfolio"
                            className="w-40 h-40 object-contain rounded-l mr-4 self-center"
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
                    
                </div>
            </div>
        </div>
    );
}

export default HomeMobile;
