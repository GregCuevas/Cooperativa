import {
  Accordion as UIAccordion, // Renombramos la importación de Accordion
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionFAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 md:p-6 bg-white m-2">
      <h2 className="mb-4 text-2xl font-bold text-center md:text-3xl">
        Preguntas Frecuentes
      </h2>
      <p className="mb-6 text-base text-center text-gray-600 md:text-lg">
        ¿Tienes alguna duda sobre cómo pertenecer a nuestra cooperativa o cómo
        solicitar un préstamo?
      </p>

      <UIAccordion type="single" collapsible className="w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg">
            <span>¿Cómo puedo pertenecer a su Cooperativa?</span>
          </AccordionTrigger>
          <AccordionContent>
            Para pertenecer a nuestra cooperativa, debes cumplir con los
            requisitos de membresía, que generalmente incluyen ser mayor de edad
            y completar el formulario de inscripción. Puedes acercarte a
            cualquiera de nuestras oficinas para obtener más información.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg">
            <span>¿Cómo puedo solicitar un préstamo con ustedes?</span>
          </AccordionTrigger>
          <AccordionContent>
            Para solicitar un préstamo, debes ser miembro activo de la
            cooperativa. Luego, puedes presentar tu solicitud junto con los
            documentos requeridos, como identificación personal, comprobante de
            ingresos y otros según el tipo de préstamo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg">
            <span>¿Qué beneficios me dan?</span>
          </AccordionTrigger>
          <AccordionContent>
            Como miembro de nuestra cooperativa, puedes acceder a una variedad
            de beneficios, que incluyen tasas de interés competitivas en
            préstamos, dividendos por tu participación, asesoría financiera y
            más.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg">
            <span>¿Cuáles son los requisitos para tomar un préstamo?</span>
          </AccordionTrigger>
          <AccordionContent>
            Los requisitos para tomar un préstamo incluyen ser miembro activo de
            la cooperativa, presentar documentos que respalden tu capacidad de
            pago (como comprobantes de ingresos) y cumplir con los criterios
            establecidos según el tipo de préstamo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="hover:text-[#f8961e] font-bold flex justify-between items-center  text-xs sm:text-sm md:text-base lg:text-lg">
            <span>
              ¿Cuáles son los requisitos para tomar un préstamo de vehículo?
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Para un préstamo de vehículo, además de ser miembro activo,
            necesitas presentar una cotización del vehículo que deseas adquirir,
            comprobantes de ingresos, y cumplir con los requisitos específicos
            de financiamiento establecidos por la cooperativa.
          </AccordionContent>
        </AccordionItem>
      </UIAccordion>
    </div>
  );
};

export default AccordionFAQ;
