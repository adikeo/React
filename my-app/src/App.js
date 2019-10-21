import React from "react";
import "./App.css";
import Travels from "./Travels.js";

//Gives data to the HTML builder

function App() {
  return (
    <div>
      <Travels
        city={Travels.city} 
        country={Travels.country}
        photo={Travels.photo}
        distance={Travels.distance}/>
    </div>
  )
};

export default App;