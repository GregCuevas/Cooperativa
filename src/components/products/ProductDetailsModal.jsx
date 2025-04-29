"use client";

import { useEffect } from "react";
import StarRating from "../ui/StarRating";
import { Badge } from "@/components/ui/badge";

function ProductDetailsModal({ product, onClose, onAddToCart }) {
  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal panel */}
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Cerrar</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Imagen del producto */}
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-100">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Información del producto */}
            <div className="md:w-1/2 p-6">
              <div className="flex flex-wrap gap-1 mb-2">
                {product.categories.map((category) => (
                  <Badge key={category} variant="outline" className="text-xs">
                    {category.toUpperCase()}
                  </Badge>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>

              <div className="flex items-center mb-4">
                <StarRating rating={product.rating} />
                <span className="ml-2 text-gray-600">({product.rating}/5)</span>
              </div>

              <div className="mb-6">
                <div className="text-lg font-medium text-gray-700 mb-1">
                  Aporte inicial:{" "}
                  <span className="font-bold text-[#171717]">
                    RD${product.aporte.toLocaleString()}
                  </span>
                </div>
                <div className="text-lg font-medium text-gray-700">
                  Cuota mensual:{" "}
                  <span className="font-bold text-[#171717]">
                    RD${product.cuota.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Características
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={onAddToCart}
                  className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Añadir al carrito
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
