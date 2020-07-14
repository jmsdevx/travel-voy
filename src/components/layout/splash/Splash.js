import React from "react";
import Header from "../header/Header";
import Background from "./Background";
import Title from "./Title";
import ReturningUser from "./ReturningUser";

function Splash() {
  return (
    <div className="page">
      <Background />
      <Title />
      <ReturningUser />
      <Header />
    </div>
  );
}

export default Splash;
