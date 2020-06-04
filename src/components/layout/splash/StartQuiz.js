import React from "react";
import Button from "../../general/Button";
import { Link } from "react-router-dom";

function StartQuiz() {
  return (
    <div className="start-quiz">
      <span>New To Travel Voy?</span>
      <Link to="/quiz">
        <Button title="Take The Quiz" onClick={null} className="start-button" />
      </Link>
    </div>
  );
}

export default StartQuiz;
