import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  return (
    <div className="meaning">
      {" "}
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            {" "}
            <p>
              {" "}
              <strong> Definition: {definition.definition} </strong>{" "}
            </p>
            <hr />
            <p>
              {" "}
              <em> Example: {definition.example} </em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
