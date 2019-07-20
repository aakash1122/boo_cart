import React, { useContext } from "react";
import { store } from "../contexts/StoreContext";
import Product from "./Product";

const ProductList = () => {
  const { products, addToCart } = useContext(store);
  return (
    <div>
      <h1 className="text-secondary text-center mt-5 mb-2t">All Products</h1>
      <hr
        style={{
          height: "1px",
          background: "#80808024",
          width: "20%",
          marginBottom: "25px"
        }}
      />
      <div className="d-flex justify-content-center flex-wrap container">
        {products.map((product, idx) => (
          <Product key={idx} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
