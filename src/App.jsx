import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import HomeMobile from "./components/home/HomeMobile.jsx";
import Contacto from "./components/Contacto.jsx";
import Educacion from "./components/educacion/Educacion.jsx";
import EducacionMobile from "./components/educacion/EducacionMobile.jsx";
import Skills from "./components/Skills.jsx";
import SobreMi from "./components/SobreMi.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import NavBarMobile from "./components/navbar/NavBarMobile.jsx";
import Footer from "./components/Footer.jsx";
import { useMediaQuery } from "react-responsive"; 
import "./i18n.jsx";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); 

  return (
    <Router>
      {isMobile ? <NavBarMobile /> : <NavBar />} 
      <Routes>
        <Route path='*' element={isMobile ? <HomeMobile /> : <Home />} />
        <Route path='/educacion' element={isMobile ? <EducacionMobile /> : <Educacion />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
