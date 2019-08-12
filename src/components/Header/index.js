import React from "react";
import "./Header.css";

function Header(props){
    return(

    <div className="navBarContainer">
    <p >Clicky Game!</p>
    <p >{props.score}</p>
    <p >{props.highScore}</p>


  
    </div>
    );
}
export default Header;