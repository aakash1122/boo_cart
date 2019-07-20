import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../contexts/StoreContext";

export default function Navbar(props) {
  const { cart } = useContext(store);
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <h3 className="navbar-brand text-danger">Boo Cart</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/cart">
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ cursor: "pointer" }}
          >
            <i
              className="material-icons navbar-text ml-auto text-success"
              style={{ fontSize: "36px" }}
            >
              shopping_cart
            </i>
            <h4 className="mb-0 text-secondary ml-1 ">{cart.length}</h4>
          </div>
        </Link>
      </div>
    </nav>
  );
}
