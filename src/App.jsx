import { useState } from 'react'
import './App.css'
import SearchedFilms from './components/SearchedFilms';
import Navbar from "./components/navbar"
import Home from "./styles/home"
import SearchedFilms from "./components/SearchedFilms"
import Checkout from "./components/checkout"
import {BrowserRouter as Router, Route, Routes}from "react-router-dom"



export default function App(){


return (
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
)
}