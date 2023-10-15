import Navbar from "./components/navbar";
import Home from "./components/home";
import SearchedFilms from "./components/SearchedFilms";
import Checkout from "./components/checkout";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />   
          <Route path="/SearchedFilms" element={<SearchedFilms />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}


