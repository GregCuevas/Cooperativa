"use client";

import { useState } from "react";
import Slider from "../ui/Slider";
import Checkbox from "../ui/Checkbox";

// Categorías disponibles
const categories = [
  { id: "tabletas", name: "Tabletas", count: 8 },
  { id: "laptops", name: "Laptops", count: 4 },
  { id: "televisores", name: "Televisores", count: 10 },
  { id: "celulares", name: "Celurares", count: 8 },
];
// Productos destacados
const featuredProducts = [
  {
    id: 1,
    image: "/images/placeholder-chair.jpg",
    alt: "Silla de oficina",
    title: "SmarTab Mini 8",
    price: "£120.00",
  },

  {
    id: 2,
    image: "/images/placeholder-table.jpg",
    alt: "Mesa de centro",
    title: "TechBook Slim 14",
    price: "£160.00",
  },
  {
    id: 3,
    image: "/images/placeholder-table.jpg",
    alt: "Mesa de centro",
    title: "MYTVSTICK – TV Stick Android",
    price: "£120.00",
  },
  {
    id: 4,
    image: "/images/placeholder-table.jpg",
    alt: "Mesa de centro",
    title: "GT-10 – GoPro 7",
    price: "£150.00",
  },
];

function Sidebar({
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
}) {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

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
        <h2 className="text-xl font-bold mb-6">Filtrar por precio</h2>
        <Slider
          value={localPriceRange}
          min={0}
          max={200}
          step={5}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
        <div className="flex justify-between items-center mb-6">
          <button
            className="bg-[#22C55E] hover:bg-[#171717] text-white px-4 py-2 rounded-md transition-colors"
            onClick={applyPriceFilter}
          >
            Aplicar
          </button>
          <span className="text-sm">
            Precio: £{localPriceRange[0]} — £{localPriceRange[1]}
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
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h3 className="font-medium text-sm">{product.title}</h3>
                <div className="flex text-yellow-400 text-xs mt-1">★★★★★</div>
                <p className="text-sm font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
