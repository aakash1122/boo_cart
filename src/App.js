import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StoreContext from "./contexts/StoreContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="container-fluid" id="body">
      <StoreContext>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={ProductDetail} />
        </Switch>
      </StoreContext>
    </div>
  );
}

export default App;
