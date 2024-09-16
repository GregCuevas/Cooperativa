import React from "react";

const TimelineItem = ({ year, title, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-between mb-12 md:flex-row">
      <div className="flex justify-center flex-1 md:justify-start">
        <div className="w-full md:w-2/3">
          <img
            src={imageUrl}
            alt={title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 mt-4 text-center md:text-left md:mt-0 md:pl-8">
        <h3 className="mb-2 text-xl font-semibold">{year}</h3>
        <h4 className="mb-2 text-lg font-medium">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HistoryPage = () => {
  const timelineData = [
    {
      year: "2006",
      title: "Fundación de Silkglobal Dominicana",
      description:
        "Inicia sus operaciones en el sector de las telecomunicaciones.",
      imageUrl: "Silkglobal-Logo-New-Render-removebg-preview.png",
    },
    {
      year: "2018",
      title: "Logros de Silkglobal Dominicana",
      description:
        "Obtención de concesiones, certificación como proveedor del Estado Dominicano, y suministro de servicios a centros educativos y tecnológicos.",
      imageUrl: "pexels-engin-akyurt-1552617.jpg",
    },
    {
      year: "2021",
      title: "Proyecto UNARED",
      description:
        "Silkglobal activa el estudio para abordar las necesidades de pequeños revendedores de servicios de Internet a nivel rural.",
      imageUrl: "unared.png",
    },
    {
      year: "2024",
      title: "Formación de COOPEDUCATE",
      description:
        "Surgió para cerrar la brecha digital en la República Dominicana, focalizándose en el sector educativo y áreas rurales.",
      imageUrl: "cropped-cropped-logo-small-1.png",
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <main className="container py-8 mx-auto">
        {/* Título principal */}
        <h1 className="mb-8 text-3xl font-semibold text-center">
          Transformación Digital y Educativa en RD
        </h1>

        {/* Timeline */}
        <section>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default HistoryPage;
