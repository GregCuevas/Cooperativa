import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/home/Home";
import Loan from "../pages/servicios/Loan";
import Historia from "../pages/institucional/Historia";
import Institucion from "../pages/institucional/Institucion";
import Servicios from "../pages/informacion/Servicios";
import Finaciamiento from "../pages/servicios/Financiamiento";
import Individual from "../pages/socios/Individual";
import Empresa from "../pages/socios/Empresa";
import EducFinanciera from "../pages/informacion/EduFinanciera";
import Publicaciones from "../pages/informacion/Publicaciones";
import ImpactoNoticia from "../pages/noticias/ImpactoNoticia";
import CampoNoticia from "../pages/noticias/CampoNoticia";
import EducacionNoticia from "../pages/noticias/EducacionNoticia";
import TrabajoNoticia from "../pages/noticias/TrabajoNoticia";
import ConectividadNoticia from "../pages/noticias/ConectividadNoticia";
import Socios from "../pages/socios/Socios";
import Terminos from "../pages/institucional/Terminos";
import Politicas from "../pages/institucional/Politicas";
import NotFound from "../pages/informacion/NoEncontrado";
import Sucursales from "../pages/contacto/Sucursales";
import Contacto from "../pages/contacto/Contacto";
import Ahorro from "../pages/servicios/Ahorro";
import Aportes from "../pages/servicios/Aportes";
import Depositos from "../pages/servicios/Depositos";
import Tarifario from "../pages/informacion/Tarifario";
import Tienda from "../pages/tienda/Tienda";

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/calculadora-prestamos" element={<Loan />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/cuentas-de-ahorro" element={<Ahorro />} />
        <Route path="/perfil-institucional" element={<Institucion />} />
        <Route path="/productos-y-servicios" element={<Servicios />} />
        <Route path="/depositos-a-plazo" element={<Depositos />} />
        <Route path="/aportes" element={<Aportes />} />
        <Route path="/tarifario" element={<Tarifario />} />
        <Route path="/financiamiento" element={<Finaciamiento />} />
        <Route path="/socio-individual" element={<Individual />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos-de-servicio" element={<Terminos />} />
        <Route path="/politica-de-privacidad" element={<Politicas />} />
        <Route path="/sucursales" element={<Sucursales />} />
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
