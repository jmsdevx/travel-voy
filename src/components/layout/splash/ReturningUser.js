import React from "react";
import Button from "../../general/Button";

function ReturningUser() {
  return (
    <div className="returning">
      <span>Returning User?</span>
      <Button title="Login" onClick={null} className="returning-button" />
    </div>
  );
}

export default ReturningUser;
