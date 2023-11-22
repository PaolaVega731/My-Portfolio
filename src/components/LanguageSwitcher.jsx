import React from "react";
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
        className="text-lg px-2 py-1 transform hover:scale-150 transition-transform"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className="text-lg px-2 py-1 transform hover:scale-150 transition-transform"
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;
