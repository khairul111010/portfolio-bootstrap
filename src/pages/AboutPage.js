import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import tr from "../assets/img/tr.png";
import dai from "../assets/img/dai.jpg";
import ibm from "../assets/img/ibm.jpg";
import stanford from "../assets/img/stanford.jpg";
import ucsd from "../assets/img/ucsd.jpg";
import {
  BsFillArrowRightSquareFill,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { GrCloudComputer, GrCloudSoftware } from "react-icons/gr";
import { GiVendingMachine } from "react-icons/gi";
import { FcComboChart, FcAddImage } from "react-icons/fc";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { GoNote } from "react-icons/go";
import { FaLanguage } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import { SiStopstalk } from "react-icons/si";
const AboutPage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-8">
        <Col lg={4}>
          <img src={tr} alt="" className="rounded-circle border border-5" />
          <Row
            className="justify-content-md-center mt-3 ms-3"
            style={{ width: "18rem" }}
          >
            <Col lg={3}>
              <BsLinkedin fontSize="1.5em" />
            </Col>
            <Col lg={3}>
              <BsGithub fontSize="1.5em" />
            </Col>
            <Col lg={3}>
              <ImStackoverflow fontSize="1.5em" />
            </Col>
            <Col lg={3}>
              <SiStopstalk fontSize="1.5em" />
            </Col>
          </Row>
        </Col>
        <Col lg={8}>
          <h1>Moshiul Azam</h1>
          <h6 className="fst-italic">Software Engineer</h6>
          <p className="mt-4">
            Focused and enthusiastic developer with a keen interest in software
            development and artificial intelligence. By comprehensive exposure
            to the underlying concepts and applying them vividly to various
            projects, my love for these domains came into being. I am a
            passionate individual who thrives to build and apply algorithms to
            solve real-world industry problems.
          </p>
          <Row>
            <Col sm={6}>
              {" "}
              <span>
                <BsFillArrowRightSquareFill color="green" />
              </span>{" "}
              Birthday: 12 October 1996
            </Col>
            <Col sm={6}>
              {" "}
              <span>
                <BsFillArrowRightSquareFill color="green" />
              </span>{" "}
              Phone: +1 480-401-8112
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              {" "}
              <span>
                <BsFillArrowRightSquareFill color="green" />
              </span>{" "}
              City: Tempe, AZ
            </Col>
            <Col sm={6}>
              {" "}
              <span>
                <BsFillArrowRightSquareFill color="green" />
              </span>{" "}
              Email: rajaprerak@gmail.com
            </Col>
          </Row>
        </Col>
      </Row>
      <h6 className="mt-4 card-custom-interest">Interests</h6>
      <Row className="justify-content-md-center">
        <Col lg={3}>
          <div className="card-custom">
            <span>
              <GrCloudComputer color="blue" />
            </span>
            Software Development
          </div>
        </Col>
        <Col lg={3}>
          <div className="card-custom">
            {" "}
            <span>
              <GiVendingMachine color="blue" />
            </span>
            Machine Learning
          </div>
        </Col>
        <Col lg={3}>
          <div className="card-custom">
            {" "}
            <span>
              <TbDeviceComputerCamera color="blue" />
            </span>
            Computer Vision
          </div>
        </Col>
        <Col lg={3}>
          <div className="card-custom">
            {" "}
            <span>
              <FaLanguage />
            </span>
            Natural Language Processing
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col lg={3}>
          <div className="card-custom">
            <span>
              <GrCloudSoftware color="blue" />
            </span>
            Software Engineering
          </div>
        </Col>
        <Col lg={3}>
          <div className="card-custom">
            {" "}
            <span>
              <FcComboChart />
            </span>{" "}
            Visualization
          </div>
        </Col>
        <Col lg={3}>
          <div className="card-custom">
            {" "}
            <span>
              <GoNote />
            </span>
            Algorithms
          </div>
        </Col>
        <Col lg={3}>
          <div className="card-custom">
            {" "}
            <span>
              <FcAddImage />
            </span>
            Image Processing
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
