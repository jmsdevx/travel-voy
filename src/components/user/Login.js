import React, { useState } from "react";
import Header from "../layout/header/Header";
import Button from "../general/Button";
import { Link } from "react-router-dom";
import SignUp from './SignUp';
import Overlay from '../general/Overlay';

function Login() {
  const [signUp, setSignUp] = useState(false);

  const signUpHandler = () => {
    setSignUp(!signUp)
  }

  return (
    <div className="login">
      <div className="input-container">
        <h1 className="heading">Welcome Back</h1>
        <input type="text" className="input" placeholder="username" />
        <input type="password" className="input" placeholder="password" />
        <p className="forgot">Forgot Password?</p>
        <Link to="/profile">
          <Button title="Enter" onClick={null} className="log-button" />
        </Link>
        <div className="new-user">
          <p>New User?</p>
          <button onClick={signUpHandler}>Sign up</button>
        </div>
      </div>
      { signUp &&
        <>
          <Overlay onClick={signUpHandler} />
          <SignUp />
        </>
      }
      <Header />
    </div>
  );
}

export default Login;
