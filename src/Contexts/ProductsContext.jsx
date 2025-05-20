import { createContext, useContext, useState } from "react";
import { productsData } from "../Constants";

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
  const [FilteredData, setFilterData] = useState(productsData);

  function handleSearch(input) {
    setFilterData(
      productsData.filter((product) =>
        product.product_name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }

  return (
    <ProductsContext.Provider value={{ FilteredData, handleSearch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext) ?? {};
}
