import { useTranslation } from "react-i18next";

function SobreMi() {
  const { t } = useTranslation();
  return (
    <div className='min-h-screen flex flex-col items-center justify-center mt-4 lg:mt-32'>
      <div className='h-full p-20 flex flex-col md:flex-row justify-center items-center'>
        <img
          className='w-90 h-80 md:w-64 md:h-64 mr-4'
          src='/My-Portfolio/Perfil-foto.jpg'
          alt={t("profilePicture")}
        />
        <div className='text-center md:text-left mt-4 md:mt-0'>
          <p className='text-lg lg:text-xl 2xl:text-2xl'>{t("my")},</p>

          <h1 className='mt-8 text-lg lg:text-xl 2xl:text-2xl'>
            {t("check")}
            <a
              href='https://www.linkedin.com/in/paola-vega-578093149/ '
              className='bg-gray-600 text-white px-4 py-2 rounded-full inline-block hover:scale-110 duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t("linkedin")}
            </a>
          </h1>
        </div>
      </div>
      <footer className="text-center pb-8 mt-auto">
        
      </footer>
    </div>
  );
}

export default SobreMi;
