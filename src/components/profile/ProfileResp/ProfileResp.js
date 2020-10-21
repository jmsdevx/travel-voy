import React from 'react';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';
import SideNav from '../../layout/sideNav/SideNav';
import hero from '../../../assets/Amsterdam.jpg';
import './ProfileResp.scss';
import Info from '../../user/Info';
import selfie from "../../../assets/Helsinki.PNG";
import nashville from '../../../assets/nashville.jpg';
import napa from '../../../assets/napa.jpeg';
import newyork from '../../../assets/newyork.jpg';
import lisbon from '../../../assets/lisbon.jpeg';
import amsterdam from '../../../assets/Amsterdam.jpg';
import dubai from '../../../assets/Dubai.jpg';
import morocco from '../../../assets/Morocco.jpg';
import gothenburg from '../../../assets/Gothenburg.jpg';


function ProfileResp() {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  return (
    <>
    <SideNav />
    <Container fluid className="profile-container">
      <Jumbotron fluid style={heroStyle} className="hero-image" />
      <Row className="border-bottom">
        <Col md={{span: 5, offset: 1}} className="profile-info">
          <Info />
        </Col>
        <Col md={5} className="profile-pic">
          <Image src={selfie} roundedCircle className="selfie" />
        </Col>
      </Row>
      <Row>
        <Col md={{span: 5, offset: 1 }} className="new-trip">
          <h2 className="display-4">New Trip</h2>
          <i className="material-icons">add_circle_outline</i>
        </Col>
      </Row>
      <Row className="upcoming-container">
        <Col md={{span: 3, offset: 1}} className="upcoming-title">
          <h2 className="display-4">Upcoming Trips</h2>
        </Col>
        <Row>
          <Col md={{span: 1, offset: 1}}>
            <div className="pic-container">
              <Image src={nashville} roundedCircle className="upcoming-pic"/>
              <p className="pic-text">Nashville</p>
            </div>
          </Col>
          <Col md={{span: 1, offset: 2}}>
            <div className="pic-container">
              <Image src={napa} roundedCircle className="upcoming-pic" />
              <p className="pic-text">Napa</p>
            </div>
          </Col>
          <Col md={{span: 1, offset: 2}}>
            <div className="pic-container">
              <Image src={newyork} roundedCircle className="upcoming-pic" />
              <p className="pic-text">New York City</p>
            </div>
          </Col>
          <Col md={{span: 1, offset: 2}}>
            <div className="pic-container">
              <Image src={lisbon} roundedCircle className="upcoming-pic" />
              <p className="pic-text">Lisbon</p>
            </div>
          </Col>
        </Row>
      </Row>
      <Row className="upcoming-container">
      <Col md={{span: 2, offset: 1}} className="upcoming-title">
          <h2 className="display-4">Past Trips</h2>
        </Col>
        <Row>
          <Col md={{span: 1, offset: 1}}>
            <div className="pic-container">
              <Image src={amsterdam} roundedCircle className="upcoming-pic"/>
              <p className="pic-text">Amsterdam</p>
            </div>
          </Col>
          <Col md={{span: 1, offset: 2}}>
            <div className="pic-container">
              <Image src={dubai} roundedCircle className="upcoming-pic" />
              <p className="pic-text">Dubai</p>
            </div>
          </Col>
          <Col md={{span: 1, offset: 2}}>
            <div className="pic-container">
              <Image src={morocco} roundedCircle className="upcoming-pic" />
              <p className="pic-text">Morocco</p>
            </div>
          </Col>
          <Col md={{span: 1, offset: 2}}>
            <div className="pic-container">
              <Image src={gothenburg} roundedCircle className="upcoming-pic" />
              <p className="pic-text">Gothenburg</p>
            </div>
            </Col>
            </Row>

      </Row>
    </Container>
    </>
  )
}

export default ProfileResp;
