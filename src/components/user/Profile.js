import React from "react";
import Header from "../layout/header/Header";
import Pictures from "./Pictures";
import Trips from "../trips/Trips";

function Profile() {
  return (
    <div>
      <div className="profile">
        <Pictures />
        <Trips />
      </div>
      <Header />
    </div>
  );
}

export default Profile;
