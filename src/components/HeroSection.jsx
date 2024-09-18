import {
  ArrowRight,
  PiggyBank,
  GraduationCap,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react"; // Iconos de Lucide-react
import { Button } from "@/components/ui/button";
import home from "../assets/ground.jpg"; // Imagen del archivo de imágenes
import { Link } from "react-router-dom";

const Action = () => {
  return (
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
  );
};

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-between p-8 md:p-16 xl:px-32 2xl:px-48 md:flex-col lg:flex-row">
      <div className="text-center md:w-full lg:w-4/12 md:text-center lg:text-left">
        <h3 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-3xl">
          Construyendo tu futuro con Coopebred
        </h3>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-lg lg:text-xl">
          El futuro de las cooperativas está aquí para ti. Disfruta de una
          cooperativa que pone a sus socios primero. ¡Únete hoy y empieza a
          construir tu futuro con nosotros!
        </p>
        <div className="flex items-center justify-center mb-8 space-x-6 md:justify-center lg:justify-start">
          <PiggyBank color="#09bc8a" strokeWidth={1.5} size={40} />
          <GraduationCap color="#09bc8a" strokeWidth={1.5} size={40} />
          <CircleDollarSign color="#09bc8a" strokeWidth={1.5} size={40} />
        </div>

        <Action />
      </div>

      {/* Añadí 'md:mt-12' para dar espacio adicional en tablets */}
      <div className="flex justify-center mt-8 md:mt-7 md:w-full lg:w-6/12 ">
        <img
          src={home}
          alt="Imagen de la cooperativa"
          className="w-full max-w-[400px] mx-auto md:max-w-full rounded-lg shadow-xl transition-transform duration-300 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
