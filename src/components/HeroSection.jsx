import React from "react";
import {
  ArrowRight,
  PiggyBank,
  GraduationCap,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react"; // Icon from Lucide-react
import { Button } from "@/components/ui/button";
import home from "../assets/ground.jpg"; // Image from images folder

const Action = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="default"
        className="px-4 py-2 font-semibold text-white transition bg-green-600 rounded-full shadow-md hover:bg-green-600"
      >
        <BadgeCheck className="w-5 h-5 mr-2" />
        Verificados
      </Button>
      <button
        type="button"
        aria-disabled="false"
        className="mt-1 group inline-flex items-center justify-center whitespace-nowrap rounded-full py-2 px-4 align-middle text-base font-semibold leading-none transition-none disabled:cursor-not-allowed stroke-[#09bc8a] text-[#0f0f0f] h-[48px] gap-1"
      >
        <span>Ver más</span>
        <ArrowRight className="w-5 h-5 stroke-[#09bc8a]" />
      </button>
    </div>
  );
};
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-between p-8 text-black md:flex-row md:p-16">
      <div className="md:w-5/12 lg:w-4/12">
        <h3 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
          Innovación con Coopebred
        </h3>
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

        <Action />
      </div>

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
