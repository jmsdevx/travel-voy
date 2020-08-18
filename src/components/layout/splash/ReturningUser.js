import React, { useState, useEffect } from "react";
import Button from "../../general/Button";
import { Link } from "react-router-dom";

function ReturningUser() {
  const [animate, setAnimate] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(()=> {
    const timer = setTimeout(() => {
      setAnimate(true);
      const textTimer = setTimeout(() => {
        setShowText(true)
      }, 200);
      return () => clearTimeout(textTimer)
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`returning ${animate && 'animate-button'}`}>
      {
        showText &&
        <>
      <i className="material-icons">login</i>
      <Link to="/login">
        <span>Returning?</span>
        <Button title="Login" onClick={null} className="returning-button" />
      </Link>
      </>
      }
    </div>
  );
}

export default ReturningUser;
