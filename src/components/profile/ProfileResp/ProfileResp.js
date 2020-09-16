import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import SideNav from '../../layout/sideNav/SideNav';
import hero from '../../../assets/Amsterdam.jpg';
import './ProfileResp.scss';
import Info from '../../user/Info';

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
      <Row>
        <Col md={6} className="profile-info">
          <Info />
        </Col>
        <Col md={6} className="profile-pic">
          Two
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ProfileResp;
