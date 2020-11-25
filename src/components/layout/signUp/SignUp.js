import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './SignUp.scss';
import pic1 from '../../../assets/video/cost.png';
import pic2 from '../../../assets/video/notifications.png';
import axios from 'axios';

function SignUp() {
  //get session
  const defaultUserObject = { firstName: '', lastName: '', email: '', id: '' }
  const [userData, setUserData] = useState({ defaultUserObject })
  const [gotSession, setSession] = useState(false)
  // useEffect(() => {
  //   axios.get('/api/session')
  //     .then(response => {
  //       setUserData(response.data);
  //       setSession(true)
  //     })
  // }, [gotSession]);

  //change text handler
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const changeHandler = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setFirstname(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
    }
  }

  //submit to register
  const [redirect, setRedirect] = useState(false);
  const submitHandler = () => {
    axios.post('/api/register', { firstName, lastName, email, password })
      .then(response => {
        setUserData(response.data);
        setRedirect(true);
      })
      .catch(err => console.log(err))
  }

  return (
    <Container fluid className="signup-container">
      <Row>
        <Col md={6} className="signup-box">
          <h5 className="display-4">Join The Club</h5>
          <Form className="sign-form">
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="First Name" onChange={changeHandler} id="firstName" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Last Name" onChange={changeHandler} id="lastName" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={changeHandler} id="email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={changeHandler} id="password" />
            </Form.Group>
            <Button onClick={submitHandler}>
              Sign Up
            </Button>
          </Form>
        </Col>
        <Col md={6} className="info-box">
          <h5 className="display-4">Coming Soon</h5>
          <Row className="info-container">
            <Col md={{ span: 4, offset: 0 }} className="preview">
              <img src={pic1} alt="" />
              <h4>Cost Splitting</h4>
            </Col>
            <Col md={{ span: 4, offset: 0 }} className="preview">
              <img src={pic2} alt="" />
              <h4>Notifications</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      {
        redirect &&
        <Redirect
          push
          to={{
            pathname: "/profile",
            search: `${userData.email}`,
            state: { userData }
          }}
        />
      }
    </Container>
  )
}

export default SignUp;
