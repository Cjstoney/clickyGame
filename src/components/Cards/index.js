import React from "react";
import "./style.css";

function OfficeCards(props){
    return(
        <div className="card">
            <div className="img-container">
               <a id={props.id}> <img alt={props.name} src={props.image} /> </a>
            </div>
        </div>

    )
}
export default OfficeCards;
