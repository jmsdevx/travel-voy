import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Jumbotron, Image, Button } from 'react-bootstrap';
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
import Map from '../../map/Map';
import silo from '../../../assets/silo.jpeg';
import back from '../../../assets/back.jpeg';
import beach from '../../../assets/beach.jpg';
import mystery from '../../../assets/mystery.jpg';

import Upcoming from '../trips/Upcoming';
import Past from '../trips/Past';

import AddTrip from './AddTrip';

import {
  Dropdown,
  Spinner
} from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../ducks/auth/actions';
import * as profileActions from '../../ducks/profile/actions';
import * as tripsActions from '../../ducks/trips/actions';

function ProfileResp({
  logout,
  profilePicture,
  backgroundPicture,
  updateBackgroundPicture,
  bgImgageLoading,
  getTrips,
}) {

  useEffect(() => {
    getTrips();
  }, []);

  const heroStyle = {
    backgroundImage: `url(${backgroundPicture ? backgroundPicture : beach})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: bgImgageLoading ? "0.5" : 1
  }

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <span style={{ 'cursor': 'pointer', width: '2rem', height: '2rem' }} className="material-icons">more_horiz</span>
      {children}
    </a>
  ));

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    console.log(e.target.files);

    updateBackgroundPicture(e.target.files[0]);
  }

  const handleBtnClick = () => {
    inputFileRef.current.click();
  }
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SideNav />
      <Container fluid className="profile-container">
        <Jumbotron fluid style={heroStyle} className="hero-image p-0 text-right pr-4 pt-2">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
            </Dropdown.Toggle>
            <Dropdown.Menu size="sm" title="">
              {/* <Dropdown.Header>Options</Dropdown.Header> */}
              <input
                type="file"
                ref={inputFileRef}
                onChange={onFileChange}
                className="d-none"
              />
              <Dropdown.Item onClick={handleBtnClick}>Update Background Image</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className={bgImgageLoading ? "show-spinner" : "d-none"}>
            <Spinner animation="border" />
          </div>
        </Jumbotron>
        <Row className="border-bottom">
          <Col md={{ span: 5, offset: 1 }} className="profile-info">
            <Info />
          </Col>
          <Col md={5} className="profile-pic">
            <Image src={profilePicture ? profilePicture : mystery} roundedCircle className="selfie" />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 2 }}>
            <div className="new-trip" onClick={() => setShowModal(!showModal)}>
              <h2 className="display-4">New Trip</h2>
              <i className="material-icons">add_circle_outline</i>
            </div>
            <AddTrip showModal={showModal} setShowModal={setShowModal} />
          </Col>
          <Col md={{ span: 5, offset: 1 }} className="map-outside p-0">
            <Map />
          </Col>
        </Row>

        {/* TRIP */}
        <Upcoming />
        <Past />

        {/* <Row className="upcoming-container">
          <Col md={{ span: 4, offset: 1 }} className="upcoming-title">
            <h2 className="display-4">Upcoming Trips</h2>
          </Col>
          <Row>
            <Col md={{ span: 1, offset: 1 }}>
              <Trip image={newyork} location="New York City" />
            </Col>
            <Col md={{ span: 1, offset: 2 }}>
              <div className="pic-container">
                <Image src={napa} roundedCircle className="upcoming-pic" />
                <p className="pic-text">Napa</p>
              </div>
            </Col>
            <Col md={{ span: 1, offset: 2 }}>
              <div className="pic-container">
                <Image src={newyork} roundedCircle className="upcoming-pic" />
                <p className="pic-text">New York City</p>
              </div>
            </Col>
            <Col md={{ span: 1, offset: 2 }}>
              <div className="pic-container">
                <Image src={lisbon} roundedCircle className="upcoming-pic" />
                <p className="pic-text">Lisbon</p>
              </div>
            </Col>
          </Row>
        </Row> */}
        {/* <Row className="upcoming-container">
          <Col md={{ span: 3, offset: 1 }} className="upcoming-title">
            <h2 className="display-4">Past Trips</h2>
          </Col>
          <Row>
            <Col md={{ span: 1, offset: 1 }}>

            </Col>
            <Col md={{ span: 1, offset: 2 }}>
              <div className="pic-container">
                <Image src={dubai} roundedCircle className="upcoming-pic" />
                <p className="pic-text">Dubai</p>
              </div>
            </Col>
            <Col md={{ span: 1, offset: 2 }}>
              <div className="pic-container">
                <Image src={morocco} roundedCircle className="upcoming-pic" />
                <p className="pic-text">Morocco</p>
              </div>
            </Col>
            <Col md={{ span: 1, offset: 2 }}>
              <div className="pic-container">
                <Image src={gothenburg} roundedCircle className="upcoming-pic" />
                <p className="pic-text">Gothenburg</p>
              </div>
            </Col>
          </Row>
        </Row> */}
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    profilePicture: state.profile.data.profilePicture,
    backgroundPicture: state.profile.data.backgroundPicture,
    bgImgageLoading: state.profile.bgImgageLoading
  }
}

export default connect(
  mapStateToProps, {
  ...profileActions,
  ...tripsActions,
  ...actions
})(ProfileResp);
