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
    products.forEach(productItem => {
      // match prodcut id with cart product id
      console.log(product.id, productItem.id);
      if (productItem.id === product.id) {
        // checking available quantity in product
        if (productItem.qtty >= 1) {
          // update cart price according to the product price
          setCart(
            cart.map(cartItem => {
              if (cartItem.id === product.id) {
                let price = productItem.price * (product.quantity + 1);
                return {
                  ...product,
                  quantity: product.quantity + 1,
                  price
                };
              }
              return cartItem;
            })
          );
          updateProduct(product);
        }
      }
    });
  };

  const decreaseItem = product => {
    if (product.quantity > 1) {
      products.forEach(productItem => {
        if (product.id === productItem.id) {
          // update cart quantity
          let price = productItem.price * (product.quantity - 1);
          setCart(
            cart.map(cartItem => {
              if (cartItem.id === product.id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                  price
                };
              }
              return cartItem;
            })
          );
          // update product quantity
          setProducts(
            products.map(item => {
              if (item.id === product.id) {
                return {
                  ...item,
                  qtty: item.qtty + 1
                };
              }
              return item;
            })
          );
        }
      });
    }
  };

  const removeFromCart = product => {
    setCart(
      cart.filter(cartItem => {
        return cartItem.id !== product.id;
      })
    );
    // alter product incart value
    setProducts(
      products.map(productItem => {
        if (productItem.id === product.id) {
          return {
            ...productItem,
            inCart: false,
            qtty: productItem.qtty + product.quantity
          };
        }
        return productItem;
      })
    );
  };

  const getProductData = id => {
    let product;
    products.forEach(item => {
      if (item.id === id) {
        product = item;
      }
    });
    return product;
  };

  return (
    <store.Provider
      value={{
        products,
        cart,
        totalPrice,
        addToCart,
        increaseItem,
        getProductData,
        decreaseItem,
        removeFromCart
      }}
    >
      {props.children}
    </store.Provider>
  );
};

export default StoreContext;

// products.forEach(itemProduct => {
//   console.log(product.id, itemProduct.id);
//   if (itemProduct.id === product.id) {
//     if (product.quantity > 1) {
//       setCart(
//         cart.map(item => {
//           if (item.id === product.id) {
//             return {
//               ...item,
//               quantity: item.quantity - 1,
//               price: item.price - itemProduct.price
//             };
//           }
//           return item;
//         })
//       );
//     } else if (product.quantity === 1) {
//       console.log("only one left");
//     }
//     setProducts(
//       products.map(item => {
//         if (item.id === product.id) {
//           return {
//             ...item,
//             qtty: item.qtty - 1
//           };
//         }
//       })
//     );
//   }
// });
