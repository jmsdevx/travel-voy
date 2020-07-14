import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo_grey.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="home">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <div className="logo-nav">
        <i class="material-icons">question_answer</i>
        <i class="material-icons">preview</i>
        <i class="material-icons">flight_takeoff</i>
        <i class="material-icons">face</i>
        <i class="material-icons">card_travel</i>
      </div>
    </div>
  );
}

export default Header;
