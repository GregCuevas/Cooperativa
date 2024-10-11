import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const FormIndividual = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    telefono: "",
    email: "",
    direccion1: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    pais: "",
    afiliacion: "",
    comoSupiste: "",
    terminos: false,
  });

  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      "nombres",
      "cedula",
      "telefono",
      "email",
      "direccion1",
      "pais",
      "afiliacion",
      "terminos",
    ];
    return requiredFields.every((field) => formData[field]);
  };

  const API_URL =
    "https://backend-api-service.up.railway.app/api/send-individual";

  const SUPABASE_API_URL =
    "https://backend-socios-production.up.railway.app/registrar-socio-individual";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitAttempted(true);

    if (!validateForm()) {
      toast.error("Por favor, completa todos los campos requeridos.");
      return;
    }

    try {
      // Crear un FormData para enviar el formulario
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      // Incluir la foto de la cédula, si se ha seleccionado
      const cedulaFoto = document.getElementById("cedulaFoto").files[0];
      if (cedulaFoto) {
        formDataToSend.append("cedulaFoto", cedulaFoto);
      }
      // 1. Enviar la información a Supabase (Backend)
      const supabaseResponse = await fetch(SUPABASE_API_URL, {
        method: "POST",
        body: formDataToSend, // No se necesita JSON.stringify para FormData
      });

      if (!supabaseResponse.ok) {
        throw new Error("Error al conectar con la base de datos");
      }

      const supabaseResult = await supabaseResponse.json();

      // Verificar la respuesta de Supabase
      if (supabaseResponse.ok) {
        toast.success("Datos guardados exitosamente en Supabase.");
      } else {
        toast.error(
          supabaseResult.message || "Error al guardar los datos en Supabase."
        );
        return;
      }

      // Enviar el formulario usando fetch con FormData
      const response = await fetch(API_URL, {
        method: "POST",
        body: formDataToSend, // No se necesita JSON.stringify para FormData
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const result = await response.json();

      if (response.ok) {
        toast.success("Formulario enviado exitosamente");
      } else {
        toast.error(result.message || "Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Hubo un problema al enviar el formulario");
    }
  };
  return (
    <>
      <Toaster />
      <div className="max-w-2xl p-6 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold">Hazte Socio</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Llenar este formulario es el primer paso para acceder a todos los
          beneficios de ser socio. Luego de que lo envíes, nuestro personal de
          bienvenida te contactará e indicará el proceso a seguir.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid max-w-4xl grid-cols-1 gap-6 p-6 mx-auto md:grid-cols-2"
      >
        {/* Nombres */}
        <div className="mb-6">
          <label
            htmlFor="nombres"
            className="block mb-2 font-medium text-gray-700"
          >
            Nombres
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="Juan Alfredo"
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.nombres
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.nombres
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          />
        </div>

        {/* Apellidos */}
        <div className="mb-6">
          <label
            htmlFor="apellidos"
            className="block mb-2 font-medium text-gray-700"
          >
            Apellidos
          </label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Pérez Báez"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Cédula */}
        <div className="mb-6">
          <label
            htmlFor="cedula"
            className="block mb-2 font-medium text-gray-700"
          >
            Cédula
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            placeholder="XXX-XXXXXXX-X"
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.cedula
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.cedula
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          />
        </div>

        {/* Foto de la Cédula */}
        <div className="mb-6 md:col-span-2">
          <label
            htmlFor="cedulaFoto"
            className="block mb-2 font-medium text-gray-700"
          >
            Subir Foto de la Cédula
            <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="cedulaFoto"
            name="cedulaFoto"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Teléfono */}
        <div className="mb-6">
          <label
            htmlFor="telefono"
            className="block mb-2 font-medium text-gray-700"
          >
            Teléfono de casa o celular
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="809-123-4567"
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.telefono
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.telefono
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-700"
          >
            Email
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@correo.com"
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.email
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          />
        </div>

        {/* Dirección */}
        <div className="mb-6 md:col-span-2">
          <label
            htmlFor="direccion1"
            className="block mb-2 font-medium text-gray-700"
          >
            Dirección
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="direccion1"
            name="direccion1"
            value={formData.direccion1}
            onChange={handleChange}
            placeholder="Calle"
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.direccion1
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.direccion1
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          />
          <input
            type="text"
            id="direccion2"
            name="direccion2"
            value={formData.direccion2}
            onChange={handleChange}
            placeholder="Más detalles sobre la calle"
            className="w-full p-3 mt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Ciudad */}
        <div className="mb-6">
          <label
            htmlFor="ciudad"
            className="block mb-2 font-medium text-gray-700"
          >
            Ciudad
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Estado / Provincia */}
        <div className="mb-6">
          <label
            htmlFor="estado"
            className="block mb-2 font-medium text-gray-700"
          >
            Estado / Provincia / Región
          </label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* País */}
        <div className="mb-6">
          <label
            htmlFor="pais"
            className="block mb-2 font-medium text-gray-700"
          >
            País
          </label>
          <select
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.pais
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.pais
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          >
            <option value="">Selecciona un país</option>
            <option value="Dominican Republic">República Dominicana</option>
            <option value="United States">Estados Unidos</option>
            <option value="Mexico">México</option>
            {/* Agrega más opciones aquí */}
          </select>
        </div>

        {/* Afiliación */}
        <div className="mb-6 md:col-span-2">
          <label
            htmlFor="afiliacion"
            className="block mb-2 font-medium text-gray-700"
          >
            Ciudad y municipio. ¿Dónde quieres afiliarte?
            <span className="text-red-500">*</span>
          </label>
          <select
            id="afiliacion"
            name="afiliacion"
            value={formData.afiliacion}
            onChange={handleChange}
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.afiliacion
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.afiliacion
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          >
            <option value="">– Elegir una opción –</option>
            <option value="Santo Domingo">Santo Domingo</option>
            <option value="Santiago de los Caballeros">
              Santiago de los Caballeros
            </option>
            <option value="Alcarrizos El Libertador">
              Alcarrizos El Libertador
            </option>
            <option value="Alcarrizos Los Americanos">
              Alcarrizos Los Americanos
            </option>
            <option value="Azua">Azua</option>
            <option value="Bonao">Bonao</option>
            <option value="Consuelo">Consuelo</option>
            <option value="Distrito Nacional">Distrito Nacional</option>
            <option value="El Seibo">El Seibo</option>
            <option value="Guaricanos">Guaricanos</option>
            <option value="Haina">Haina</option>
            <option value="Hato Mayor">Hato Mayor</option>
            <option value="Herrera">Herrera</option>
            <option value="Higuey">Higuey</option>
            <option value="La Romana">La Romana</option>
            <option value="La Vega">La Vega</option>
            <option value="Las Américas">Las Américas</option>
            <option value="Los Mina">Los Mina</option>
            <option value="Padre Castellanos">Padre Castellanos</option>
            <option value="Pedro Brand">Pedro Brand</option>
            <option value="Piantini">Piantini</option>
          </select>
        </div>

        {/* ¿Cómo supiste de nosotros? */}
        <div className="mb-6 md:col-span-2">
          <label
            htmlFor="comoSupiste"
            className="block mb-2 font-medium text-gray-700"
          >
            ¿Por qué vía supiste de nosotros?
          </label>
          <select
            id="comoSupiste"
            name="comoSupiste"
            value={formData.comoSupiste}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">– Elegir una opción –</option>
            <option value="amigo">Amigo</option>
            <option value="internet">Internet</option>
            <option value="publicidad">Publicidad</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        {/* Consentimiento */}
        <div className="mb-6 md:col-span-2">
          <label className="block mb-2 font-medium text-gray-700">
            Consentimiento
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terminos"
              name="terminos"
              checked={formData.terminos}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="terminos" className="text-gray-700">
              Estoy de acuerdo con los{" "}
              <Link
                to="/terminos-de-servicio"
                target="_blank"
                className="text-green-500 underline hover:text-green-700"
              >
                Términos y Condiciones
              </Link>{" "}
              y la{" "}
              <Link
                to="/politica-de-privacidad"
                target="_blank"
                className="text-green-500 underline hover:text-green-700"
              >
                Política de Privacidad
              </Link>
              .
            </label>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full p-3 text-white transition-colors bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700"
          >
            Enviar formulario
          </button>
        </div>
      </form>
    </>
  );
};

export default FormIndividual;
