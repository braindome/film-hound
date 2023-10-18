import HomeIcon from "/src/assets/home_Icon.png";
import SearchIcon from "/src/assets/icon_search.png";
import ShoppingIcon from "/src/assets/icon_shopping.png";
import UserLogin from "./UserLogin";
import { actions } from "../features/findReducer";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const cartSize = cartItems.length;
  const [filmTitle, setFilmTitle] = useState("");
  const dispatch = useDispatch();

  const handleSearchString = () => {
    dispatch(actions.findFilm(filmTitle));
    console.log(filmTitle);

    // Hide the search input after pressing the search icon
    setSearchVisible(false);

    // Clear the search input
    setFilmTitle("");
  };

  const toggleSearchInput = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="navbar">
      <UserLogin />

      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/home">
          <h1 className="title">
            FILM<span className="blue">HOUND</span>
          </h1>
        </Link>
        
        <div className="hiddenLinks"></div>
      </div>
      <div className="rightSide">
      <Link to="/home">
        <img className="home-icon" src={HomeIcon} alt="home" />
        </Link>
        {searchVisible ? (
          <>
            <input
              type="text"
              value={filmTitle}
              onChange={(e) => setFilmTitle(e.target.value)}
              className="input2"
            />
            <Link to="/SearchedFilms">
              <button onClick={handleSearchString} id="nav-btn">
                <img src={SearchIcon} alt="Search" /> Search
              </button>
            </Link>
          </>
        ) : (
          <a onClick={toggleSearchInput} id="nav-btn">
            <img src={SearchIcon} alt="Search" />
          </a>
        )}
        <Link to="/checkout">
          <div className="cart_icon_wrapper">
            {cartSize > 0 && <p>{cartSize}</p>}
            <img src={ShoppingIcon} />
          </div>
        </Link>
      </div>
    </div>
  );
}
