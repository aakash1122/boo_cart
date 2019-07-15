import React, { useContext } from "react";
import { store } from "../contexts/StoreContext";
import Product from "./Product";

const ProductList = () => {
  const { products } = useContext(store);
  return (
    <div className="d-flex justify-content-center flex-wrap container">
      {products.map((product, idx) => (
        <Product key={idx} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
