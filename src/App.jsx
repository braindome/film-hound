import { useState } from 'react'
import './App.css'
import SearchedFilms from './components/SearchedFilms';
import Navbar from "./components/navbar"
import Home from "./styles/home"
import SearchedFilms from "./components/SearchedFilms"
import Checkout from "./components/checkout"

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

/*---------------------------/*
// Tänkte att detta skulle vara det ända på denna fil så själva grunden
 hur varje sida ska se ut finns . 

<div className="app">
   <Router>

<Navbar />

<Routes>
<Route path="/home" exact element={<Home/>}/>
<Route path="/" exact element={<Home/>}/>

<Route path="/SearchedFilms" exact element={<SearchedFilms/>}/>
<Route path="/checkout" exact element={<Checkout/>}/>


</Routes>

<Footer />


</Router>
</div>
/*---------------------------*/
