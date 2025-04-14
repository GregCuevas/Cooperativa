import React, { useState, useEffect } from "react";

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / ((duration * 1000) / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

const CoopStats = () => {
  return (
    <section className="bg-[#f8961e] text-white py-12">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold">
          ESTADÍSTICAS DE LA COOPERATIVA
        </h2>
        <h3 className="mt-2 text-lg">Descubre nuestro impacto en números</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold lg:text-6xl">
            <CountUp end={257} duration={7} />+
          </h1>
          <p className="mt-2 text-xl">Proyectos Financiados</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold lg:text-6xl">
            <CountUp end={200} duration={7} />+
          </h1>
          <p className="mt-2 text-xl">Asociados</p>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold lg:text-6xl">
            <CountUp end={96} duration={7} />%
          </h1>
          <p className="mt-2 text-xl">Satisfacción de los Clientes</p>
        </div>
      </div>
    </section>
  );
};

export default CoopStats;
