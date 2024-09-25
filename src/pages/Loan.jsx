import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Loan = () => {
  const [monto, setMonto] = useState("");
  const [meses, setMeses] = useState("");
  const [tasa, setTasa] = useState("");
  const [cuota, setCuota] = useState(0);

  const calcularCuota = (e) => {
    e.preventDefault();
    const montoVal = parseFloat(monto.replace(/,/g, "")); // Remueve las comas para calcular
    const mesesVal = parseInt(meses);
    const tasaVal = parseFloat(tasa);

    if (!montoVal || !mesesVal) {
      alert("Por favor, rellena todos los campos correctamente.");
      return;
    }

    let cuotaMensual;
    if (tasaVal === 0) {
      cuotaMensual = montoVal / mesesVal; // Si la tasa es 0, cuota es monto dividido por meses
    } else {
      const tasaMensual = tasaVal / 100 / 12;
      cuotaMensual =
        (tasaMensual * montoVal) / (1 - Math.pow(1 + tasaMensual, -mesesVal));
    }

    setCuota(cuotaMensual.toFixed(2));
  };

  // Función para formatear el monto con comas
  const formatMonto = (value) => {
    // Elimina todo lo que no sea número o punto decimal
    const cleanedValue = value.replace(/[^0-9.]/g, "");
    // Si el valor es un número válido, lo formatea
    if (!isNaN(cleanedValue) && cleanedValue !== "") {
      const formattedValue = Number(cleanedValue).toLocaleString("en-US");
      setMonto(formattedValue);
    } else {
      setMonto("");
    }
  };

  return (
    <>
      <Navbar />
      {/* Fondo y centración */}
      <div
        className="flex items-center justify-center min-h-screen mt-4 mb-4 bg-center bg-cover"
        style={{
          backgroundImage: `url('/path-to-your-image.jpg')`, // Reemplaza esta ruta con tu imagen de fondo relacionada con préstamos
        }}
      >
        <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-primary">
            Calculadora de Préstamos
          </h1>
          <p className="mb-6 text-gray-600">
            Queremos ayudarte a identificar ese pago mensual. Proporcionamos
            valores aproximados para diversos servicios y productos.
          </p>

          <form onSubmit={calcularCuota}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Seleccione el producto*
              </label>
              <select
                className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
                required
              >
                <option value="">Elegir uno</option>
                <option value="Préstamo de Consumo">Préstamo de Consumo</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">
                Monto solicitado (RD$)*
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
                placeholder="Máximo 1,000,000,000.00"
                value={monto}
                onChange={(e) => formatMonto(e.target.value)} // Llama a la función que formatea el valor con comas
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Meses*</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
                placeholder="Máximo 240 meses"
                value={meses}
                onChange={(e) => setMeses(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Tasa (%) *</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
                placeholder="0.00"
                step="0.01"
                value={tasa}
                onChange={(e) => setTasa(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="reset"
                className="px-6 py-2 font-bold text-white rounded-md"
                style={{ backgroundColor: "#f8961e" }} // Color personalizado para el botón Limpiar
                onClick={() => {
                  setMonto("");
                  setMeses("");
                  setTasa("");
                  setCuota(0);
                }}
              >
                Limpiar
              </button>
              <button
                type="submit"
                className="px-6 py-2 font-bold text-white rounded-md"
                style={{ backgroundColor: "#09bc8a" }} // Color personalizado para el botón Calcular
              >
                Calcular
              </button>
            </div>
          </form>

          <div className="p-4 mt-8 text-center rounded-md bg-gray-50">
            <h2 className="text-xl font-semibold text-primary">
              Cuota Mensual
            </h2>
            <p className="text-2xl font-bold">RD$ {cuota}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loan;
