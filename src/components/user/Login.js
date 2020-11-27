import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import Button from '../general/Button';
import SideNav from '../layout/sideNav/SideNav';
// import Header from "../layout/header/Header";
// import Button from "../general/Button";
import { Link } from "react-router-dom";
import SignUp from './SignUp';
import Overlay from '../general/Overlay';
import './Login.scss';
import { connect } from 'react-redux';
import * as actions from '../ducks/auth/actions';

function Login({ loginChange, loginUser, loginFormData }) {
  console.log(loginFormData);

  //get session
  const defaultUserObject = { firstName: '', lastName: '', email: '', id: '' }
  const [userData, setUserData] = useState({ defaultUserObject })
  const [gotSession, setSession] = useState(false);
  // useEffect(() => {
  //   axios.get('/api/session')
  //     .then(response => {
  //       console.log('got session');
  //       console.log(response.data);
  //       setUserData(response.data);
  //       setSession(true);
  //     })
  // }, [gotSession]);

  //show sign up state
  const [signUp, setSignUp] = useState(false);
  const signUpHandler = () => {
    setSignUp(!signUp)
  }

  //login text handler
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeHandler = (e) => {
    loginChange({
      [e.target.name]: e.target.value
    });
    // if (e.target.id === 'email') {
    //   setEmail(e.target.value)
    // }
    // if (e.target.id === 'password') {
    //   setPassword(e.target.value)
    // }
  }

  const [redirect, setRedirect] = useState(false);

  const submitLogin = () => {

    loginUser();

    // axios.post('/api/login', { email, password })
    //   .then(response => {
    //     console.log('success')
    //     console.log(response.data);
    //     if (typeof response.data === 'string') {
    //       if (response.data.includes('password')) {
    //         window.alert(response.data)
    //       } else if (response.data.includes('email')) {
    //         window.alert(response.data)
    //       }
    //     } else {
    //       setUserData(response.data);
    //       setSession(true);
    //       setRedirect(true);
    //     }
    //   })
  }

  return (
    <Container fluid className="login-container p-0">
      {/* <SideNav /> */}
      <Row className="top-row">
        <Col sm={6} className="hero-left" />
        <Col sm={6} className="login-right p-0">
          <div className="input-container">
            <h1 className="heading">Welcome Back</h1>
            <input type="text" className="input" placeholder="email" id="email" name="email" onChange={changeHandler} value={loginFormData.email} />
            <input type="password" className="input" placeholder="password" id="password" name="password" onChange={changeHandler} value={loginFormData.password} />
            <p className="forgot">Forgot Password?</p>
            <Button title="Login" className="log-button" onClick={submitLogin} />
          </div>
        </Col>
      </Row>
      <Row className="bottom-row">
        <Col sm={6} className="login-left p-0">

          {signUp ?
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
        <Col sm={6} className="hero-right" />
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
  );
}

const mapStateToProps = state => {
  return {
    loginFormData: state.auth.loginFormData
  }
}

export default connect(
  mapStateToProps,
  actions
)(Login);