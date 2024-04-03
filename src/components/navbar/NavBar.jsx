import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-gray-600 w-full py-6">
      <div className="w-full  p-4 px-8 flex items-center justify-between">
        <nav className="text-white ">
          <ul className="flex flex-row"> 
            <li className="mr-12 text-2xl hover:text-gray-200"> 
              <Link to="/" className="overflow-hidden whitespace-nowrap">{t("home")}</Link>
            </li>
            <li className="mr-12 text-2xl hover:text-gray-200">
              <Link to="/sobremi" className="overflow-hidden whitespace-nowrap">{t("sobremi")}</Link>
            </li>
            <li className="mr-12 text-2xl hover:text-gray-200">
              <Link to="/educacion" className="overflow-hidden whitespace-nowrap">{t("edu")}</Link>
            </li>
            <li className="mr-12 text-2xl hover:text-gray-200">
              <Link to="/skills" className="overflow-hidden whitespace-nowrap">{t("skills")}</Link>
            </li>
            <li className="mr-12 text-2xl hover:text-gray-200">
              <Link to="/contacto" className="overflow-hidden whitespace-nowrap" >{t("conta")}</Link>
            </li>
          </ul>
        </nav>
      <LanguageSwitcher />
      </div>
  
    </div>
  );
}

export default NavBar;
