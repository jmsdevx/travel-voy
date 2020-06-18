import React from "react";
import Header from "../layout/header/Header";
import Pictures from "./Pictures";
import Trips from "../trips/Trips";

function Profile() {
  return (
    <div>
      <Header />
      <div className="profile">
        <Pictures />
        <Trips />
      </div>
    </div>
  );
}

export default Profile;
