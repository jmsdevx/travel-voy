import React from "react";
import background from "../../assets/Gothenburg.jpg";
import selfie from "../../assets/Helsinki.PNG";

function Pictures() {
  return (
    <div className="pictures">
      <div className="info">
        <h4 className="name">Renee Strecker</h4>
        <h4 className="name">Traveler Type</h4>
        <h4 className="name">Additional Info</h4>
      </div>
      <div className="edit">
        <button>Edit/View</button>
      </div>
      <img className="background" src={background} />
      <img className="selfie" src={selfie} />
    </div>
  );
}

export default Pictures;
