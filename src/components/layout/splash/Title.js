import React from "react";
import Button from "../../general/Button";
import { Link } from "react-router-dom";
import TextCarousel from "./TextCarousel";

function Title() {
  return (
    <div className="title">
      <span className="new-title">New To Travel Voy?</span>
      {/* <TextCarousel /> */}
      <p className="text-carousel">Where do you want to go?</p>
      <p className="carousel-nav">{".   .   ."}</p>
      <span className="quiz-link">
        <Link to="/quiz" className="spacer">
          <Button
            title="Take The Quiz!"
            onClick={null}
            className="start-button"
          />
          <i class="material-icons">flight_takeoff</i>
        </Link>
      </span>
    </div>
  );
}

export default Title;
