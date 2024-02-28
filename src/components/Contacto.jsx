import { useTranslation } from "react-i18next";

function Contacto() {
  const { t } = useTranslation();

  return (
<<<<<<< HEAD
    <div className='min-h-screen text-center pt-16 lg:pt-32'>
      <div className='flex justify-center pb-10'>
        <h1 className='text-4xl lg:text-5xl 2xl:text-6xl pt-10'>{t("contact")}</h1>
      </div>
      <p className='pb-8 text-lg lg:text-xl 2xl:text-2xl'>
        <strong>E-mail:</strong>
        <a
          href='mailto:paolavegadev@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
           paolavegadev@gmail.com
        </a>
      </p>
      <p className='pb-8 text-lg lg:text-xl 2xl:text-2xl'>
        <strong>Cel.:</strong> (+598) 097192004
      </p>
      <p className='pb-8 text-lg lg:text-xl 2xl:text-2xl'>
        <strong className='pr-2'>WhatsApp:</strong>
        <a
          href='https://wa.me/+59897192004?text=Hola%20Paola%2C%20quiero%20contactarte'
          className='bg-gray-600 text-white px-4 py-2 rounded-full inline-block hover:scale-110 duration-300'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t("whatsapp")}
        </a>
      </p>
      <p className='text-lg lg:text-xl 2xl:text-2xl'>
        <strong className='pr-2'>Linkedin:</strong>
        <a
          href='https://www.linkedin.com/in/paola-vega-578093149/'
          className='bg-gray-600 text-white px-4 py-2 rounded-full inline-block hover:scale-110 duration-300'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t("linkedin")}
=======
    <div className=' min-h-screen text-center'>
      <div className='flex justify-center pb-10'>
        <h1 className='text-4xl pt-10'> {t("contact")}</h1>
      </div>
      <p className='pb-8'>
        <strong>E-mail:</strong>
        <a
          href='mailto: paolavegadev@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          paolavegadev@gmail.com
        </a>
      </p>
      <p className='pb-8'>
        <strong>Cell.:</strong> (+598)097192004
      </p>
      <p className='pb-8'>
        <strong className='pr-2'>WhatsApp:</strong>
        <a
          href='https://wa.me/+59897192004?text=Hola%20Paola%2C%20quiero%20contactarte'
          className='bg-cyan-600 text-white px-0 py-0 rounded'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className=' w-16 rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...'>
            wasap
          </button>
        </a>
      </p>
      <p>
        <strong className='pr-2'>Linkedin:</strong>
        <a
          href='https://www.linkedin.com/in/paola-vega-578093149/'
          className='bg-cyan-600 text-white px-1 py-0 rounded'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='rounded-xs cursor-pointer hover:scale-110 hover:bg-cyan-600 duration-300 ...'>
            {t("linkedin")}
          </button>
>>>>>>> eaf5cbfe23435f97f0fa6bc3a0b3120f4ad9439c
        </a>
      </p>
    </div>
  );
}

export default Contacto;
