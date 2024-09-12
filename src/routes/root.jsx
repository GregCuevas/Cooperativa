import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import About from "../pages/About";
import Loan from "../pages/Loan";
import Institucion from "../pages/Institucion";
import Historia from "../pages/Historia";

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculadora-prestamos" element={<Loan />} />
        <Route path="/perfil-institucional" element={<Institucion />} />
        <Route path="/historia" element={<Historia />} />
      </Routes>
    </>
  );
};

export default Root;
