import React from "react";
// import amsterdam from "../../../assets/Amsterdam.jpg";
// import dubai from "../../../assets/Dubai.jpg";
// import morocco from "../../../assets/Morocco.jpg";
// import gothenburg from "../../../assets/Gothenburg.jpg";
import { connect } from 'react-redux';

import Trip from './Trip';
import { Row, Col, } from 'react-bootstrap';
import actions from '../../../ducks/actions';

function Past({
  pastTrips
}) {
  // const imageObject = {
  //   Amsterdam: amsterdam,
  //   Dubai: dubai,
  //   Morocco: morocco,
  //   Gothenburg: gothenburg,
  // };

  // const renderUpcoming = (imageObject) => {
  //   const imagesArray = Object.keys(imageObject);

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
  //         <img style={imageStyle} alt="past trip" />
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
          <h2 className="display-4">Past Trips</h2>
        </Col>
        {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
        <Row className="justify-content-md-center">
          {
            pastTrips.map((trip, i) => {
              return (
                // <Col md={{ span: 1, offset: 1 }}>
                <Col key={i} sm={6} md={3} className="d-flex justify-content-center mb-4">
                  <Trip id={trip.id} image={trip.picture} location={trip.location} dateStart={trip.dateStart} dateEnd={trip.dateEnd} />
                </Col>
              );
            })
          }
        </Row>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pastTrips: state.trips.data.pastTrips,
  }
}

export default connect(mapStateToProps, actions)(Past);
