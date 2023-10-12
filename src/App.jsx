import Navbar from "./components/navbar"
import Home from "./components/home"
import SearchedFilms from "./components/SearchedFilms"
import Checkout from "./components/checkout"
import "./App.css"
import {BrowserRouter as Router, Route, Routes}from "react-router-dom"



export default function App(){


return (
<div className="app">
   <Router>

<Navbar />

<Routes>
<Route path ="/home" exact element={<Home/>}/>
<Route path="/" exact element={<Home/>}/>

<Route path="/SearchedFilms" exact element={<SearchedFilms/>}/>
<Route path="/checkout" exact element={<Checkout/>}/>


</Routes>




</Router>
</div>
)
}

