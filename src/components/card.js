import React from "react";

const Card = (props) => {

    return (
        <div className="selection">
            <div className="selection_image">
                <img src={props.image} alt="service"></img>
            </div>
            <div className="selection_text">
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default Card