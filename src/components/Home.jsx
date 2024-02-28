import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
<<<<<<< HEAD
    <div className='min-h-screen w-full p-12 flex flex-col items-center pt-32'>
      <div className='flex flex-col items-center mb-4'>
        <img
          className='w-50 h-50 md:w-32 md:h-32 mr-4 rounded-lg'
          src='/My-Portfolio/Foto CV.jpg'
          alt='Foto Perfil'
        />
        <h1 className='text-xl lg:text-3xl 2xl:text-4xl'>{t("hello")}</h1>
        {/* Oculta el texto "data" en dispositivos móviles */}
        <h2 className='text-lg md:text-xl hidden lg:block'>{t("data")}</h2>
        {/* Muestra el texto "welcome" solo en dispositivos móviles */}
        <div className="hidden lg:block">
          <h2 className='p-6 text-lg md:text-xl lg:text-2xl 2xl:text-3xl'>{t("welcome")}</h2>
=======
    <div className=' min-h-screen w-full p-12 flex flex-col items-center'>
      <div className='flex flex-col items-center mb-4'>
        <img
          className='w-50 h-50 md:w-32 md:h-32 mr-4 rounded-lg '
          src='/My-Portfolio/Foto CV.jpg'
          alt='Foto Perfil'
        />
        <h1 className='text-3xl md:text-2xl'>{t("hello")}</h1>
        <h2 className='md:text-xl'>{t("data")}</h2>
        <div>
          <h2 className='p-6 text-2xl md:text-xl'>{t("welcome")}</h2>
>>>>>>> eaf5cbfe23435f97f0fa6bc3a0b3120f4ad9439c
        </div>
      </div>
      <a
        href='/My-Portfolio/CV Paola Vega.jpeg'
<<<<<<< HEAD
        className='bg-gray-600 text-white px-4 py-2 rounded'
        target='_blank'
        rel='noopener noreferrer'
      >
        <button className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl rounded-lg cursor-pointer hover:scale-110 hover:bg-gray-600 duration-300 ...'>
=======
        className='bg-cyan-600 text-white px-4 py-2 rounded'
        target='_blank'
      >
        <button className='rounded-lg cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...'>
>>>>>>> eaf5cbfe23435f97f0fa6bc3a0b3120f4ad9439c
          Mi CV
        </button>
      </a>
    </div>
  );
}

export default Home;
