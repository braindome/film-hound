import Logo from "/src/assets/Logo.png";
import HomeIcon from "/src/assets/home_Icon.png";
import SearchIcon from "/src/assets/icon_search.png";
import ShoppingIcon from "/src/assets/icon_shopping.png";
import UserLogin from "./UserLogin";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const cartSize = cartItems.length;

  return (
    <div className="navbar">
      <UserLogin />

      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <h1 className="title">FILM<span className='blue'>HOUND</span></h1>
        <div className="hiddenLinks"></div>
      </div>
      <div className="rightSide">
        <Link to="/home">
          <img src={HomeIcon} />
        </Link>
        <Link to="/SearchedFilms">
          <img src={SearchIcon} />
        </Link>
        <Link to="/checkout">
          <div className="cart_icon_wrapper" >
            {cartSize > 0 && <p>{cartSize}</p>}
            <img src={ShoppingIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
}

