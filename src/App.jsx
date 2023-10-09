import { useState } from 'react'
import './App.css'

const API_KEY = "973b4444";
const BASE_URL = "http://www.omdbapi.com/?apikey=";
const URL = `${BASE_URL}${API_KEY}`;
const TITLE_SEARCH_PARAM = "&s="; // https://www.omdbapi.com/ API parameters

console.log(`API URL: ${URL}`);

function App() {
  const [title, setTitle] = useState("");

  const handleInput = (input) => {
    setTitle(input.target.value);
  }

  const getFilm = async () => {
    const searchByTitleUrl = URL + TITLE_SEARCH_PARAM;
  
    const response = await fetch(searchByTitleUrl + title);
    const filmData = await response.json();
  
    console.log(filmData);
  }
  



  return (
    <div>
      <h1>Film Hound</h1>
      <input type="text" value={title} onChange={handleInput} />
      <button onClick={getFilm}>Search</button>
      <button>Browse</button>
    </div>
  )
}

export default App;
