import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher.jsx";
import { useTranslation } from "react-i18next";

function NavBarMobile() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex min-h-20 py-2 bg-gray-600">
      <div className="flex justify-between p-4">
        
        <button className="text-white text-xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className="text-white ">
          <ul className="px-4">
            <li onClick={closeMenu}>
              <Link to="/">{t("home")}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/sobremi">{t("sobremi")}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/educacion">{t("edu")}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/skills">{t("skills")}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/contacto">{t("conta")}</Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="ml-auto mr-4"> 
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default NavBarMobile;