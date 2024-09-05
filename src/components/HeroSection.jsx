import React from "react";
import {
  ArrowRight,
  PiggyBank,
  GraduationCap,
  CircleDollarSign,
} from "lucide-react"; // Icon from Lucide-react
import home from "../assets/hero-section.png"; // Image from images folder
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-between p-8 text-black md:flex-row md:p-16">
      {/* Left column */}
      <div className="md:w-5/12 lg:w-4/12 ">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
          Bienvenido a COOPEBRED
        </h1>
        <p className="mb-8 text-base text-gray-700 md:text-lg lg:text-xl">
          El futuro de las cooperativas está aquí para ti. Disfruta de una
          cooperativa que pone a sus socios primero. ¡Únete hoy y empieza a
          construir tu futuro con nosotros!
        </p>
        <div className="flex items-center justify-start mb-8 space-x-4">
          <PiggyBank color="#09bc8a" strokeWidth={1.5} size={40} />
          <GraduationCap color="#09bc8a" strokeWidth={1.5} size={40} />
          <CircleDollarSign color="#09bc8a" strokeWidth={1.5} size={40} />
        </div>
        <button className="flex items-center justify-center px-6 py-3 font-semibold text-white bg-[#09bc8a] transition-all rounded-full shadow-md hover:bg-[#09bc8a] hover:shadow-lg transform hover:scale-105 duration-300">
          Aprende Más <ArrowRight className="ml-2" />
        </button>
      </div>

      {/* Right column - Image */}
      <div className="mt-8 md:w-7/12 lg:w-6/12 md:mt-0">
        <img
          src={home}
          alt="Coop Image"
          className="w-full max-w-[500px] mx-auto md:max-w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
