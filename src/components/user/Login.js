import React, { useState } from "react";
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import Button from '../general/Button';
import SideNav from '../layout/sideNav/SideNav';
// import Header from "../layout/header/Header";
// import Button from "../general/Button";
import { Link } from "react-router-dom";
import SignUp from './SignUp';
import Overlay from '../general/Overlay';
import './Login.scss';

function Login() {
  const [signUp, setSignUp] = useState(false);

  const signUpHandler = () => {
    setSignUp(!signUp)
  }



  return(
    <Container fluid className="login-container p-0">
      <SideNav />
      <Row className="top-row">
        <Col md={6} className="hero-left" />
        <Col md={6} className="login-right p-0">
          <div className="input-container">
            <h1 className="heading">Welcome Back</h1>
            <input type="text" className="input" placeholder="email" />
            <input type="password" className="input" placeholder="password" />
            <p className="forgot">Forgot Password?</p>
            <Link to="/profile">
              <Button title="Login" onClick={null} className="log-button" />
            </Link>

          </div>
        </Col>
      </Row>
      <Row className="bottom-row">
        <Col md={6} className="login-left p-0">

        { signUp ?
        <>
          <Overlay onClick={signUpHandler} />
          <SignUp />
        </> :
        <div className="new-user m-0">
          <h4 className="display-4">New User?</h4>
          <button onClick={signUpHandler}>Sign up</button>
        </div>
        }
        </Col>
        <Col md={6} className="hero-right" />
      </Row>
    </Container>
  );
}

export default Login;
