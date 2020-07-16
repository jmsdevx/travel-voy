import React from "react";
import New from "./New";
import Upcoming from "./Upcoming";
import Past from "./Past";

function Trips() {
  return (
    <div className="trips">
      <New />
      <div className="white-underline" />
      <Upcoming />
      <Past />
    </div>
  );
}

export default Trips;
