import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import About from "../pages/About";
import Loan from "../pages/Loan";
const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculadora-prestamos" element={<Loan />} />
      </Routes>
    </>
  );
};

export default Root;
