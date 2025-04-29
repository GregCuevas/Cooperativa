"use client";

import { useState, useEffect } from "react";
import Header from "../../components/layouts/Header";
import ProductGrid from "../../components/products/ProductGrid";
import Sidebar from "../../components/layouts/Sidebar";
import allProducts from "../../data/products"; // Asegúrate de que la ruta sea correcta
import Notification from "../../components/ui/Notification";
import Navbar from "@/components/layouts/Navbar";
import Pagination from "@/components/ui/Pagination"; // ✅ correcto para export default

const Tienda = () => {
  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [notification, setNotification] = useState(null);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Mostrar notificación
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Filtrar y ordenar productos
  useEffect(() => {
    let filtered = [...allProducts];

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por rango de precio
    filtered = filtered.filter(
      (product) =>
        product.aporte >= priceRange[0] && product.aporte <= priceRange[1]
    );

    // Filtrar por categorías seleccionadas
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        product.categories.some((category) =>
          selectedCategories.includes(category)
        )
      );
    }

    // Ordenar productos
    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => a.aporte - b.aporte);
        break;
      case "price-high":
        filtered.sort((a, b) => b.aporte - a.aporte);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Mantener el orden predeterminado
        break;
    }

    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    setCurrentPage(1); // Volver a la primera página cuando cambian los filtros
  }, [searchTerm, sortOption, priceRange, selectedCategories]);

  // Actualizar productos mostrados según la página actual
  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setDisplayedProducts(
      filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    );
  }, [currentPage, filteredProducts, productsPerPage]);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll suave hacia arriba cuando se cambia de página
    window.scrollTo({
      top: document.getElementById("products-section").offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Encabezado de la tienda */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Banner principal */}

        {/* Categorías destacadas */}

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <Sidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
          <div className="w-full md:w-3/4" id="products-section">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-medium">
                {filteredProducts.length === 0
                  ? "No se encontraron productos con los filtros actuales"
                  : `Mostrando ${Math.min(
                      (currentPage - 1) * productsPerPage + 1,
                      filteredProducts.length
                    )} - ${Math.min(
                      currentPage * productsPerPage,
                      filteredProducts.length
                    )} de ${filteredProducts.length} productos`}
              </h2>
              <div className="text-sm text-gray-500">
                {selectedCategories.length > 0 && (
                  <button
                    className="text-green-500 hover:underline"
                    onClick={() => setSelectedCategories([])}
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>
            </div>

            {/* Productos */}
            <ProductGrid
              products={displayedProducts}
              showNotification={showNotification}
            />

            {/* Paginación */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>

      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
};

export default Tienda;
