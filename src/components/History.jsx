import React from "react";
import Timeline from "../components/Timeline";
import Family from "../assets/family.jpg";
import Family2 from "../assets/family2.jpg";
import Family3 from "../assets/family3.jpg";
const Historia = () => {
  return (
    <>
      <div className="px-4 py-4 bg-white sm:px-4 lg:px-6">
        <h2 className="mt-4 text-3xl font-bold text-center text-gray-900">
          Transformación digital y educativa en RD
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3 lg:px-16">
          <div className="flex justify-center">
            <img
              className="object-cover rounded-lg shadow-lg "
              src={Family} // Aquí puedes usar tu propia URL de imagen
              alt="Grupo de personas trabajando"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="object-cover rounded-lg shadow-lg "
              src={Family3}
              alt="Grupo de personas trabajando"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="object-cover rounded-lg shadow-lg "
              src={Family2}
              alt="Grupo de personas trabajando"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-4 text-center text-gray-700">
          <p>
            Coopebred se constituye gracias a la decisión de experimentados
            empresarios con una amplia trayectoria en diversos campos y
            sectores, incluyendo telecomunicaciones, tecnología, y finanzas,
            entre otros. La República Dominicana se encuentra en una situación
            educativa precaria, por lo tanto, consideramos crucial enfocar
            nuestros esfuerzos en este sector. Dada la necesidad de importantes
            inversiones, vemos amplias oportunidades para lograr un desarrollo
            sostenible y beneficioso para los habitantes de las áreas rurales.
          </p>
          <p className="mt-4">
            Nuestro enfoque principal es crear condiciones favorables a través
            de la cooperativa. Los sectores que se pueden desarrollar a través
            de nuestra institución incluyen la venta de productos y servicios en
            línea, financiación para estos, gestión logística y programas
            educativos orientados hacia la generación de nuevos empleos en el
            ámbito tecnológico. Esto tendrá un impacto significativo en el
            ámbito social y en la generación de empleo a gran escala.
          </p>
        </div>
      </div>
      <Timeline />
    </>
  );
};
export default Historia;
