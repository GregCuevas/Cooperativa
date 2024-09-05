import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { X, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#f8961e] to-[#09bc8a] p-4 shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Cooperativa Logo"
            className="h-14 sm:h-14 md:h-16 lg:h-20"
          />
        </div>

        {/* Centered Links (only for large screens) */}
        <div className="hidden space-x-8 font-semibold text-white lg:flex">
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
          <Link to="/nosotros" className="hover:underline">
            Nosotros
          </Link>
          <Link to="/servicios" className="hover:underline">
            Servicios
          </Link>
          <Link to="/socios" className="hover:underline">
            Socios
          </Link>
          <Link to="/prensa" className="hover:underline">
            Prensa
          </Link>
          <Link to="/inversionistas" className="hover:underline">
            Inversionistas
          </Link>
        </div>

        {/* Icons for Search and Menu on the right */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            <Search size={28} />
          </button>
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-white text-[#f8961e] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col items-start p-6 space-y-6">
          <li>
            <Link
              to="/"
              className="text-[#09bc8a] font-bold hover:text-[#f8961e] transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/nosotros"
              className="text-[#09bc8a] font-bold hover:text-[#f8961e] transition-colors"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/servicios"
              className="text-[#09bc8a] font-bold hover:text-[#f8961e] transition-colors"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/socios"
              className="text-[#09bc8a] font-bold hover:text-[#f8961e] transition-colors"
            >
              Socios
            </Link>
          </li>
          <li>
            <Link
              to="/prensa"
              className="text-[#09bc8a] font-bold hover:text-[#f8961e] transition-colors"
            >
              Prensa
            </Link>
          </li>
          <li>
            <Link
              to="/inversionistas"
              className="text-[#09bc8a] font-bold hover:text-[#f8961e] transition-colors"
            >
              Inversionistas
            </Link>
          </li>
          <li>
            <Link
              to="/contactos"
              className="bg-[#09bc8a] text-white px-4 py-2 rounded-full font-bold"
            >
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
