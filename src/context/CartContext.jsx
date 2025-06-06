//this is shopping cart context

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(); // this creates context obj that will be used to share cart-ralated data to components without pass props manually

export const CartProvider = ({ children }) => {
  // this is context provider component
  const [cartItems, setCartItems] = useState(() => {
    //initializescartItems from locolStorage if available
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // if cartItems cahnges it run and updates localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // adds product to cart
    //if prod. already exists,it increases (qty)
    //otherwise adds prod. with qty of 1
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  return (
    //Passes the current cart state and functions down to any child component that consumes the context.
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); //This is a custom hook that allows any component to easily use the cart context by calling useCart().
// It avoids needing to write useContext(CartContext) every time
