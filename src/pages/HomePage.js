import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tr from "../assets/img/tr.png";
const HomePage = () => {
  return (
    <div className="vh-90 home-color">
      <Container>
        <Row className="justify-content-center">
          <Col className="mt-10" xs="auto">
            <img src={tr} alt="" className="rounded-circle border border-5" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="mt-5" xs="auto">
            <span className="font-weight-bold text-white">
              <h1>Moshiul Azam</h1>
            </span>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <span className="text-white fst-italic">
              <h3>
                Software Engineer @ Google - Grad Student - AI/ML Researcher
              </h3>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
