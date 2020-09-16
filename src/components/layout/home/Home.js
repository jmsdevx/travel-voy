import React from 'react';
import './Home.scss';
import { Container, Row, Col, Button, ResponsiveEmbed } from 'react-bootstrap';
import Logo from '../../../assets/logo_grey.svg';
import heroLarge from '../../../assets/hero-large.jpg';
import heroSmall from '../../../assets/hero-small.jpg';
import SideNav from '../sideNav/SideNav';
import SignUp from '../signUp/SignUp';

function Home() {
  return(
    <>
    <Container fluid className="home-container p-0">
      <SideNav />
      <Container fluid className="hero">
        <Row>
          <Col md={11} className="text-right login">
            <p>
              Login
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <img src={Logo} alt="Travel Voy Logo" className="logo"/>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <h1 className="display-1">WELCOME</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 3, offset: 5}} className="text-center align-bottom">
            <Button variant="primary" className="quiz-button" size="lg">
              <i className="material-icons">school</i>
              <p>Take The Quiz</p>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="photos">
        <Row>
          <Col md={{span: 3, offset: 4}}>
            <Button variant="primary" className="sign-button" size="lg">
              Sign Up
            <i className="material-icons">login</i>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 5, offset: 1}}>
            <div className="photo-container">
              <img src={heroLarge} alt="hero-large" />
            </div>
          </Col>
          <Col md={{span: 5, offset: 1}}>
            <div className="photo-container">
              <img src={heroSmall} alt="hero-small" />
            </div>
          </Col>
        </Row>
        <Row className="photo-labels">
          <Col md={{span: 5, offset: 1}}>
            <h2>Stuff</h2>
          </Col>
          <Col md={{span: 5, offset: 1}}>
            <h2>Things</h2>
          </Col>
        </Row>
      </Container>
      <Container fluid className="discover">
        <Row>
          <Col>
            <h1 className="display-2">Discover</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 10, offset: 1}} className="vid-container">
            <ResponsiveEmbed aspectRatio='16by9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H9NTn9B_fBg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ResponsiveEmbed>
          </Col>
        </Row>
      </Container>
    </Container>
    <SignUp />
    </>
  )
}

export default Home;