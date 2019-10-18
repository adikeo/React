import React from "react";

const Travel = ({ destination, country, photo, distance }) => {
    return(
        <div className="root">
            <h1 className="h1">{destination}</h1>
            <h3>{country}</h3>
            <img src={photo} alt="Placeholder"/>
            <p></p><b>Cidade a {distance} de Lisboa.</b><br></br>
        </div>
    )
};

export default Travel;