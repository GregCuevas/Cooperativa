import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Loan from "../pages/Loan";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/calculadora" element={<Loan />} />
    </Routes>
  );
};

export default Root;
