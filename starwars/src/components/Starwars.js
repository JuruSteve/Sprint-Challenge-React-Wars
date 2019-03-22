import React from "react";
import StarwarsCharacter from "./StarwarsCharacter";
import "./StarWars.css";
const Starwars = props => {
  return (
    <div className="starwars-container">
      <ul className="starwars-character-list">
        {props.starwarsCast.map((char, i) => {
          return <StarwarsCharacter key={i} starwarsCharacter={char} />;
        })}
      </ul>
    </div>
  );
};

export default Starwars;
