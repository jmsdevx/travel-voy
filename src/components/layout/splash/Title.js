import React from "react";
import Button from "../../general/Button";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div className="title">
      <h1 className="new-title">New To Travel Voy?</h1>
      <span className="quiz-link">
        <Link to="/quiz" className="spacer">
          <Button
            title="Take The Quiz!"
            onClick={null}
            className="start-button"
          />
          <i className="material-icons">school</i>
        </Link>
      </span>
    </div>
  );
}

export default Title;
