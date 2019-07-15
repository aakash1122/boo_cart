import React from "react";

export default function Product({ product }) {
  return (
    <div
      className="d-flex flex-column text-center shadow m-2 p-3"
      style={{ width: "240px" }}
    >
      <img
        src={product.pImg}
        alt=""
        className="rounded"
        style={{ height: "200px", objectFit: "scale-down" }}
      />
      <div className="mt-3 ">
        <h6 className="card-title text-left">{product.pName}</h6>
        <p className="card-text text-left" style={{ fontSize: "15px" }}>
          {product.desc.slice(0, 80)}
        </p>
        <div className="d-flex justify-content-around">
          <h6 className="text-secondary">$ {product.price}</h6>
          <h6 className="text-secondary">Quantity: {product.qtty}</h6>
        </div>
        <a href="#" className="btn btn-outline-danger btn-block">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
