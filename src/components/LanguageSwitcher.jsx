import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("en")}
<<<<<<< HEAD
        className='text-lg px-2 py-2 transform hover:scale-150 transition-transform'
=======
        className='text-lg px-2 py-1 transform hover:scale-150 transition-transform'
>>>>>>> eaf5cbfe23435f97f0fa6bc3a0b3120f4ad9439c
      >
        <img
          src={"/My-Portfolio/Flag_of_the_United_States.svg"}
          alt='Flag_of_the_United_States.svg'
<<<<<<< HEAD
          className='w-8 h-4'
=======
          className='w-8 h-9'
>>>>>>> eaf5cbfe23435f97f0fa6bc3a0b3120f4ad9439c
        />
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className='text-lg px-2 py-1 transform hover:scale-150 transition-transform'
      >
        <img
          src={"/My-Portfolio/Flag_of_Spain.svg"}
          alt='Flag_of_Spain.svg'
<<<<<<< HEAD
          className='w-8 h-4'
=======
          className='w-8 h-5'
>>>>>>> eaf5cbfe23435f97f0fa6bc3a0b3120f4ad9439c
        />
      </button>
    </div>
  );
}

export default LanguageSwitcher;
