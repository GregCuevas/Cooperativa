import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const API_URL = "https://backend-api-service.up.railway.app/api/send-empresa";

const FormEmpresa = () => {
  const [formData, setFormData] = useState({
    tipoSocio: "",
    fotoCedula: null,
    nombres: "",
    apellidos: "",
    cedulaIdentidad: "",
    telefono: "",
    email: "",
    direccionResidencia: "",
    municipio: "",
    provincia: "",
    razonSocial: "",
    rnc: "",
    registroMercantil: "",
    actividadEconomica: "",
    direccionEmpresa: "",
    telefonoEmpresa: "",
    emailEmpresa: "",
    terminos: false,
  });

  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleChanges = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const requiredFields = [
      "tipoSocio",
      "fotoCedula",
      "nombres",
      "apellidos",
      "cedulaIdentidad",
      "telefono",
      "email",
      "direccionResidencia",
      "municipio",
      "provincia",
      "terminos",
    ];

    return requiredFields.every((field) => formData[field]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitAttempted(true);

    if (!validateForm()) {
      toast.error("Por favor, completa todos los campos requeridos.");
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Añadimos todos los campos al FormData
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      // Utiliza la URL configurada según el entorno
      const response = await fetch(API_URL, {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Formulario de empresa enviado exitosamente");
      } else {
        toast.error("Error al enviar el formulario de empresa");
      }
    } catch (error) {
      toast.error("Hubo un problema al enviar el formulario de empresa");
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
      <form onSubmit={handleSubmit} className="max-w-4xl p-6 mx-auto space-y-6">
        <div className="mb-6">
          <label
            htmlFor="tipoSocio"
            className="block mb-2 font-medium text-gray-700"
          >
            Selección del tipo de socio empresa
            <span className="text-red-500">*</span>
          </label>
          <select
            id="tipoSocio"
            name="tipoSocio"
            value={formData.tipoSocio}
            onChange={handleChange}
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.tipoSocio
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.tipoSocio
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          >
            <option value="">Selecciona una opción</option>
            <option value="distrito">Distrito</option>
            <option value="sucursal">Sucursal</option>
            <option value="puntoAtencion">Punto de Atención</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="fotoCedula"
            className="block mb-2 font-medium text-gray-700"
          >
            Adjuntar Foto de la Cédula
            <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="fotoCedula"
            name="fotoCedula"
            accept="image/*"
            onChange={handleChange}
            className={`w-full p-3 border ${
              isSubmitAttempted && !formData.fotoCedula
                ? "border-red-500"
                : "border-gray-300"
            } rounded-md outline-none focus:ring-2 ${
              isSubmitAttempted && !formData.fotoCedula
                ? "focus:ring-red-500"
                : "focus:ring-green-500"
            }`}
          />
        </div>

        <h3 className="text-lg font-bold">
          Datos de Gerente o Presidente Responsable
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
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
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.nombres
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.nombres
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="Juan Carlos"
            />
          </div>

          <div>
            <label
              htmlFor="apellidos"
              className="block mb-2 font-medium text-gray-700"
            >
              Apellidos
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.apellidos
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.apellidos
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="Pérez Santos"
            />
          </div>

          <div>
            <label
              htmlFor="cedulaIdentidad"
              className="block mb-2 font-medium text-gray-700"
            >
              Cédula de Identidad
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cedulaIdentidad"
              name="cedulaIdentidad"
              value={formData.cedulaIdentidad}
              onChange={handleChange}
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.cedulaIdentidad
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.cedulaIdentidad
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="XXX-XXXXXXX-X"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block mb-2 font-medium text-gray-700"
            >
              Teléfono o Celular
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.telefono
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.telefono
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="809-123-4567"
            />
          </div>

          <div>
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
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.email
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="correo@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="direccionResidencia"
              className="block mb-2 font-medium text-gray-700"
            >
              Dirección de Residencia
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="direccionResidencia"
              name="direccionResidencia"
              value={formData.direccionResidencia}
              onChange={handleChange}
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.direccionResidencia
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.direccionResidencia
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="Calle, número"
            />
          </div>

          <div>
            <label
              htmlFor="municipio"
              className="block mb-2 font-medium text-gray-700"
            >
              Municipio
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="municipio"
              name="municipio"
              value={formData.municipio}
              onChange={handleChange}
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.municipio
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.municipio
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="Municipio"
            />
          </div>

          <div>
            <label
              htmlFor="provincia"
              className="block mb-2 font-medium text-gray-700"
            >
              Provincia
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="provincia"
              name="provincia"
              value={formData.provincia}
              onChange={handleChange}
              className={`w-full p-3 border ${
                isSubmitAttempted && !formData.provincia
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md outline-none focus:ring-2 ${
                isSubmitAttempted && !formData.provincia
                  ? "focus:ring-red-500"
                  : "focus:ring-green-500"
              }`}
              placeholder="Provincia"
            />
          </div>
        </div>

        <h3 className="text-lg font-bold">Datos de la Empresa (Opcional)</h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="razonSocial"
              className="block mb-2 font-medium text-gray-700"
            >
              Razón Social
            </label>
            <input
              type="text"
              id="razonSocial"
              name="razonSocial"
              value={formData.razonSocial}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nombre de la empresa"
            />
          </div>

          <div>
            <label
              htmlFor="rnc"
              className="block mb-2 font-medium text-gray-700"
            >
              RNC
            </label>
            <input
              type="text"
              id="rnc"
              name="rnc"
              value={formData.rnc}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              placeholder="RNC"
            />
          </div>

          <div>
            <label
              htmlFor="registroMercantil"
              className="block mb-2 font-medium text-gray-700"
            >
              Registro Mercantil
            </label>
            <input
              type="text"
              id="registroMercantil"
              name="registroMercantil"
              value={formData.registroMercantil}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Registro Mercantil"
            />
          </div>

          <div>
            <label
              htmlFor="actividadEconomica"
              className="block mb-2 font-medium text-gray-700"
            >
              Actividad Económica
            </label>
            <input
              type="text"
              id="actividadEconomica"
              name="actividadEconomica"
              value={formData.actividadEconomica}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Actividad Económica"
            />
          </div>
          <div>
            <label
              htmlFor="direccionEmpresa"
              className="block mb-2 font-medium text-gray-700"
            >
              Dirección Empresa
            </label>
            <input
              type="text"
              id="direccionEmpresa"
              name="direccionEmpresa"
              value={formData.direccionEmpresa}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Dirección Empresa"
            />
          </div>
          <div>
            <label
              htmlFor="telefonoEmpresa"
              className="block mb-2 font-medium text-gray-700"
            >
              Tel. Empresa
            </label>
            <input
              type="text"
              id="telefonoEmpresa"
              name="telefonoEmpresa"
              value={formData.telefonoEmpresa}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              placeholder="809-324-5435"
            />
          </div>
          <div>
            <label
              htmlFor="emailEmpresa"
              className="block mb-2 font-medium text-gray-700"
            >
              Email de la Empresa
            </label>
            <input
              type="text"
              id="emailEmpresa"
              name="emailEmpresa"
              value={formData.emailEmpresa}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              placeholder="empresa@gmail.com"
            />
          </div>
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
                onChange={handleChanges}
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
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
          >
            Enviar Formulario
          </button>
        </div>
      </form>
    </>
  );
};

export default FormEmpresa;
