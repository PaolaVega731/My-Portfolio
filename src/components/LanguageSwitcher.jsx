import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    
    console.log(language);
   
  };
  
  return (
    <div className="flex justify-center  flex-col   items-center ">
      <button
        onClick={() => changeLanguage("en")}
        className='text-lg px-2   transform hover:scale-150 transition-transform'
      >
        <img
          src={"/My-Portfolio/Flag_of_the_United_States.svg"}
          alt='Flag_of_the_United_States.svg'
          className='w-8 h-9'
        />
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className='text-lg px-2 transform hover:scale-150 transition-transform'
      >
        <img
          src={"/My-Portfolio/Flag_of_Spain.svg"}
          alt='Flag_of_Spain.svg'
          className='w-8 h-4'
        />
      </button>
    </div>
  );
}

export default LanguageSwitcher;
