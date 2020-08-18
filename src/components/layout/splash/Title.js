import React, { useEffect, useState } from "react";
import Button from "../../general/Button";
import { Link } from "react-router-dom";
import Logo from '../../../assets/voylogo.svg';

function Title() {

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
    <div className="title">
      <img src={Logo} alt="" className={`big-logo ${animate && 'an-big-logo'}`} />
      <h1 className="new-title">New To Travel Voy?</h1>
      <div className={`overlay-top ${animate && 'animate'}`} />
      <div className={`overlay-bottom ${animate && 'animate'}`} />
      <span className={`quiz-link ${animate && 'animate-button'}`} >
      { showText &&
        <>
        <Link to="/quiz" className="spacer">
          <Button
            title="Take The Quiz!"
            onClick={null}
            className="start-button"
          />
          <i className="material-icons">school</i>
        </Link>
        </>
      }
      </span>
    </div>
  );
}

export default Title;
