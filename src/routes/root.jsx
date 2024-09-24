import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import Loan from "../pages/Loan";
import Historia from "../pages/Historia";
import Institucion from "../pages/Institucion";
import Servicios from "../pages/Servicios";
import Educacion from "../pages/Eduacacion";
import Telecomunicaciones from "../pages/Telecomunicaciones";
import Finaciamiento from "../pages/Financiamiento";
import Individual from "../pages/Individual";
import Empresa from "../pages/Empresa";
const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora-prestamos" element={<Loan />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/financiamiento" element={<Finaciamiento />} />
        <Route path="/telecomunicaciones" element={<Telecomunicaciones />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/perfil-institucional" element={<Institucion />} />
        <Route path="/socio-individual" element={<Individual />} />
        <Route path="/socio-empresa" element={<Empresa />} />
      </Routes>
    </>
  );
};

export default Root;
