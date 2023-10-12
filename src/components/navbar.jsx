import Logo from '/src/assets/Logo.png'
import Logo from '/src/assets/home_Icon.png'
import Logo from '/src/assets/icon_search.png'
import Logo from '/src/assets/icon_shopping.png'

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

<Link to= "/home"><img src= {Home_Icon}/></Link>
<Link to= "/SearchedFilms"><img src= {icon_search}/></Link>
<Link to= "/checkout"><img src= {icon_shopping}/></Link>


</div>




</div>




)


    
}