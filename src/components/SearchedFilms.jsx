import React from 'react';

const SearchedFilms = ({ filmData }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {filmData.Search.map((film, index) => (
          <li key={index}>
            <div className="film-item">
              <div className="film-image">
                <img src={film.Poster} alt={film.Title} />
              </div>
              <div className="film-details">
                <h3>{film.Title}</h3>
                <p>Type: {film.Type}</p>
                <p>Year: {film.Year}</p>
                <p>IMDB ID: {film.imdbID}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedFilms;
