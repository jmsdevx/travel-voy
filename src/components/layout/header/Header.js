import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="home">
        <span>Travel Voy</span>
      </Link>
    </div>
  );
}

export default Header;
