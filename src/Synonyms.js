import React from "react";
import "./dictionary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="synonym">
        {props.synonyms.map(function(synonym, index) {
          return (
            <li key={index}>
              {" "}
              Synonym:
              <em> {synonym}</em>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
