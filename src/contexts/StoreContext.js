import React, { useState, createContext } from "react";
import uuid from "uuid/v1";
import { allProducts } from "../ProductsInfo";

export const store = createContext();

const StoreContext = props => {
  const [products, setProducts] = useState(allProducts);

  return <store.Provider value={{ products }}>{props.children}</store.Provider>;
};

export default StoreContext;
