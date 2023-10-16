import React, { useState } from 'react';
import './styles/SearchedFilms.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/action';




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

  const handleInput = (input) => {
    setTitle(input.target.value);
    
  };

  const getFilm = async () => {
    setSearchClicked(true);
    const searchByTitleUrl = `${BASE_URL}${API_KEY}${TITLE_SEARCH_PARAM}${title}`;
  
    const response = await fetch(searchByTitleUrl);
    const filmData = await response.json();

    console.log(filmData);
    setFilmData(filmData);
  };

  return (
    <div>
{!searchClicked ? (
  <div className='initial-search'>
    <h1>FILM<span className='blue'>HOUND</span></h1>
    <input className='input' type="text" value={title} onChange={handleInput} />
    <button className='btn-search' onClick={getFilm}>Search</button>
  </div>
) : null}

      {filmData && (
         <div className='search-content'>
          
      <input type="text" value={title} onChange={handleInput} />
      <button onClick={getFilm}>Search</button>
          <h2>Search Results</h2>
          
          <ul>
            <div className="movies">
            {filmData.Search.map((film, index) => (
              <li key={index}>
                <div>
                  <img src={film.Poster} alt={film.Title} />
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
      )}
    </div>
  );
  
};

export default SearchedFilms;
