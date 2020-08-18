import React from "react";
import Button from "../../general/Button";
import { Link } from "react-router-dom";

function ReturningUser() {
  return (
    <div className="returning">
      <i className="material-icons">login</i>
      <Link to="/login">
        <span>Returning?</span>
        <Button title="Login" onClick={null} className="returning-button" />
      </Link>
    </div>
  );
}

export default ReturningUser;
