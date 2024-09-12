import React from "react";
import { Briefcase, User } from "lucide-react";
import Empresa from "../assets/empresa.jpg";
import Socio from "../assets/socio.png";

const BlogSocios = () => {
  return (
    <section className="flex flex-col w-full gap-12 px-3 py-12 m-auto 2xl:py-16 max-w-screen-2xl sm:px-8 lg:px-16 xl:px-32">
      <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-700 sm:text-4xl">
        Nuestros Socios
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-slate-600">
        Únete a la transformación digital y educativa en la República
        Dominicana.
      </p>

      <div className="grid w-full grid-flow-row gap-x-0 gap-y-12 md:justify-items-center md:gap-6 lg:grid-cols-2">
        <PostImageCard
          src={Socio}
          className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          title="Socio Individual"
          description="Brindamos soluciones a medida para estudiantes y familias en comunidades rurales y urbanas desfavorecidas."
          icon={<User size={24} strokeWidth={1.5} />}
        />
        <PostImageCard
          src={Empresa}
          className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          title="Socio Empresa"
          description="Coopeducate ofrece varias formas de asociación, cada una con compromisos y servicios adaptados a sus beneficios y condiciones."
          icon={<Briefcase size={24} strokeWidth={1.5} />}
        />
      </div>
    </section>
  );
};

const PostImageCard = ({ src, className, title, description, icon }) => {
  return (
    <div className="flex flex-col items-start max-w-2xl gap-6 overflow-hidden">
      {/* Imagen con hover */}
      <div className="flex items-center justify-center w-full overflow-hidden rounded-3xl bg-slate-100">
        <img src={src} alt={title} className={className} />
      </div>

      {/* Detalles del post */}
      <PostDetails />

      {/* Título e ícono */}
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-semibold text-slate-800">{title}</h3>
        {icon}
      </div>

      {/* Descripción */}
      <h4 className="text-md leading-tight text-slate-500 text-center sm:text-left max-w-[95%]">
        {description}
      </h4>
    </div>
  );
};

const PostDetails = () => {
  return (
    <p className="inline-flex items-center justify-start gap-2 text-slate-400">
      <span className="size-1.5 rounded-full bg-[#f8961e]" />
      <span className="text-xs leading-none">Negocios</span>
    </p>
  );
};

export default BlogSocios;
