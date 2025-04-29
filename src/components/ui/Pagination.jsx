"use client";

import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Determinar qué números de página mostrar
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Siempre mostrar la primera página
    pageNumbers.push(1);

    // Determinar el rango de páginas a mostrar alrededor de la página actual
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // Añadir elipsis después de la página 1 si hay un salto
    if (startPage > 2) {
      pageNumbers.push("...");
    }

    // Añadir páginas del rango calculado
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Añadir elipsis antes de la última página si hay un salto
    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    // Añadir la última página si hay más de una página
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  // No mostrar paginación si solo hay una página
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-8 select-none">
      {/* Botón Anterior */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`h-10 w-10 rounded-full flex items-center justify-center mr-2 ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        aria-label="Página anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Números de página */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="h-10 w-10 flex items-center justify-center text-gray-500">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={`h-10 w-10 rounded-full flex items-center justify-center mx-1 transition-colors ${
                currentPage === page
                  ? "bg-green-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label={`Página ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Botón Siguiente */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`h-10 w-10 rounded-full flex items-center justify-center ml-2 ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
        aria-label="Página siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
