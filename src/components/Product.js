import React from "react";
import { Link } from "react-router-dom";
export default function Product({ product, addToCart }) {
  return (
    <div
      className="d-flex flex-column text-center shadow m-2 p-3 bg-light"
      style={{ width: "240px" }}
    >
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "#6c757d" }}
      >
        <img
          src={product.img}
          alt=""
          className="rounded"
          style={{ height: "200px", width: "100%", objectFit: "scale-down" }}
        />
      </Link>
      <div className="mt-3 ">
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "#6c757d" }}
        >
          <h6 className="card-title text-left">{product.name}</h6>
          <p className="card-text text-left" style={{ fontSize: "15px" }}>
            {product.desc.slice(0, 80)}
          </p>
        </Link>
        <div className="d-flex justify-content-around">
          <h6 className="text-secondary">
            $ <span style={{ color: "red" }}>{product.price}</span>
          </h6>
          <h6 className="text-secondary">Quantity: {product.qtty}</h6>
        </div>
        {product.qtty >= 1 ? (
          <>
            {product.inCart ? (
              <button className="btn btn-outline-danger btn-block" disabled>
                Added to the Cart
              </button>
            ) : (
              <button
                className="btn btn-danger btn-block"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </>
        ) : (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ color: "#6c757d" }}
          >
            <b>Out Of Stock</b>
          </div>
        )}
      </div>
    </div>
  );
}
