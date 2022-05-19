import React from "react";

export default function Photos(props) {
  console.log(props);
  return (
    <div className="row">
      <div className="col-3">
        {" "}
        <img src={props[0]} alt="_blank" />
      </div>
      <div className="col-3">
        {" "}
        <img src={props[1]} alt="_blank" />
      </div>
      <div className="col-3">
        {" "}
        <img src={props[2]} alt="_blank" />{" "}
      </div>
    </div>
  );
}
