import React from "react";
import nashville from "../../../assets/nashville.jpg";
import napa from "../../../assets/napa.jpeg";
import newyork from "../../../assets/newyork.jpg";
import lisbon from "../../../assets/lisbon.jpeg";

function Upcoming() {
  const imageObject = {
    Nashville: nashville,
    Napa: napa,
    "New York": newyork,
    Lisbon: lisbon,
  };

  const renderUpcoming = (imageObject) => {
    const imagesArray = Object.keys(imageObject);
    console.log(imagesArray);

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
      <h3>UPCOMING TRIPS</h3>
      <div className="past-inner">{renderUpcoming(imageObject)}</div>
    </div>
  );
}

export default Upcoming;
