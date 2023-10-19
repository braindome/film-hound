import React from "react";
import Navbar from './navbar.jsx';
import './styles/home.css'
import iconOne from '../assets/iconOne.png'
import iconTwo from '../assets/iconTwo.png'
import iconThree from '../assets/iconThree.png'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      </div>
    );
}
/*   <Link to="/SearchedFilms">
<button className="btn-browse">BROWSE</button>
</Link>*/ 
function BackgroundSection() {
  return (
    <div className="background-one-container">
    <div className="background-section">
      <div className="background-content">
        <h1>WELCOME TO FILM<span className="blue">HOUND</span></h1>
     
      </div>
    </div>
    </div>
  );
}

function BoxesSection() {
  return (
    <div className="boxescontainer">
    <div className="boxes-section">
    <h2 className="box"> PICK A <span className="blue">MOVIE</span> <br /> <br /> <img className="ikon1" src={iconOne} alt="Icon" />
</h2>
    <h2 className="box">  RENT FOR 7 <span className="blue">DAYS</span> <br /> <br /> <img className="ikon2"src={iconTwo} alt="Icon" />
    </h2>
    <h2 className="box"> WATCH & <span className="blue">ENJOY</span> <br /> <br /> <img className="ikon3" src={iconThree} alt="Icon" />
</h2>
  </div> </div>
  );
}
function BackgroundSectionTwo() {
  return (
    <div className="backgroundtwo-section">
    <div className="backgroundtwo-content">
      <h1 className="title2">BROWSE OUR <span className="blue">LIBRARY</span> <br /> FOR HUNDREDS OF MOVIES <br /> 
      TO
       <span className="blue"> WATCH</span>.</h1>
       </div>
    </div>
  );
}

function home() {
  return (
    <div className="background-home">
      
      <BackgroundSection />
      <hr />
      <BoxesSection />
      <BackgroundSectionTwo />
    </div>
  );
}

export default home;