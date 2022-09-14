import { createContext, useState, useEffect } from "react";
import { Products as data } from "../data/products";

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);
  function createProduct(product) {
    setProducts([
      ...products,
      {
        id: product.length,
        name: product.name,
        description: product.description,
        price: product.price,
        imgsrc: product.imgsrc,
        vendor: product.vendor,
      },
    ]);
  }

  function deleteProduct(productId) {
    setProducts(products.filter((product) => product.id !== productId));
  }
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        createProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}
