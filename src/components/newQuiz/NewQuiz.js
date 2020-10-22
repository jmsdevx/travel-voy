import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../layout/sideNav/SideNav';
import './NewQuiz.scss';


function NewQuiz() {

  return(
    <Container fluid className="new-quiz-container p-0">
    <SideNav />
    <Row>
      <Col md={12}>
        <h1 className="display-1">
          New Quiz - For Embed
        </h1>
      </Col>
    </Row>
    </Container>
  );
}

export default NewQuiz;
