import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import About from "../pages/About";
import Loan from "../pages/Loan";
import Historia from "../pages/Historia";
import Institucion from "../pages/Institucion";
import Servicios from "../pages/Servicios";

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculadora-prestamos" element={<Loan />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/perfil-institucional" element={<Institucion />} />
      </Routes>
    </>
  );
};

export default Root;
