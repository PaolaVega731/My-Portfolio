import { useTranslation } from "react-i18next";

function SobreMi() {
  const { t } = useTranslation();
  return (
    <div className='h-full p-20 flex flex-col md:flex-row justify-center items-center'>
      <img
        className='w-90 h-80 md:w-64 md:h-64 mr-4'
        src='/My-Portfolio/Perfil-foto.jpg'
        alt={t("profilePicture")}
      />
      <div className='text-center md:text-left mt-4 md:mt-0'>
        <p>{t("my")},</p>

        <h1 className='mt-8 text-lg'>
          {t("check")}
          <a
            href='https://www.linkedin.com/in/paola-vega-578093149/ '
            className='bg-cyan-600 text-white px-1 py-0 rounded'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...'>
              {t("linkedin")}
            </button>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default SobreMi;
