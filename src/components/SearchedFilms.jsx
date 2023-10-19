import React, { useState, useEffect } from "react";
import "./styles/SearchedFilms.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/action";
import SearchItem from "./SearchItem.jsx";

const API_KEY = "973b4444";
const BASE_URL = "https://www.omdbapi.com/?apikey=";
const TITLE_SEARCH_PARAM = "&s=";

const SearchedFilms = () => {
  const dispatch = useDispatch();

  const filmTitle = useSelector((state) => state.film.film);
  console.log("Title of film from navbar: " + filmTitle);

  const handleBuy = (film) => {
    dispatch(addToCart(film));
  };

  const [title, setTitle] = useState(filmTitle);
  const [filmData, setFilmData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTitle(filmTitle);
    if (filmTitle) {
      getFilm();
    }
  }, [filmTitle]);

  useEffect(() => {
    setTitle(filmTitle);
    if (filmTitle) {
      getFilm();
    }
  }, [title]);




  const handleFilmDetailsClick = (film) => {
    console.log("Clicking on preview", film);
    setSelectedFilm(film);
  };

  const getFilmDetails = async (imdbID) => {
    const apiUrl = `${BASE_URL}${API_KEY}`;
    const fullPlot = "&plot=full";
    const filmIdParam = "&i=";

    const filmUrl = apiUrl + filmIdParam + imdbID + fullPlot;

    console.log(filmUrl);

    try {
      const response = await fetch(filmUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
     
      return data;
    } catch (error) {
      console.error("Error fetching film: ", error);
      throw error;
    }
  };

  const getFilm = async () => {
    setSearchClicked(true);
    const searchByTitleUrl = `${BASE_URL}${API_KEY}${TITLE_SEARCH_PARAM}${title}`;

    try {
      const response = await fetch(searchByTitleUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const filmData = await response.json();

      if (filmData.Response === "False") {
        console.log("Movie not found");
        setMessage("Movie not found please try again!");
        setSearchClicked(false);
        setFilmData(null);
      } else {
        console.log(filmData);
        setFilmData(filmData);
        setSearchClicked(true);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };




  return (
    <div>
      {!searchClicked ? (
       
       <div className="noSearch-content">
          <h2 className="noResult">{message}</h2>
  </div>
      ) : null}
      {filmData ? (
        <div className="search-content">
          <h2>Search Results</h2>

          <ul>
            <div className="movies">
              {filmData.Search.map((film, index) => (
                <li key={index}>
                  <SearchItem
                    //key={index}
                    film={film}
                    handleBuy={handleBuy}
                    getFilmDetails={getFilmDetails}
                  />
                </li>
              ))}
            </div>
          </ul>
        </div>
      ) : null}
    </div>
  );
};


export default SearchedFilms;
