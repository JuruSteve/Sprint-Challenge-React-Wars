import React from "react";
import "./StarWars.css";

const StarwarsCharacter = props => {
  return (
    <li className="starwars-character">
      <div className="char-name">Name: {props.starwarsCharacter.name}</div>
      <div className="char-birthday">
        Birth Year: {props.starwarsCharacter.birth_year}
      </div>
      <div className="char-vehicle">
        {props.starwarsCharacter.vehicles[0]
          ? `Vehicle: ${props.starwarsCharacter.vehicles[0]}`
          : ""}
      </div>
    </li>
  );
};

export default StarwarsCharacter;
