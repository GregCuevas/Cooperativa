import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import Loan from "../pages/Loan";
import Historia from "../pages/Historia";
import Institucion from "../pages/Institucion";
import Servicios from "../pages/Servicios";
//import Educacion from "../pages/Eduacacion";
//import Telecomunicaciones from "../pages/Telecomunicaciones";
import Finaciamiento from "../pages/Financiamiento";
import Individual from "../pages/Individual";
import Empresa from "../pages/Empresa";
import EducFinanciera from "../pages/EduFinanciera";
import Publicaciones from "../pages/Publicaciones";
import ImpactoNoticia from "../pages/ImpactoNoticia";
import CampoNoticia from "../pages/CampoNoticia";
import EducacionNoticia from "../pages/EducacionNoticia";
import TrabajoNoticia from "../pages/TrabajoNoticia";
import ConectividadNoticia from "../pages/ConectividadNoticia";
import Socios from "../pages/Socios";
import Terminos from "../pages/Terminos";
import Politicas from "../pages/Politicas";
import NotFound from "../pages/NoEncontrado";
import Sucursales from "../pages/Sucursales";
import Contacto from "../pages/Contacto";
import Ahorro from "../pages/Ahorro";
import Aportes from "../pages/Aportes";
import Depositos from "../pages/Depositos";
import Tarifario from "../pages/Tarifario";
const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora-prestamos" element={<Loan />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/cuentas-de-ahorro" element={<Ahorro />} />
        <Route path="/perfil-institucional" element={<Institucion />} />
        <Route path="/productos-y-servicios/" element={<Servicios />} />
        <Route path="/depositos-a-plazo/" element={<Depositos />} />
        <Route path="/aportes/" element={<Aportes />} />
        <Route path="/tarifario/" element={<Tarifario />} />
        <Route path="/financiamiento/" element={<Finaciamiento />} />
        <Route path="/socio-individual" element={<Individual />} />
        <Route path="/contactanos/" element={<Contacto />} />
        <Route path="/terminos-de-servicio" element={<Terminos />} />
        <Route path="/politica-de-privacidad" element={<Politicas />} />

        <Route path="/sucursales/" element={<Sucursales />} />

        <Route path="/socio-empresa" element={<Empresa />} />
        <Route path="/prevencion/educacion" element={<EducFinanciera />} />
        <Route path="/publicaciones/noticias" element={<Publicaciones />} />
        <Route path="/socios" element={<Socios />} />
        <Route
          path="/publicaciones/el-impacto-transformador-de-las-cooperativas-en-la-republica-dominicana"
          element={<ImpactoNoticia />}
        />
        <Route
          path="/publicaciones/conectando-el-campo-la-imperiosa-necesidad-de-herramientas-de-telecomunicacion-en-las-areas-rurales-de-la-republica-dominicana"
          element={<CampoNoticia />}
        />
        <Route
          path="/publicaciones/revolucionando-la-educacion-el-impacto-de-las-telecomunicaciones-en-el-aprendizaje"
          element={<EducacionNoticia />}
        />
        <Route
          path="/publicaciones/el-auge-del-teletrabajo-transformando-la-forma-en-que-trabajamos"
          element={<TrabajoNoticia />}
        />
        <Route
          path="/publicaciones/conectividad-5g-un-requisito-de-la-unesco-para-la-educacion-en-la-era-digital-en-la-republica-dominicana"
          element={<ConectividadNoticia />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Root;
