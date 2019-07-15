import React from "react";
import Navbar from "./components/Navbar";
import StoreContext from "./contexts/StoreContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container-fluid">
      <StoreContext>
        <Navbar />
        <ProductList />
      </StoreContext>
    </div>
  );
}

export default App;
