import React from "react";
import telecom from "../assets/miTelecom.jpg"; // Imagen del archivo de imágenes
import silkglobal from "../assets/silkglobal.jpeg";
import mistore from "../assets/miStore.jpg"; // Imagen del archivo de imágenes

const LogoSection = () => {
  const logos = [
    { name: "miStore", url: telecom },
    { name: "miTelecom", url: silkglobal },
    { name: "silkglobal", url: mistore },
  ];

  return (
    <section className="flex justify-center w-full py-8 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-8 text-2xl font-extrabold text-center text-[#bfc0c0] ">
          "Colaboradores clave que fortalecen y enriquecen nuestra visión."
        </h2>
        <div className="grid items-center justify-center grid-cols-2 gap-8 sm:grid-cols-3">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`flex justify-center ${
                index === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className=" group">
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  width={240}
                  height={80}
                  className="max-w-[120px] md:max-w-[160px] lg:max-w-[200px] h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
