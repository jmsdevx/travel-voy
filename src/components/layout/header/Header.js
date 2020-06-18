import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/voylogo.svg";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="home">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
    </div>
  );
}

export default Header;
