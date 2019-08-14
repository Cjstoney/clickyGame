import React from "react";
import "./Header.css";

function Header(props){
    return(

    <div className="navBarContainer">
    <p className="nav-text" id="title-name">Clicky Game!</p>
    <p className="nav-text" id="current-score">Score: {props.score}</p>
    <p className="nav-text" id="high-score">Highscore: {props.highScore}</p>


  
    </div>
    );
}
export default Header;