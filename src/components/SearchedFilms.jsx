import React, { useState } from 'react';
import './styles/SearchedFilms.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/action';
import fallback from '/src/assets/NoImage.png';




const API_KEY = '973b4444';
const BASE_URL = 'http://www.omdbapi.com/?apikey=';
const TITLE_SEARCH_PARAM = '&s=';

const SearchedFilms = () => {

  const dispatch = useDispatch();

  const handleBuy = (film) => {
    dispatch(addToCart(film));
  };

  const [title, setTitle] = useState('');
  const [filmData, setFilmData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false); 
  const [message, setMessage] = useState('');

  const handleInput = (input) => {
    setTitle(input.target.value);
    
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
        setMessage ("Movie not found");
        setSearchClicked(false);
        setFilmData(null);
      } else {
        console.log(filmData);
        setFilmData(filmData);
       
      }
    } catch (error) {
      console.error("Error fetching data:", error);
  
    }
  };

  return (
    <div>
{!searchClicked ? (
  <div className='initial-search'>
     <h2 className='noResult'>{message}</h2>
    <h1>FILM<span className='blue'>HOUND</span></h1>
    <input className='input' type="text" value={title} onChange={handleInput} />
    <button className='btn-search' onClick={getFilm}>Search</button>
  </div>
) : null}

      {filmData ?  (
         <div className='search-content'>

          <h1>Film Hound</h1>
         

      <input type="text" value={title} onChange={handleInput} />
      <button onClick={getFilm}>Search</button>
          <h2>Search Results</h2>
          
          <ul>
            <div className="movies">
            {filmData.Search.map((film, index) => (
              <li key={index}>
                <div>
                <div className='posterContainer'>
                  <img className="poster" src={film.Poster} 
                  onError={(e) => (e.currentTarget.src = fallback)} alt={film.Title} />
                  </div>
                  <div>
                    <h3>{film.Title}</h3>
                    <p>Type: {film.Type}</p>
                    <p>Year: {film.Year}</p>
                    <p>IMDB ID: {film.imdbID}</p>
                    <a href={`http://www.imdb.com/title/${film.imdbID}`}>IMDB Page</a>
                  </div>
                  <button className="buyMovieBtn" onClick={() => handleBuy(film)} >Buy</button>
                </div>
                <p>---------------------------------------------------------------------</p>
              </li>
              
              
            ))}
            </div>
          </ul>
          
        </div>
      ):null}
    </div>
  );
  
};

export default SearchedFilms;
