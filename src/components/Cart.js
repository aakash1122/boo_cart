import React, { useContext } from "react";
import { store } from "../contexts/StoreContext";

const Cart = () => {
  const { increaseItem, cart, totalPrice } = useContext(store);
  if (cart.length >= 1) {
    return (
      <div className="container text-secondary">
        <h2
          className="mt-3 mb-3 text-center rounded"
          style={{ color: "#28a745" }}
        >
          Your Cart
        </h2>
        <hr
          style={{
            height: "3px",
            background: "#80808024",
            width: "22%"
          }}
        />
        {cart.map((item, idx) => (
          <div
            key={idx}
            className="row m-2 cart-item p-2"
            style={{ height: "80px", background: "#fbfbfb" }}
          >
            <div className="col" id="image">
              <img
                src={item.img}
                alt=""
                className=""
                style={{
                  height: "100%",
                  width: "80px",
                  objectFit: "contain"
                }}
              />
            </div>
            <div className="col" id="name">
              <h6>{item.name}</h6>
            </div>
            <div className="col" id="price">
              <h6>$ {item.price}</h6>
            </div>
            <div className="col d-flex" id="quantity">
              <i className="material-icons">remove</i>
              <h6>{item.quantity}</h6>
              <i className="material-icons" onClick={() => increaseItem(item)}>
                add
              </i>
            </div>
          </div>
        ))}
        <h5 className="mt-3 text-center">Total Price:{totalPrice}</h5>
      </div>
    );
  } else {
    return (
      <div className="container p-3">
        <h2 className="text-center p-5 text-secondary">
          Your Cart is Empty.Please do some shopping !
        </h2>
      </div>
    );
  }
};

export default Cart;
