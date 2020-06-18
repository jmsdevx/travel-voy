import React from "react";
import New from "./New";
import Upcoming from "./Upcoming";
import Past from "./Past";

function Trips() {
  return (
    <div className="trips">
      <New />
      <Upcoming />
      <Past />
    </div>
  );
}

export default Trips;
