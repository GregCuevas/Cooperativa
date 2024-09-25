import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import News from "../assets/publicaciones.jpg";
import Impacto from "../assets/impacto.jpg";
import Campo from "../assets/campo.jpg";
import Aprendizaje from "../assets/aprendizaje.jpg";
import Trabajo from "../assets/trabajo.jpg";
import Wifi from "../assets/wifi.jpg";
const newsData = [
  {
    title:
      "El Impacto Transformador de las Cooperativas en la República Dominicana",
    image: Impacto,
    category: "NOTICIAS",
    link: "/publicaciones/el-impacto-transformador-de-las-cooperativas-en-la-republica-dominicana",
  },
  {
    title:
      "Conectando el Campo: La Imperiosa Necesidad de Herramientas de Telecomunicación en las Áreas Rurales de la República Dominicana",
    image: Campo,
    category: "NOTICIAS",
    link: "/publicaciones/conectando-el-campo-la-imperiosa-necesidad-de-herramientas-de-telecomunicacion-en-las-areas-rurales-de-la-republica-dominicana",
  },
  {
    title:
      "Revolucionando la Educación: El Impacto de las Telecomunicaciones en el Aprendizaje",
    image: Aprendizaje,
    category: "NOTICIAS",
    link: "/publicaciones/revolucionando-la-educacion-el-impacto-de-las-telecomunicaciones-en-el-aprendizaje",
  },
  {
    title: "El Auge del Teletrabajo: Transformando la Forma en que Trabajamos",
    image: Trabajo,
    category: "NOTICIAS",
    link: "/publicaciones/el-auge-del-teletrabajo-transformando-la-forma-en-que-trabajamos",
  },
  {
    title:
      "Conectividad 5G: Un Requisito de la UNESCO para la Educación en la Era Digital en la República Dominicana",
    image: Wifi,
    category: "NOTICIAS",
    link: "/publicaciones/conectividad-5g-un-requisito-de-la-unesco-para-la-educacion-en-la-era-digital-en-la-republica-dominicana",
  },
];
const Publicaciones = () => {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto mt-4">
        {/* Main Image with Overlaid Text */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-12 overflow-hidden rounded-lg shadow-md">
          <img
            src={News}
            alt="COOPEBRED main image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
            <h1 className="mb-4 text-4xl font-bold text-center sm:text-5xl lg:text-6xl animate-fade-in-down">
              Noticias y novedades
            </h1>
            <p className="max-w-xl mx-auto text-lg text-center sm:max-w-2xl lg:max-w-3xl sm:text-xl lg:text-2xl animate-fade-in-up">
              Te mantenemos informado sobre nuestro progreso, compartiendo cada
              avance en nuestra misión de fortalecer la comunidad y ofrecer
              educación financiera.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-2 max-w-7xl">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-md shadow-md"
            >
              <img
                src={news.image}
                alt={news.title}
                className="object-cover w-full h-48 lg:h-64"
              />
              {/* Categoría en la parte superior derecha */}
              <div className="absolute px-3 py-1 text-sm text-white bg-green-500 rounded-sm top-2 right-2">
                {news.category}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{news.title}</h2>
                <Link
                  to={news.link}
                  className="flex items-center mt-4 text-green-500"
                >
                  LEER MÁS
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publicaciones;
