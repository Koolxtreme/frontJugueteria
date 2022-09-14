import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

function ProductGal() {
  const { products } = useContext(ProductsContext);
  if (!products) {
    return <h1>No hay Productos aún</h1>;
  }
  return (
    <section className="grid grid-cols-2 gap-2 p-6 md:grid-cols-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductGal;
