import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart_wrapper">
      <h2>Cart</h2>
      {cartItems.map((film, index) => (
        <CartItem key={index} film={film} />
      ))}
    </div>
  );
};

export default ShoppingCart;
