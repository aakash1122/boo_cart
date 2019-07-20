import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StoreContext from "./contexts/StoreContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container-fluid" id="body">
      <StoreContext>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </StoreContext>
    </div>
  );
}

export default App;
