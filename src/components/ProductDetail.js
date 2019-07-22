import React, { useEffect, useState, useContext } from "react";
import ReactImageMagnify from "react-image-magnify";
import { store } from "../contexts/StoreContext";

const ProductDetail = props => {
  const [product, setProduct] = useState(null);

  const { getProductData } = useContext(store);

  useEffect(() => {
    console.log("run");
    setProduct(getProductData(props.match.params.id));
    console.log(product);
  }, []);

  return product ? (
    <div className="container text-secondary">
      <div className="row p-3">
        <div className="col-4 w-100" style={{ zIndex: "999" }}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: product.img
              },
              largeImage: {
                src: product.img,
                width: 1200,
                height: 1000
              }
            }}
          />
        </div>
        <div className="col-8 p-3 d-flex flex-column">
          <h2 style={{ fontSize: "45px", fontWeight: "bold" }}>
            {product.name}
          </h2>
          <p className="mt-3" style={{ fontSize: "26px", fontWeight: "300" }}>
            {product.desc}
          </p>
          <h4 className="mt-2">
            Price:{" "}
            <span
              style={{
                color: "#dc3545",
                marginLeft: "5px",
                fontWeight: "bolder",
                fontStyle: "italic"
              }}
            >
              {product.price}
            </span>
          </h4>
          <p>Availabe : {product.qtty}</p>
          <div className="mt-3">
            <button type="button" className="btn btn-warning btn-lg mr-2">
              Add To Cart
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-lg ml-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <h1>Loading!</h1>
    </>
  );
};

export default ProductDetail;
