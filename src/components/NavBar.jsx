import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex bg-cyan-600">
      <div className="w-1/6 bg-gray-200 p-4 px-12">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobremi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/educacion">Educación</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className=" flex justify-center w-5/6 pt-12 text-5xl animate-pulse">
        <h2>Paola Vega</h2>
      </div>
    </div>
  );
}
export default NavBar;
