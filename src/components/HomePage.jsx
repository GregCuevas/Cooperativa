import React from "react";
import Home from "../assets/familias.jpg";
import { Link } from "react-router-dom"; // Adjust this path if necessary
import {
  ArrowRight,
  PiggyBank,
  GraduationCap,
  CircleDollarSign,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Homepage() {
  return (
    <div className="relative w-full mt-4 lg:mt-0">
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
        <div className="bg-[#09a129] md:bg-[#09a129] rounded-md md:bg-opacity-50 text-white p-8 w-full md:w-[640px] lg:w-[495px] md:h-[95%] md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            COOPEBRED
          </h1>
          <p className="mt-4 mb-8 text-lg md:text-xl">
            La combinación de tecnología, aprendizaje y financiamiento para que
            todas las familias puedan tener las mismas oportunidades.
          </p>
          <div className="flex items-center justify-center space-x-6 md:justify-center lg:justify-start">
            <PiggyBank
              className="text-[#007200] lg:text-[#2bc016]"
              strokeWidth={1.5}
              size={40}
            />
            <GraduationCap
              className="text-[#007200] lg:text-[#2bc016]"
              strokeWidth={1.5}
              size={40}
            />
            <CircleDollarSign
              className="text-[#007200] lg:text-[#2bc016]"
              strokeWidth={1.5}
              size={40}
            />
          </div>
          <div className="flex items-center justify-center gap-4 mt-7 md:justify-start">
            <Link to="/socios">
              <Button
                variant="default"
                className="px-6 py-3 font-semibold text-white transition-all bg-green-600 rounded-full shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-500"
              >
                Inscribirte
                <LogIn className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/perfil-institucional">
              <Button
                type="button"
                aria-disabled="false"
                className="group flex items-center justify-center gap-2 whitespace-nowrap rounded-full py-3 px-6 text-base font-semibold bg-green-50 text-[#09bc8a] transition-all hover:bg-green-600 hover:text-[#fff]  "
              >
                <span>Ver más</span>
                <ArrowRight className="w-5 h-5 stroke-[#09bc8a] group-hover:stroke-[#fff]" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
