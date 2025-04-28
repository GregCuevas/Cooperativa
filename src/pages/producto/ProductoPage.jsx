import { useParams } from "react-router-dom";
import productos from "@/data/products";

const ProductoPage = () => {
  const { id } = useParams();
  const product = productos.find((p) => p.id === parseInt(id));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={product.image_url} className="w-full mb-4" alt={product.name} />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="my-4">{product.description}</p>
      <p className="text-xl font-semibold">RD${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded">
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductoPage;
