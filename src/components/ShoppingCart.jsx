import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./CartItem";
import "./styles/ShoppingCart.css";

import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const username = useSelector((state) => state.user.username);
  const total = cartItems.length * 39;

  return (
    <div className="cart_wrapper">
      <h2>Shopping Cart</h2>
      <h3>Here's your cart, {username} </h3>
      {cartItems.map((film, index) => (
        <CartItem key={index} film={film} />
      ))}
      <h4>Total items: {cartItems.length} </h4>
      <div className="checkout_row">
        <h3>Total: {total} kr </h3>
        <Link to="/payment">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
