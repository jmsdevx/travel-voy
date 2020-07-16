import React from "react";
import amsterdam from "../../../assets/Amsterdam.jpg";
import dubai from "../../../assets/Dubai.jpg";
import morocco from "../../../assets/Morocco.jpg";
import gothenburg from "../../../assets/Gothenburg.jpg";

function Past() {
  const imageObject = {
    Amsterdam: amsterdam,
    Dubai: dubai,
    Morocco: morocco,
    Gothenburg: gothenburg,
  };

  const renderUpcoming = (imageObject) => {
    const imagesArray = Object.keys(imageObject);

    const renderImages = imagesArray.map((e, i) => {
      const imageStyle = {
        backgroundImage: `url(${imageObject[e]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: ".5vh solid white",
        borderRadius: "50%",
        height: "100%",
        width: "100%",
      };
      return (
        <div className="pics" key={i}>
          <img style={imageStyle} />
          <p>{e}</p>
        </div>
      );
    });

    return renderImages;
  };

  return (
    <div className="past">
      <h3>PAST TRIPS</h3>
      <div className="past-inner">{renderUpcoming(imageObject)}</div>
    </div>
  );
}

export default Past;
