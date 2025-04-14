import { ArrowRight, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const LoanOptions = () => {
  return (
    <div className="container max-w-md px-4 py-8 mx-auto text-center">
      <h1 className="mb-6 text-4xl font-bold text-gray-700">
        Préstamo de Consumo
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-gray-600">
        Realiza tus sueños con nuestros préstamos personales flexibles y
        competitivos. Compra los dispositivos tecnológicos que necesitas, mejora
        tu equipo o invierte en tu educación.
      </p>
      <Wallet className="w-20 h-20 mx-auto mb-6 text-[#f8961e]" />
      <Link to="/calculadora-prestamos">
        <button className="flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-white transition-colors bg-[#ffb41f] rounded-full hover:bg-[#ff9f1c] focus:ring-4 focus:ring-[#ffb703] focus:outline-none">
          Solicitar ahora
          <ArrowRight className="w-6 h-6 ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default LoanOptions;
