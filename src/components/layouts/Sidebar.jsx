"use client";

import { useState } from "react";
import Slider from "../ui/slider";
import Checkbox from "../ui/checkbox";
import { categories } from "../../data/products";

function Sidebar({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
}) {
  // Asegurarse de que el rango inicial del slider sea correcto
  const [localPriceRange, setLocalPriceRange] = useState(
    priceRange || [0, 20000]
  );

  const handlePriceChange = (value) => {
    setLocalPriceRange(value);
  };

  const applyPriceFilter = () => {
    setPriceRange(localPriceRange);
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Filtro por precio */}
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        {/* Cambiar el título del filtro para mayor claridad */}
        <h2 className="text-xl font-bold mb-6">Filtrar por aporte inicial</h2>
        <Slider
          value={localPriceRange}
          min={0}
          max={20000}
          step={1000}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
        <div className="flex justify-between items-center mb-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
            onClick={applyPriceFilter}
          >
            Aplicar
          </button>
          <span className="text-sm">
            Aporte: RD${localPriceRange[0].toLocaleString()} — RD$
            {localPriceRange[1].toLocaleString()}
          </span>
        </div>
      </div>

      {/* Categorías */}
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6">Categorías</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id} className="flex items-center">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <label
                htmlFor={`category-${category.id}`}
                className="ml-2 text-sm font-medium flex justify-between w-full"
              >
                <span>{category.name}</span>
                <span className="text-gray-500">({category.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Productos destacados */}
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6">Productos destacados</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60?text=ProTab"
                alt="ProTab Ultra 10"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">ProTab Ultra 10</h3>
              <div className="flex text-yellow-400 text-xs mt-1">★★★★★</div>
              <p className="text-sm font-bold mt-1">RD$5,000</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60?text=SmartTab"
                alt="SmartTab Elite 14"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">SmartTab Elite 14</h3>
              <div className="flex text-yellow-400 text-xs mt-1">★★★★</div>
              <p className="text-sm font-bold mt-1">RD$6,000</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60?text=VISION55"
                alt="VISION55 4K"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">VISION55 4K</h3>
              <div className="flex text-yellow-400 text-xs mt-1">★★★★★</div>
              <p className="text-sm font-bold mt-1">RD$8,000</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60?text=NOTE30"
                alt="NOTE 30 PRO"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">NOTE 30 PRO</h3>
              <div className="flex text-yellow-400 text-xs mt-1">★★★★★</div>
              <p className="text-sm font-bold mt-1">RD$4,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
