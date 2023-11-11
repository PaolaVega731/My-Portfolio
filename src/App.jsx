import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import SobreMi from "./components/SobreMi";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
