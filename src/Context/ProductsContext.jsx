import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message)
      }
    };
    fetchapi();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

const useProductsDetails = id =>{
  const products = useContext(ProductContext)
  const result  = products.find(item => item.id === id)
  return result
}
export default ProductsProvider;
export { useProducts,useProductsDetails };
