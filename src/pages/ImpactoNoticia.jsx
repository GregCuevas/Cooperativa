import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Impacto from "../assets/impacto.jpg";

const ImpactoNoticia = () => {
  return (
    <>
      <Navbar />
      <div className="mt-4 mb-4">
        {/* Imagen superior */}
        <div className="relative">
          <img
            src={Impacto}
            alt="Impacto de las Cooperativas"
            className="object-cover w-full h-64"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <h1 className="max-w-2xl text-2xl font-bold text-center text-white lg:text-4xl">
              El Impacto Transformador de las Cooperativas en la República
              Dominicana
            </h1>
          </div>
        </div>

        {/* Contenido del artículo */}
        <div className="p-6 mx-auto mt-6 bg-white rounded-lg shadow-lg max-w-7xl">
          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            Las cooperativas, como forma de organización económica y social, han
            dejado una huella profunda en la República Dominicana, marcando
            hitos significativos en diversas esferas. Este artículo explora cómo
            las cooperativas han influido positivamente en la agricultura, el
            sector financiero, el empleo y el desarrollo comunitario, así como
            en la promoción de prácticas comerciales sostenibles.
          </p>

          <section className="mb-8">
            <h2 className="mb-3 text-3xl font-semibold text-green-500">
              1. Fortalecimiento en la Agricultura
            </h2>
            <p className="leading-relaxed text-gray-600">
              Las cooperativas agrícolas han revolucionado el panorama agrario
              dominicano al unir a agricultores en un frente común. Este enfoque
              colaborativo ha permitido el acceso compartido a recursos
              esenciales, desde maquinaria hasta insumos. La comercialización
              conjunta de productos ha mejorado la posición de los agricultores
              en la cadena de suministro, brindándoles una voz colectiva en las
              negociaciones y decisiones que afectan su sustento.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="mb-3 text-3xl font-semibold text-green-500">
              2. Inclusión Financiera a través de Cooperativas de Ahorro y
              Crédito
            </h2>
            <p className="leading-relaxed text-gray-600">
              El sector financiero también ha experimentado una transformación
              gracias a las cooperativas de ahorro y crédito. Estas
              instituciones han extendido los servicios financieros a áreas
              donde los bancos tradicionales podrían no haber llegado. Además de
              ofrecer tasas de interés favorables, las cooperativas de crédito
              desempeñan un papel crucial en la educación financiera,
              empoderando a los miembros para tomar decisiones informadas sobre
              sus recursos.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="mb-3 text-3xl font-semibold text-green-500">
              3. Generación de Empleo y Desarrollo Comunitario
            </h2>
            <p className="leading-relaxed text-gray-600">
              Las cooperativas operan en una variedad de sectores, desde la
              pesca hasta el turismo, generando empleo local y estimulando el
              crecimiento económico a nivel comunitario. Además de proporcionar
              oportunidades de empleo, muchas cooperativas reinvierten sus
              beneficios en proyectos sociales, como la construcción de
              infraestructuras locales, la educación y la atención médica,
              contribuyendo así al desarrollo integral de las comunidades.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="mb-3 text-3xl font-semibold text-green-500">
              4. Enfoque Sostenible y Responsable
            </h2>
            <p className="leading-relaxed text-gray-600">
              La gestión democrática característica de las cooperativas impulsa
              la adopción de prácticas comerciales responsables y sostenibles.
              Al priorizar decisiones colectivas, estas organizaciones están
              posicionadas naturalmente para considerar los impactos a largo
              plazo en términos de sostenibilidad ambiental y social.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="mb-3 text-3xl font-semibold text-green-500">
              Desafíos y Oportunidades Futuras
            </h2>
            <p className="leading-relaxed text-gray-600">
              A pesar de estos éxitos, las cooperativas en la República
              Dominicana enfrentan desafíos, como la necesidad de fortalecer la
              educación cooperativa, mejorar la infraestructura de apoyo y
              abordar cuestiones regulatorias. Sin embargo, el compromiso
              continuo con estos principios cooperativos resalta su importancia
              como catalizadores del desarrollo sostenible en el país.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="mb-3 text-3xl font-semibold text-green-500">
              Conclusión
            </h2>
            <p className="leading-relaxed text-gray-600">
              En conclusión, el impacto de las cooperativas en la República
              Dominicana es profundo y multifacético. Desde impulsar la
              eficiencia en la agricultura hasta fomentar la inclusión
              financiera y el desarrollo comunitario, estas organizaciones
              demuestran su capacidad única para ser agentes de cambio positivo.
              A medida que enfrentan desafíos y aprovechan oportunidades
              futuras, las cooperativas continúan desempeñando un papel vital en
              la construcción de un futuro más equitativo y sostenible para la
              República Dominicana.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ImpactoNoticia;
