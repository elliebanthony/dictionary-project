import React from "react";
import "./dictionary.css";

export default function Phonetics(props) {
  return (
    <span className="phonetics">
      {" "}
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        {" "}
        Listen{" "}
      </a>
      {props.phonetic.text}{" "}
    </span>
  );
}
