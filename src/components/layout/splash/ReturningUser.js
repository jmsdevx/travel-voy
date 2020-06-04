import React from "react";
import Button from "../../general/Button";
import { Link } from "react-router-dom";

function ReturningUser() {
  return (
    <div className="returning">
      <span>Returning User?</span>
      <Link to="/login">
        <Button title="Login" onClick={null} className="returning-button" />
      </Link>
    </div>
  );
}

export default ReturningUser;
