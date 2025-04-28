import ProductCard from "./ProductCard";

function ProductGrid({ products, showNotification }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showNotification={showNotification}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
