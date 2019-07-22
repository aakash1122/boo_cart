import React, { useContext } from "react";
import { store } from "../contexts/StoreContext";

const Cart = () => {
  const {
    increaseItem,
    decreaseItem,
    removeFromCart,
    cart,
    totalPrice
  } = useContext(store);
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
            className="row m-3 cart-item p-2 shadow"
            style={{ height: "auto", background: "#fbfbfb" }}
          >
            <div className="col" id="image">
              <img
                src={item.img}
                alt=""
                className=""
                style={{
                  height: "80px",
                  width: "80px",
                  objectFit: "contain"
                }}
              />
            </div>
            <div className="col" id="name">
              <h6 style={{ fontSize: "26px" }}>{item.name}</h6>
            </div>
            <div className="col d-flex" id="quantity">
              <i
                className="material-icons"
                style={{
                  background: "#d2d2d2",
                  color: "#5d5959",
                  padding: "5px",
                  borderRadius: "7px",
                  fontSize: "32px",
                  color: "yellow"
                }}
                onClick={() => decreaseItem(item)}
              >
                remove
              </i>
              <h6 style={{ fontSize: "32px" }}>{item.quantity}</h6>
              <i
                className="material-icons"
                style={{
                  background: "#d2d2d2",
                  color: "#5d5959",
                  padding: "5px",
                  borderRadius: "7px",
                  fontSize: "32px",
                  color: "#ff7f59"
                }}
                onClick={() => increaseItem(item)}
              >
                add
              </i>
            </div>
            <div className="col" id="price">
              <h6
                style={{
                  fontSize: "26px",
                  marginLeft: "3px",
                  marginRight: "3px"
                }}
              >
                $ {item.price}
              </h6>
            </div>
            <div className="col" id="price">
              <i
                className="material-icons"
                style={{
                  background: "#d2d2d2",
                  color: "#5d5959",
                  padding: "5px",
                  borderRadius: "7px",
                  fontSize: "35px",
                  color: "#dc3545"
                }}
                onClick={() => removeFromCart(item)}
              >
                remove_shopping_cart
              </i>
            </div>
          </div>
        ))}
        <h4 className="mt-5 text-center">Total Price: ${totalPrice}</h4>
        <button
          type="button"
          className="btn btn-outline-success btn-lg btn-block mt-3"
        >
          Checkout Now
        </button>
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
