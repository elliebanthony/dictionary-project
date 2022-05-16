import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      {" "}
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        {" "}
        Listen{" "}
      </a>
      <br />
      {props.phonetic.text}{" "}
    </div>
  );
}
