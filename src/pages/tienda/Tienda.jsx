"use client";

import { useState, useEffect } from "react";
import Header from "../../components/layouts/Header";
import ProductGrid from "../../components/products/ProductGrid";
import Sidebar from "../../components/layouts/Sidebar";
import allProducts from "../../data/products"; // Asegúrate de que la ruta sea correcta
import Notification from "../../components/ui/Notification";
import Navbar from "@/components/layouts/Navbar";

const Tienda = () => {
  const [products, setProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [notification, setNotification] = useState(null);

  // Mostrar notificación
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Filtrar y ordenar productos
  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por rango de precio
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filtrar por categorías seleccionadas
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.some((category) =>
          selectedCategories.includes(category)
        )
      );
    }

    // Ordenar productos
    switch (sortOption) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Mantener el orden predeterminado
        break;
    }

    setProducts(filteredProducts);
  }, [searchTerm, sortOption, priceRange, selectedCategories]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4">
              <Sidebar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            </div>
            <div className="w-full md:w-3/4">
              <div className="mb-6">
                <h1 className="text-xl font-medium">
                  {products.length === 0
                    ? "No se encontraron productos"
                    : `Mostrando ${products.length} de ${allProducts.length} productos`}
                </h1>
              </div>
              <ProductGrid
                products={products}
                showNotification={showNotification}
              />
            </div>
          </div>
        </main>

        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
          />
        )}
      </div>
    </>
  );
};

export default Tienda;
