import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function(synonym, index) {
          return (
            <div key={index}>
              {" "}
              <strong> Synonym: {synonym} </strong>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
