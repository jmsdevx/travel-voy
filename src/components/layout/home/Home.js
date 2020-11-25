import React from 'react';
import './Home.scss';
import { Container, Row, Col, Button, ResponsiveEmbed } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo_grey.svg';
import heroLarge from '../../../assets/video/trips.png';
import heroSmall from '../../../assets/video/calendar.png';
import SideNav from '../sideNav/SideNav';
import SignUp from '../signUp/SignUp';

function Home() {
  return (
    <>
      <div className="home-container">
        <SideNav />
        <Container fluid className="hero">
          <Row>
            <Col md={11} className="text-right login-home">
              <Link to="/login">
                <button>
                  Login
              </button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center">
              <h1 className="main-header-text">WELCOME</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 5, offset: 5 }} xl={{ span: 4, offset: 5 }} className="text-center align-bottom">
              <Button variant="primary" className="quiz-button" size="lg">
                <Link to="/quiz">
                  <i className="material-icons">school</i>
                  <p>Take The Quiz</p>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className="photos">
          <Row>
            <Col md={{ span: 4, offset: 4 }} lg={{ span: 3, offset: 4 }}>
              <Button variant="primary" className="sign-button" size="lg">
                <Link to="/login">
                  Sign Up
                <i className="material-icons">login</i>
                </Link>
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col md={{ span: 5 }}>
              <div className="photo-container">
                <img src={heroLarge} alt="hero-large" />
              </div>
              <div className="photo-label">
                <h2>Save Trips</h2>
              </div>
            </Col>
            <Col md={{ span: 5 }}>
              <div className="photo-container" style={{ marginTop: "6rem" }}>
                <img src={heroSmall} alt="hero-small" />
              </div>
              <div className="photo-label">
                <h2>Plan Ahead</h2>
              </div>
            </Col>
          </Row>
          {/* <Row className="photo-labels">
            <div md={{ span: 5, offset: 1 }}>
              <h2>Save Trips</h2>
            </div>
            <div md={{ span: 5, offset: 1 }}>
              <h2>Plan Ahead</h2>
            </div>
          </Row> */}
        </Container>
        <Container fluid className="discover">
          <Row>
            <Col>
              <h1 className="display-2">Discover</h1>
            </Col>
          </Row>
          <Row className="display: flex; justify-content-center">
            <Col md={{ span: 10, offset: 1 }} className="vid-container">
              <ResponsiveEmbed aspectRatio='16by9'>
                <iframe width="560" height="315" title="marketing video" src="https://www.youtube.com/embed/H9NTn9B_fBg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </ResponsiveEmbed>
            </Col>
          </Row>
        </Container>
      </div>
      <SignUp />
      {/* <Container>
        <Row>
          <Col>Travel Voy</Col>
        </Row>
      </Container> */}
    </>
  )
}

export default Home;
