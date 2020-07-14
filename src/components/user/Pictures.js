import React from "react";
import Info from "./Info";
import hero from "../../assets/Gothenburg.jpg";
import selfie from "../../assets/Helsinki.PNG";

function Pictures() {
  return (
    <div className="pictures">
      <Info />
      <img className="hero" style={{ backgroundImage: `url(${hero})` }} />
      {/* <img className="selfie" src={selfie} /> */}
    </div>
  );
}

export default Pictures;
