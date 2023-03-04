import React from "react";

const Card = (props) => {

    return (
        <div className="selection">
            <div>
                <img src={props.image} alt="service"></img>
            </div>
            <div className="selection_text">
                <h1>{props.header}</h1>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default Card