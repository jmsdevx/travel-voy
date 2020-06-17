import React, { useState, useEffect } from "react";
import Header from "../layout/header/Header";
import { Link } from "react-router-dom";
import Button from "../general/Button";
import Question from "./Question";
import Navigation from "./Navigation";

function Quiz() {
  const [qNumber, setQNumber] = useState(1);
  const [qTotal, setQTotal] = useState(10);
  const [qComplete, setQComplete] = useState(false);

  useEffect(() => {
    if (qNumber === qTotal) {
      setQComplete(true);
    } else {
      setQComplete(false);
    }
  });

  const navigate = (value) => {
    let next = qNumber + value;
    if (next === 0) {
      next = 1;
    } else if (next > qTotal) {
      next = qTotal;
    }
    setQNumber(next);
  };

  return (
    <div className="quiz">
      <Header />
      <h2 className="quiz-header">What kind of traveler are you?</h2>
      <div className="quiz-underline" />
      <Question />
      <Navigation current={qNumber} total={qTotal} navigate={navigate} />
      {qComplete && (
        <Link to="/profile">
          <Button
            title="Get Results"
            onClick={null}
            className="get-results-button"
          />
        </Link>
      )}
    </div>
  );
}

export default Quiz;
