import React from "react";
// import nashville from "../../../assets/nashville.jpg";
// import napa from "../../../assets/napa.jpeg";
// import newyork from "../../../assets/newyork.jpg";
// import lisbon from "../../../assets/lisbon.jpeg";
import { connect } from 'react-redux';
import Trip from './Trip';
import actions from '../../ducks/actions';
import { Row, Col, } from 'react-bootstrap';


function Upcoming({
  upcomingTrips,
}) {
  // const imageObject = {
  //   Nashville: nashville,
  //   Napa: napa,
  //   "New York City": newyork,
  //   Lisbon: lisbon,
  // };

  // const renderUpcoming = (imageObject) => {
  //   const imagesArray = Object.keys(imageObject);
  //   console.log(imagesArray);

  //   const renderImages = imagesArray.map((e, i) => {
  //     const imageStyle = {
  //       backgroundImage: `url(${imageObject[e]})`,
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //       border: ".5vh solid white",
  //       borderRadius: "50%",
  //       height: "100%",
  //       width: "100%",
  //     };
  //     return (
  //       <div className="pics" key={i}>
  //         <img style={imageStyle} alt="upcoming trip" />
  //         <p>{e}</p>
  //       </div>
  //     );
  //   });
  //   return renderImages;
  // };

  return (
    <div className="container-fluid">
      <Row className="trip-container">
        <Col md={6} className="trips-title mb-3">
          <h2 className="display-4">Upcoming Trips</h2>
        </Col>

        <Row className="justify-content-md-center">
          {
            upcomingTrips.map((trip, i) => {
              return (
                <Col sm={6} md={3} key={i} className="d-flex justify-content-center mb-4">
                  <Trip id={trip.id} image={trip.picture} location={trip.location} dateStart={trip.dateStart} dateEnd={trip.dateEnd} />
                </Col>
              );
            })
          }
        </Row>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    upcomingTrips: state.trips.data.upcomingTrips,
  }
}

export default connect(mapStateToProps, actions)(Upcoming);
