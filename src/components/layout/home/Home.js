import React from 'react';
import './Home.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../../assets/voy_logo_blk.svg';

function Home() {
  return(
    <Container fluid className="home-container p-0">
      <Container fluid className="hero">
        <Row>
          <Col xs={11} className="text-right login">
            <p>
              Login
            </p>
          </Col>
          <Col xs={12} className="text-center">
            <img src={Logo} alt="Travel Voy Logo" className="logo"/>
          </Col>
          <Col xs={12} className="text-center">
            <h1 className="display-1">WELCOME</h1>
          </Col>
          <Col xs={12} className="text-center">
            Carousel
          </Col>
          <Col xs={12} className="text-center align-bottom">
            <Button variant="primary" size="lg">
              Take The Quiz
            </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="photos">
      </Container>
    </Container>
  )
}

export default Home;
