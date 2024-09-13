import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { X, Menu, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Manejar el dropdown activo
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (key) => {
    if (activeDropdown === key) {
      setActiveDropdown(null); // Cierra si ya está abierto
    } else {
      setActiveDropdown(key); // Abre el nuevo dropdown
    }
  };

  // Manejar el clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null); // Cerrar dropdown si se hace clic fuera
      }
    };

    // Agregar el evento de clic al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const [isOpens, setIsOpens] = useState(false); // Manejar el estado del menú móvil
  const [activeDropdowns, setActiveDropdowns] = useState(null); // Manejar los submenús

  const toggleDropdowns = (key) => {
    if (activeDropdowns === key) {
      setActiveDropdowns(null); // Cierra el submenú si ya está abierto
    } else {
      setActiveDropdowns(key); // Abre el nuevo submenú
    }
  };
  return (
    <nav className="bg-white ">
      <div className="max-w-full px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Cooperativa Logo" className="h-16" />
          </div>

          {/* Centered Links */}
          <div
            className="hidden font-semibold text-black space-x-9 lg:flex"
            ref={dropdownRef}
          >
            <Link to="/" className="hover:text-[#09bc8a]">
              Inicio
            </Link>

            {/* Dropdowns */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("nosotros")}
                className="flex items-center space-x-1 hover:text-[#09bc8a] "
              >
                Nosotros <ChevronDown size={17} color="#09bc8a" />
              </button>
              {activeDropdown === "nosotros" && (
                <div className="absolute w-48 mt-2 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/perfil-institucional"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Perfil Institucional
                  </Link>
                  <Link
                    to="/historia"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Historia
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("servicios")}
                className="flex items-center space-x-1 hover:text-[#09bc8a]"
              >
                Servicios <ChevronDown size={17} color="#09bc8a" />
              </button>
              {activeDropdown === "servicios" && (
                <div className="absolute w-48 mt-2 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/educacion"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Educación
                  </Link>
                  <Link
                    to="/telecomunicaciones"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Telecomunicaciones
                  </Link>
                  <Link
                    to="/financiamiento"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Financiamiento
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("socios")}
                className="flex items-center space-x-1 hover:text-[#09bc8a] "
              >
                Socios <ChevronDown size={17} color="#09bc8a" />
              </button>
              {activeDropdown === "socios" && (
                <div className="absolute w-48 mt-2 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/socio-individual"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Socio Individual
                  </Link>
                  <Link
                    to="/socio-empresa"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Socio Empresa
                  </Link>
                </div>
              )}
            </div>

            <Link to="/prensa" className="hover:text-[#09bc8a]">
              Prensa
            </Link>
            <Link to="/sucursales" className="hover:text-[#09bc8a]">
              Sucursales
            </Link>
          </div>

          {/* Call-to-action Button */}
          <div className="items-center hidden space-x-4 lg:flex">
            <button className="text-[#09bc8a] ">
              <Search size={28} />
            </button>
            <Link
              to="/contactos"
              className="text-white  px-4 py-2 rounded-full font-semibold bg-[#09bc8a] hover:text-white transition-all duration-300"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile Search and Menu Icons */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button onClick={toggleMenu} className="text-[#09bc8a]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <button className="text-[#09bc8a]">
              <Search size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`border rounded-lg lg:hidden fixed top-0 right-0 w-3/4 h-full bg-white text-[#f8961e] transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div>
          <ul className="flex flex-col items-start flex-grow w-full p-4 space-y-2 bg-white">
            <li>
              <Link
                to="/"
                className=" hover:text-[#f8961e] transition-colors flex justify-between items-center w-full text-[#09bc8a] font-bold px-4 py-2"
              >
                Inicio
              </Link>
            </li>
            <li className="relative w-full">
              <button
                onClick={() => toggleDropdowns("nosotros")}
                className="flex justify-between items-center w-full text-[#09bc8a] font-bold px-4 py-2 hover:bg-gray-100 rounded transition-colors"
              >
                Nosotros <ChevronDown size={17} />
              </button>
              {activeDropdowns === "nosotros" && (
                <div className="absolute left-0 z-50 w-full mt-2 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/perfil-institucional"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Perfil Institucional
                  </Link>
                  <Link
                    to="/historia"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Historia
                  </Link>
                </div>
              )}
            </li>

            <li className="relative w-full">
              <button
                onClick={() => toggleDropdowns("servicios")}
                className="flex justify-between items-center w-full text-[#09bc8a] font-bold px-4 py-2 hover:bg-gray-100 rounded transition-colors"
              >
                Servicios <ChevronDown size={17} />
              </button>
              {activeDropdowns === "servicios" && (
                <div className="absolute left-0 z-50 w-full mt-2 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/servicios/servicio1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Educación
                  </Link>
                  <Link
                    to="/servicios/servicio2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Telecomunicaciones
                  </Link>
                  <Link
                    to="/servicios/servicio1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Financiamiento
                  </Link>
                </div>
              )}
            </li>

            <li className="relative w-full">
              <button
                onClick={() => toggleDropdowns("socios")}
                className="flex justify-between items-center w-full text-[#09bc8a] font-bold px-4 py-2 hover:bg-gray-100 rounded transition-colors"
              >
                Socios <ChevronDown size={17} />
              </button>
              {activeDropdowns === "socios" && (
                <div className="absolute left-0 z-50 w-full mt-2 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/socios-individual"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Socio Individual
                  </Link>
                  <Link
                    to="/socios-empresa"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Socio Empresa
                  </Link>
                </div>
              )}
            </li>

            <li className="relative w-full">
              <button className="flex justify-between items-center w-full text-[#09bc8a] font-bold px-4 py-2 hover:bg-gray-100 rounded transition-colors">
                <Link to="/">Prensa </Link>
              </button>
            </li>

            <li className="relative w-full">
              <button className="flex justify-between items-center w-full text-[#09bc8a] font-bold px-4 py-2 hover:bg-gray-100 rounded transition-colors">
                <Link to="/">Sucursales </Link>
              </button>
            </li>

            <li className="relative w-full">
              <Link
                to="/contactos"
                className="block w-full bg-[#09bc8a] text-white px-4 py-2 rounded-full font-bold text-center hover:bg-[#f8961e] transition-colors"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
