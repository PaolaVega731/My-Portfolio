import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-gray-600 w-full py-12">
      <div className="w-full md:w-1/4 p-4 px-8 flex items-center">
        <nav>
          <ul className="flex flex-row"> 
            <li className="mr-12 text-2xl"> 
              <Link to="/" className="overflow-hidden whitespace-nowrap">{t("home")}</Link>
            </li>
            <li className="mr-12 text-2xl">
              <Link to="/sobremi" className="overflow-hidden whitespace-nowrap">{t("sobremi")}</Link>
            </li>
            <li className="mr-12 text-2xl">
              <Link to="/educacion" className="overflow-hidden whitespace-nowrap">{t("edu")}</Link>
            </li>
            <li className="mr-12 text-2xl">
              <Link to="/skills" className="overflow-hidden whitespace-nowrap">{t("skills")}</Link>
            </li>
            <li className="mr-12 text-2xl">
              <Link to="/contacto" className="overflow-hidden whitespace-nowrap" >{t("conta")}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full md:w-3/4 p-4 flex items-center justify-center">
        <h2 className="text-2xl lg:text-5xl sm:text-3xl md:text-5xl animate-pulse">My Portfolio</h2>
      </div>
      <LanguageSwitcher />
    </div>
  );
}

export default NavBar;
