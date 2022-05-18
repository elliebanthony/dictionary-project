import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning m-4 p-3 shadow-md">
      {" "}
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            {" "}
            <p>
              {" "}
              <strong> Definition: </strong> {definition.definition}
            </p>
            <p>
              {" "}
              <em> {definition.example} </em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
