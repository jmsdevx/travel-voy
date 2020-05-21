import React from "react";

function Splash() {
  return (
    <div>
      <a href={`${process.env.REACT_APP_SERVER}/login`}>Login</a>
    </div>
  );
}

export default Splash;
