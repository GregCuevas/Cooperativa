import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Finaciamiento from "../assets/financiamiento.jpg";
import Tecno from "../assets/tecnologicos.jpg";
import Planta from "../assets/planta.jpg";
import Internet from "../assets/internet.jpg";
import Tienda from "../assets/tienda.jpg";
import Empredimiento from "../assets/empredimiento.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Finaciamientos = () => {
  const financingOptions = [
    {
      title: "Financiamiento de Productos Tecnológicos",
      image: Tecno,
      content: (
        <>
          <p>
            Este tipo de financiamiento está orientado a facilitar el acceso a
            dispositivos tecnológicos de última generación, tales como teléfonos
            inteligentes, tablets, laptops y otros equipos de la marca Xiaomi.
            Es ideal para socios que desean adquirir productos de alto valor
            para uso personal, educativo o profesional.
          </p>
          <h4 className="mt-4 font-semibold">Requisitos:</h4>
          <ul className="pl-5 mt-2 list-disc">
            <li>Ser socio activo de la cooperativa.</li>
            <li>
              Contar con un 20% del valor del producto acumulado en aportaciones
              dentro de la cooperativa.
            </li>
            <li>
              No se requiere historial crediticio ni garantías adicionales.
            </li>
            <li>
              Ser estudiante o tener dependientes estudiando para disfrutar de
              una tasa de interés del 0%. (OPCIONAL)
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Financiamiento para Desarrollo de Proyectos de Planta Externa",
      image: Planta,
      content: (
        <>
          <p>
            Destinado a empresas o emprendedores que desean impulsar el
            desarrollo de infraestructura de telecomunicaciones en sus
            comunidades, facilitando el acceso a servicios de conectividad. A
            través de este financiamiento, apoyamos la adquisición de equipos
            necesarios para la implementación de proyectos de planta externa.
          </p>
          <h4 className="mt-4 font-semibold">Requisitos:</h4>
          <ul className="pl-5 mt-2 list-disc">
            <li>Ser Socio Empresarial de la cooperativa</li>
            <li>Ser una empresa con alianza estratégica con Silkglobal.</li>
            <li>
              Contar con un proyecto aprobado para el desarrollo de planta
              externa.
            </li>
            <li>
              Tener un 50% del valor del proyecto en aportaciones acumuladas.
            </li>
            <li>Presentar plan de negocio o proyecto de implementación.</li>
          </ul>
        </>
      ),
    },
    {
      title:
        "Financiamiento de Expedientes para Revendedores de Internet o Concesionarias",
      image: Internet,
      content: (
        <>
          <p>
            Este financiamiento está enfocado en facilitar a nuestros socios
            empresariales la obtención del expediente administra, técnico y
            legal necesario para ser revendedores de internet o concesionarias
            autorizadas en su sector.
          </p>
          <h4 className="mt-4 font-semibold">Requisitos:</h4>
          <ul className="pl-5 mt-2 list-disc">
            <li>Ser socio empresarial de la cooperativa.</li>
            <li>Ser una empresa con alianza estratégica con Silkglobal.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Financiamiento para Franquicias y Tiendas MiTelecom",
      image: Tienda,
      content: (
        <>
          <p>
            Para aquellos interesados en convertirse en franquiciados de
            MiTelecom o abrir una tienda autorizada, nuestra cooperativa ofrece
            financiamiento para la adquisición de productos de muestra. A través
            de este plan, podrás financiar hasta tres veces el monto de tus
            aportaciones acumuladas, facilitando la apertura de tu tienda con
            los productos necesarios para atraer a los clientes.
          </p>
          <h4 className="mt-4 font-semibold">Requisitos:</h4>
          <ul className="pl-5 mt-2 list-disc">
            <li>Ser socio de la cooperativa.</li>
            <li>
              Contar con al menos el 33% del valor de los productos de muestra
              que desees financiar, acumulado en aportaciones.
            </li>
            <li>
              Presentar un plan de negocio para la tienda o franquicia
              MiTelecom.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Financiamiento para Emprendimientos Educativos",
      image: Empredimiento,
      content: (
        <p>
          Con el objetivo de cerrar la brecha digital y promover la inclusión
          tecnológica en el sector educativo, ofrecemos financiamiento a tasa 0%
          para la adquisición de equipos tecnológicos. Este plan está dirigido a
          estudiantes o socios con dependientes en instituciones educativas.
        </p>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <section className="">
        <div className="container px-4 mx-auto mt-4">
          <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] mb-8 sm:mb-12 overflow-hidden rounded-lg shadow-2xl">
            <img
              src={Finaciamiento}
              alt="Coopebred main image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-50 sm:p-6 lg:p-8">
              <h1 className="mb-2 text-3xl font-bold text-center sm:mb-4 sm:text-4xl lg:text-5xl animate-fade-in-down">
                Financiamiento
              </h1>
              <p className="max-w-xs mx-auto text-sm text-center sm:max-w-md lg:max-w-2xl sm:text-base lg:text-xl animate-fade-in-up">
                Ofrecemos diversas opciones de financiamiento diseñadas para
                cubrir las necesidades tanto personales como empresariales de
                nuestros socios. Gracias a nuestra alianza estratégica con
                MiTelecom y Silkglobal, los socios pueden acceder a
                financiamiento en productos tecnológicos y equipamiento
                especializado con condiciones exclusivas.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:px-12 lg:px-24">
            {financingOptions.map((option, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white border border-green-500 rounded-lg shadow-md"
              >
                <div className="p-4 text-white bg-green-600">
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4 prose max-w-none">{option.content}</div>
                  <div className="relative h-48 lg:h-80 overflow-hidden rounded-lg">
  <img
    src={option.image}
    alt={option.title}
    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
  />
</div> 
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-8 mb-8 ">
            <CardHeader>
              <CardTitle>Información Adicional</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Todos nuestros planes de financiamiento están diseñados con un
                enfoque accesible y flexible, con el fin de promover el
                desarrollo de nuestros socios. Al elegir cualquier de estas
                opciones, contribuyes no solo a tu crecimiento personal o
                empresarial, sino también al fortalecimiento de nuestra
                comunidad cooperativa.
              </p>
              <p className="mt-4">
                Para conocer más sobre cómo aplicar a estos financiamientos y
                obtener una asesoría personalizada, contáctanos a través de
                nuestros canales oficiales. ¡Estaremos encantados de apoyarte en
                cada paso hacia la materialización de tus metas!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Finaciamientos;
