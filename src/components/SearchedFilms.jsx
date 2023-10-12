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

/*---------------------------/*

const API_KEY = "973b4444";
const BASE_URL = "http://www.omdbapi.com/?apikey=";
const URL = `${BASE_URL}${API_KEY}`;
const TITLE_SEARCH_PARAM = "&s="; // https://www.omdbapi.com/ API parameters

console.log(`API URL: ${URL}`);

function App() {
  const [title, setTitle] = useState("");
  const [filmData, setFilmData] = useState(null);

  const handleInput = (input) => {
    setTitle(input.target.value);
  }

  const getFilm = async () => {
    const searchByTitleUrl = URL + TITLE_SEARCH_PARAM;
  
    const response = await fetch(searchByTitleUrl + title);
    const filmData = await response.json();
  
    console.log(filmData);
    setFilmData(filmData);
  }
  



  return (
    <div>
      <h1>Film Hound</h1>
      <input type="text" value={title} onChange={handleInput} />
      <button onClick={getFilm}>Search</button>
      <button>Browse</button>
      {filmData && <SearchedFilms filmData={filmData} />}
    </div>
  )
}

export default App;

/*---------------------------*/
