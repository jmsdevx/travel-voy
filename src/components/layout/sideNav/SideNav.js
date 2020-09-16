import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SideNav.scss';
import { Link } from "react-router-dom";
import Logo from '../../../assets/voylogo.svg';

function SideNav(){
  return(
    <div className="side-nav">
      <div className="logo-container">
        <i className="material-icons">question_answer</i>
        <i className="material-icons">calendar_today</i>
        <Link to="/" className="home">
        <i className="material-icons">menu_open</i>
        </Link>
        <Link to="/profile">
          <i className="material-icons">face</i>
        </Link>
        <i className="material-icons">card_travel</i>
      </div>
    </div>

  )
}

export default SideNav;
