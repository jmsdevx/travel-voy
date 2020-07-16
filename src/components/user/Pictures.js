import React from "react";
import Info from "./Info";
import hero from "../../assets/Stockholm.jpg";
import selfie from "../../assets/Helsinki.PNG";

function Pictures() {
  const coverStyle = {
    width: "100%",
    height: "30vh",
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const selfieStyle = {
    width: "30vw",
    height: "30vw",
    backgroundImage: `url(${selfie})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: ".5vh solid white",
    borderRadius: "50%",
  };

  return (
    <div className="pictures">
      <img className="hero" style={coverStyle} />
      <Info />
      <img className="selfie" style={selfieStyle} />
    </div>
  );
}

export default Pictures;
