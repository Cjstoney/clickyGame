import React from "react";
import "./style.css";

function OfficeCards(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <span id={props.id} > <img className="image" alt={props.name} src={props.image} /> </span>

        </div>

    )
}
export default OfficeCards;
