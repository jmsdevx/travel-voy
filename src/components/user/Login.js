import React from "react";
import Header from "../layout/header/Header";
import Button from "../general/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Header />
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
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
