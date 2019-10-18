import React from "react";
import "./App.css";
import Travel from "./Travel";

const destination1 = {
  destination:"Lisboa",
  country:"Portugal",
  photo:"https://cdn.pixabay.com/photo/2018/12/10/21/38/lisboa-3867785_960_720.jpg",
  distance:"0 kms"
};

const destination2 = {
  destination:"Porto",
  country:"Portugal",
  photo:"https://cdn.pixabay.com/photo/2019/09/16/17/53/porto-4481616_960_720.jpg",
  distance:"300 kms"
};

function App() {
  return (
    <div>
      <Travel
        destination={destination1.destination} 
        country={destination1.country}
        photo={destination1.photo}
        distance={destination1.distance}/>
  
      <Travel
        destination={destination2.destination} 
        country={destination2.country}
        photo={destination2.photo}
        distance={destination2.distance}/>
    </div>
  )
};

export default App;