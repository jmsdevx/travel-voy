import React from "react";
import './Info.scss';

function Info() {
  return (
    <>
      <div className="info">
        <div className="info-pair">
          <i className="material-icons">face</i>
          <h4 className="info-blurb">Renee Strecker</h4>
        </div>
        <div className="info-pair">
          <i className="material-icons">language</i>
          <h4 className="info-blurb">Traveler Persona</h4>
        </div>
        <div className="info-pair">
          <i className="material-icons">home</i>
          <h4 className="info-blurb">Home City</h4>
        </div>
        <div className="edit">
          <button>
            <i className="material-icons">edit</i>
            <p>Edit</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Info;
