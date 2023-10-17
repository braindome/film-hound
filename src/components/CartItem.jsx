import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/action";
import "./styles/CartItem.css";
import fallback from '/src/assets/NoImage.png';

const CartItem = ({ film }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(film));
  };

  return (
    <div className="cart_item">
      <img src={film.Poster} 
                  onError={(e) => (e.currentTarget.src = fallback)} alt="" />
      <h4>{film.Title}</h4>
      <h4>39 kr</h4>
      <button className="remove_btn" onClick={handleRemoveFromCart}>
        -
      </button>
    </div>
  );
};

export default CartItem;
