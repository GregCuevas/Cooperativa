import {
  Accordion as UIAccordion, // Renombramos la importación de Accordion
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const AccordionFAQ = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si el hash en la URL es #preguntas-frecuentes
    if (location.hash === "#preguntas-frecuentes") {
      const element = document.getElementById("preguntas-frecuentes");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div
      id="preguntas-frecuentes"
      className=" flex flex-col items-center justify-center min-h-[60vh] p-4 md:p-6 bg-white m-2"
    >
      <h2 className="mb-4 text-3xl font-bold text-center md:text-3xl">
        Preguntas Frecuentes
      </h2>
      <p className="mb-6 text-base text-center text-gray-600 md:text-lg">
        ¿Tienes alguna duda sobre cómo pertenecer a nuestra cooperativa o cómo
        solicitar un préstamo?
      </p>

      <UIAccordion type="single" collapsible className="w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-sm sm:text-sm md:text-base lg:text-lg">
            <span>¿Qué es Coopebred?</span>
          </AccordionTrigger>
          <AccordionContent>
            Es una iniciativa cooperativa diseñada para reducir la brecha
            digital en la República Dominicana. Se centra en ofrecer servicios
            de telecomunicaciones asequibles y soluciones educativas integrales
            a comunidades desatendidas, especialmente en áreas rurales.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-sm sm:text-sm md:text-base lg:text-lg">
            <span>¿Qué servicios ofrece Coopebred?</span>
          </AccordionTrigger>
          <AccordionContent>
            Ofrecemos servicios de telecomunicaciones, acceso a voz, datos y
            video, productos tecnológicos Xiaomi, y servicios educativos en
            colaboración con la Escuela MAVIR. También brinda contenido de
            entretenimiento, incluyendo televisión, series, películas y
            contenido educativo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-sm sm:text-sm md:text-base lg:text-lg">
            <span>¿Cómo puedo ser miembro de Coopebred?</span>
          </AccordionTrigger>
          <AccordionContent>
            Para ser miembro de Coopebred, se puede elegir entre distintos
            paquetes de membresía que ofrecen beneficios variados, como acceso a
            servicios, productos y oportunidades financieras dentro de la
            cooperativa.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center  text-sm sm:text-sm md:text-base lg:text-lg">
            <span>¿Cómo contribuye Coopebred a la educación?</span>
          </AccordionTrigger>
          <AccordionContent>
            Coopebred ofrece educación en línea para niveles primarios y
            secundarios, con enfoque en inglés, y acceso a contenido educativo a
            través de diversas plataformas para sus miembros.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-sm sm:text-sm md:text-base lg:text-lg">
            <span>¿Cuáles son los requisitos para tomar un préstamo?</span>
          </AccordionTrigger>
          <AccordionContent>
            Los requisitos para tomar un préstamo incluyen ser miembro activo de
            la cooperativa, presentar documentos que respalden tu capacidad de
            pago (como comprobantes de ingresos) y cumplir con los criterios
            establecidos según el tipo de préstamo.
          </AccordionContent>
        </AccordionItem>
      </UIAccordion>
    </div>
  );
};

export default AccordionFAQ;
