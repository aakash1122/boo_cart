import React, { useState, createContext, useEffect } from "react";
import { allProducts } from "../ProductsInfo";

export const store = createContext();

const StoreContext = props => {
  const [products, setProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach(item => {
      price += item.price;
    });
    setTotalPrice(price);
  }, [cart]);

  const addToCart = product => {
    setCart([
      ...cart,
      {
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        quantity: 1
      }
    ]);
    updateProduct(product);
  };

  const updateProduct = product => {
    setProducts(
      products.map(item => {
        if (product.id === item.id) {
          console.log("matched");
          return {
            ...item,
            inCart: true,
            qtty: item.qtty - 1
          };
        }
        return item;
      })
    );
  };

  const increaseItem = product => {
    let price = 0;
    products.forEach(item => {
      if (item.id === product.id) {
        price = item.price;
      }
    });
    setCart(
      cart.map(item => {
        if (item.id === product.id) {
          updateProduct(item);
          return {
            ...item,
            quantity: item.quantity + 1,
            price: item.price + price
          };
        }
        return item;
      })
    );
  };

  return (
    <store.Provider
      value={{ products, cart, totalPrice, addToCart, increaseItem }}
    >
      {props.children}
    </store.Provider>
  );
};

export default StoreContext;
