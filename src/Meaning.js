import React from "react";

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
              <strong> {definition.definition} </strong>{" "}
            </p>
            <hr />
            <p>
              {" "}
              <em> {definition.example} </em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
