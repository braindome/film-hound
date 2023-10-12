import Logo from '/src/assets/Logo.png'
import {Link} from "react-router-dom"
import React, { useState } from 'react'
import './styles/navbar.css'


export default function navbar (){

const [openLinks, setOpenLinks] = useState(false)



return (


<div className="navbar">
<div className="leftSide" id={openLinks ? "open" : "close"}>
 <img src= {Logo}/>
 <div className="hiddenLinks">





 </div>



</div>
<div className="rightSide">

<Link to= "/home"></Link>
<Link to= "/checkout"></Link>
<Link to= "/SearchedFilms"></Link>



</div>




</div>




)


    
}