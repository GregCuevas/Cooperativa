import React from "react";
import Home from "../assets/ground.jpg";
import { Link } from "react-router-dom"; // Adjust this path if necessary
import {
  ArrowRight,
  PiggyBank,
  GraduationCap,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Homepage() {
  return (
    <div className="relative w-full">
      {/* Image container */}
      <div className="w-full h-[50vh] md:h-[80vh]">
        <img
          src={Home}
          alt="Description of the image"
          className="object-cover w-full h-full "
        />
      </div>

      {/* Text container */}
      <div className="w-full h-full md:absolute md:inset-0 md:flex md:items-center md:pl-20 lg:pl-32">
        <div className="bg-[#f8961e] bg-opacity-90 text-white p-8 w-full md:w-[640px] lg:w-[495px] md:h-[95%] md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Coopebred transformando tu futuro
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            La combinación de tecnología, aprendizaje y financiamiento para que
            todas las familias puedan tener las mismas oportunidades.
          </p>
          <div className="flex items-center justify-center mb-8 space-x-6 md:justify-center lg:justify-start">
            <PiggyBank color="#09bc8a" strokeWidth={1.5} size={40} />
            <GraduationCap color="#09bc8a" strokeWidth={1.5} size={40} />
            <CircleDollarSign color="#09bc8a" strokeWidth={1.5} size={40} />
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 md:justify-start">
            <Button
              variant="default"
              className="px-6 py-3 font-semibold text-white transition-all bg-green-600 rounded-full shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-500"
            >
              <BadgeCheck className="w-5 h-5 mr-2" />
              Verificados
            </Button>
            <Link to="/perfil-institucional">
              <button
                type="button"
                aria-disabled="false"
                className="group flex items-center justify-center gap-2 whitespace-nowrap rounded-full py-3 px-6 text-base font-semibold text-[#09bc8a] transition-all hover:bg-green-50 hover:text-[#069770]  "
              >
                <span>Ver más</span>
                <ArrowRight className="w-5 h-5 stroke-[#09bc8a] group-hover:stroke-[#069770]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
