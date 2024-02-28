import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <div className="flex bg-gray-600">
      <div className="w-full md:w-1/6 bg-gray-200 p-4 px-12">
        <nav>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/sobremi">{t("sobremi")}</Link>
            </li>
            <li>
              <Link to="/portfolio">{t("porfile")}</Link>
            </li>
            <li>
              <Link to="/educacion">{t("edu")}</Link>
            </li>
            <li>
              <Link to="/skills">{t("skills")}</Link>
            </li>
            <li>
              <Link to="/contacto">{t("conta")}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center w-full md:w-5/6 pt-16 px-8 text-2xl sm:text-3xl md:text-5x1 animate-pulse">
        <h2>Web Developer</h2>
      </div>
      <LanguageSwitcher />
    </div>
  );
}
export default NavBar;
