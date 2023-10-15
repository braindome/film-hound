import Logo from "/src/assets/Logo.png";
import HomeIcon from "/src/assets/home_Icon.png";
import SearchIcon from "/src/assets/icon_search.png";
import ShoppingIcon from "/src/assets/icon_shopping.png";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
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
          <img src={ShoppingIcon} />
        </Link>
      </div>
    </div>
  );
}
