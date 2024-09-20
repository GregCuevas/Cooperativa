import React from "react";
import Unared from "../assets/unared.png";
import Silkglobal from "../assets/silkglobal.jpeg";
import Trofeo from "../assets/medalla.jpg";
import Coopebred from "../assets/logo.png";
const Timeline = () => {
  const timelineEvents = [
    {
      year: 2004,
      title: "Silkglobal Dominicana Fundada",
      description:
        "Inicio de operaciones en el sector de las telecomunicaciones y tecnología en la República Dominicana.",
      image: Silkglobal,
    },
    {
      year: 2018,
      title: "Logros de Silkglobal Dominicana",
      description:
        "Consolidación de operaciones y expansión de servicios en el mercado dominicano.",
      image: Trofeo,
    },
    {
      year: 2021,
      title: "Proyecto UNARED",
      description:
        "Iniciativa para ampliar la conectividad en áreas rurales de la República Dominicana.",
      image: Unared,
    },
    {
      year: 2021,
      title: "Desarrollo de Infraestructura en Fibra Óptica",
      description:
        "Inversión en infraestructura de fibra óptica para mejorar la conectividad en todo el país.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      year: 2021,
      title: "Acuerdo con Empresas Chinas",
      description:
        "Colaboración estratégica para el desarrollo de tecnologías avanzadas y expansión de la red.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      year: 2024,
      title: "Formación de COOPEDUCATE",
      description:
        "Creación de la cooperativa educativa para fomentar el desarrollo tecnológico y educativo en la República Dominicana.",
      image: Coopebred,
    },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="relative">
        <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-200 left-1/2"></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-8 h-8 bg-gray-800 rounded-full shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">
                {event.year}
              </h1>
            </div>
            <div className="order-1 w-5/12 px-6 py-4 bg-white rounded-lg shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                {event.title}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {event.description}
              </p>
              <img
                src={event.image}
                alt={event.title}
                width={95}
                height={95}
                className="mt-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Timeline;
