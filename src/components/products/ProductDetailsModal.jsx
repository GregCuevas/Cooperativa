"use client";

import { useEffect, useState } from "react";
import StarRating from "../ui/StarRating";
import { Badge } from "@/components/ui/badge";

function ProductDetailsModal({ product, onClose, onAddToCart }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState(
    product.images ? product.images[0] : product.image
  );

  // Obtener las imágenes del producto
  const productImages = product.images || [product.image];

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Botón de cerrar */}
        <button
          type="button"
          className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-500 focus:outline-none"
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

        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          {/* Columna izquierda: Imágenes */}
          <div className="md:w-1/2 bg-gray-50 flex flex-col h-full">
            {/* Imagen principal */}
            <div className="relative flex-grow flex items-center justify-center p-4">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={activeImage || product.image}
                alt={product.name}
                className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Galería de miniaturas */}
            {productImages.length > 1 && (
              <div className="flex justify-center gap-2 p-3 border-t border-gray-200">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 border-2 rounded overflow-hidden flex-shrink-0 ${
                      activeImage === img
                        ? "border-green-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Columna derecha: Información del producto */}
          <div className="md:w-1/2 p-6 overflow-y-auto">
            {/* Categoría */}
            <div className="mb-2">
              <Badge variant="solid" className="text-xs uppercase">
                {product.categories[0]}
              </Badge>
            </div>

            {/* Nombre del producto */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
            </h2>

            {/* Calificación */}
            <div className="flex items-center mb-4">
              <StarRating rating={product.rating} />
              <span className="ml-2 text-gray-600">({product.rating}/5)</span>
            </div>

            {/* Precios */}
            <div className="mb-6">
              <div className="text-lg font-medium text-gray-700">
                Cuota mensual:{" "}
                <span className="font-bold text-[#0A0A0A]">
                  RD${product.cuota.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Características */}
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Características</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botones de acción */}
            <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200">
              <button
                onClick={onAddToCart}
                className="flex-1 bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center font-medium"
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
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
