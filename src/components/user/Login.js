import React from "react";
import Header from "../layout/header/Header";
import Button from "../general/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Header />
      <h1 className="heading">Login</h1>
      <input type="text" className="input" placeholder="username" />
      <input type="password" className="input" placeholder="password" />
      <Link to="/profile">
        <Button title="Login" onClick={null} className="log-button" />
      </Link>
    </div>
  );
}

export default Login;
