import React from "react";
import Header from "../layout/header/Header";
import background from "../../assets/Gothenburg.jpg";
import selfie from "../../assets/Helsinki.PNG";

function Profile() {
  return (
    <div>
      <Header />
      <div className="profile">
        <div className="pictures">
          <div className="info">
            <h4 className="name">Renee Strecker</h4>
            <h4 className="name">Traveler Type</h4>
            <h4 className="name">Additional Info</h4>
          </div>
          <div className="edit">
            <button>Edit/View</button>
          </div>
          <img className="background" src={background} />
          <img className="selfie" src={selfie} />
        </div>
        <div className="content">
          <div className="new">
            <h3>New Trip</h3>
            <p>+</p>
          </div>
          <div className="upcoming">
            <h3>Upcoming Trips</h3>
            <div className="up-inner">
              <p>O</p>
              <p>O</p>
              <p>O</p>
            </div>
          </div>
          <div className="past">
            <h3>Past Trips</h3>
            <div className="past-inner">
              <p>X</p>
              <p>X</p>
              <p>X</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
