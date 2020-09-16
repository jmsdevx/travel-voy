import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './SignUp.scss';

function SignUp(){
  return (
    <Container fluid className="signup-container">
      <Row>
        <Col md={6} className="signup-box">
          <h5 className="display-4">Sign Up Now</h5>
          <Form className="sign-form">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="What's your name?" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </Form>
        </Col>
        <Col md={6} className="info-box">
          <h5 className="display-4">Coming Soon</h5>
          <Row className="info-container">
            <Col md={{span: 4, offset: 1}} className="info-box">
            </Col>
            <Col md={{span: 4, offset: 2}} className="info-box">
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp;
