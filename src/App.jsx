import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import SobreMi from "./components/SobreMi";
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
        <Route path='*' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/educacion' element={<Educacion />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
