import React from "react";
import Header from "../layout/header/Header";
import { Link } from "react-router-dom";
import Button from "../general/Button";

function Quiz() {
  return (
    <div className="quiz">
      <Header />
      <h2 className="quiz-header">What kind of traveler are you?</h2>
      <div className="quiz-underline" />
      <h3>Sample question with some pictures:</h3>
      <div className="answer-box">
        <div className="sample-box" />
        <div className="sample-box" />
        <div className="sample-box" />
        <div className="sample-box" />
      </div>
      <Link to="/profile">
        <Button
          title="Get Results"
          onClick={null}
          className="get-results-button"
        />
      </Link>
    </div>
  );
}

export default Quiz;
