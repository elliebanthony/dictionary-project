import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function(index, synonym) {
          return <div key={index}> {synonym} </div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
