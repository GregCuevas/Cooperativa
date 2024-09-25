import React, { useState } from "react";
import { Link } from "react-router-dom";
const FormIndividual = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
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

  const [isFormValid, setIsFormValid] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de validación y envío
  };

  return (
    <>
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
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
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
            className={`w-full p-3 border ${
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
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
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
          />
        </div>
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
            accept="image/*" // Solo permite archivos de imagen
            onChange={handleChange}
            className={`w-full p-3 border ${
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
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
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
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
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
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
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
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

        {/* Ciudad, Estado, País */}
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
            className={`w-full p-3 border ${
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
          />
        </div>

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
            className={`w-full p-3 border ${
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
          />
        </div>

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
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
          >
            <option value="">Selecciona un país</option>
            {/* Países del Caribe */}
            <option value="Antigua and Barbuda">Antigua y Barbuda</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Barbados">Barbados</option>
            <option value="Cuba">Cuba</option>
            <option value="Dominican Republic">República Dominicana</option>
            <option value="Grenada">Granada</option>
            <option value="Haiti">Haití</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Saint Kitts and Nevis">
              San Cristóbal y Nieves
            </option>
            <option value="Saint Lucia">Santa Lucía</option>
            <option value="Saint Vincent and the Grenadines">
              San Vicente y las Granadinas
            </option>
            <option value="Trinidad and Tobago">Trinidad y Tobago</option>
            <option value="Aruba">Aruba</option>
            <option value="Cayman Islands">Islas Caimán</option>
            <option value="Turks and Caicos Islands">
              Islas Turcas y Caicos
            </option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Curacao">Curazao</option>
            <option value="Guadeloupe">Guadalupe</option>
            <option value="Martinique">Martinica</option>
            <option value="Saint Barthelemy">San Bartolomé</option>
            <option value="Saint Martin">San Martín</option>

            {/* Países del resto del mundo */}
            <option value="Afghanistan">Afganistán</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Argelia</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaiyán</option>
            {/* Continúa con todos los países del mundo */}
          </select>
        </div>

        {/* Ciudad y municipio */}
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
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
          >
            <option value="">– Elegir una opción –</option>
            <option value="Santo Domingo">Santo Domingo</option>
            <option value="Santo Domingo">Distrito Nacional</option>
            <option value="Santiago de los Caballeros">
              Santiago de los Caballeros
            </option>
            <option value="La Romana">La Romana</option>
            <option value="San Pedro de Macorís">San Pedro de Macorís</option>
            <option value="Higüey">Higüey</option>
            <option value="San Francisco de Macorís">
              San Francisco de Macorís
            </option>
            <option value="Puerto Plata">Puerto Plata</option>
            <option value="La Vega">La Vega</option>
            <option value="Moca">Moca</option>
            <option value="Bonao">Bonao</option>
            <option value="San Cristóbal">San Cristóbal</option>
            <option value="Azua">Azua</option>
            <option value="Barahona">Barahona</option>
            <option value="Baní">Baní</option>
            <option value="Nagua">Nagua</option>
            <option value="Montecristi">Montecristi</option>
            <option value="Mao (Valverde)">Mao (Valverde)</option>
            <option value="Samaná">Samaná</option>
            <option value="San Juan de la Maguana">
              San Juan de la Maguana
            </option>
            <option value="Cotuí">Cotuí</option>
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
            className={`w-full p-3 border ${
              isFormValid
                ? "border-gray-300 focus:ring-2 focus:ring-green-500"
                : "border-red-500 focus:ring-0"
            } rounded-md focus:outline-none`}
          >
            <option value="">– Elegir una opción –</option>
            <option value="amigo">Amigo</option>
            <option value="internet">Internet</option>
            <option value="publicidad">Publicidad</option>
            <option value="publicidad">Otros</option>
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
