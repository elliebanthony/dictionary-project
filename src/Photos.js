import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos">
        <div className="row">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-3" key={index}>
                <img src={photo.src.landscape} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
