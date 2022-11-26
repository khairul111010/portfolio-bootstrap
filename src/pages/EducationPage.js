import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import tr from "../assets/img/tr.png";
import csail_square from "../assets/img/csail_square.png";
import ibm from "../assets/img/ibm.jpg";
import stanford from "../assets/img/stanford.jpg";
import ucsd from "../assets/img/ucsd.jpg";

const EducationPage = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <h2>Degrees Received</h2>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div>
          <img
            className="rounded"
            src={csail_square}
            alt=""
            srcset=""
            width={250}
          />
        </div>
        <Card className="text-center">
          <Card.Header>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Indian Institute of Information Technology</h5>
              </div>
              <div>2016 - 2020</div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div>
                <p className="text-left">
                  ⚡ I have studied basic software engineering subjects like DS,
                  Algorithms, DBMS, OS, CA, AI etc.
                </p>
                <p className="text-left">
                  ⚡ Apart from this, I have done courses on Deep Learning, Data
                  Science, Cloud Computing and Full Stack Development.
                </p>
                <p className="text-left">
                  ⚡ I was selected for Merit cum Means Scholarship which is
                  given to top 10% of students in college. I have received award
                  from respected director for consistently best performance in
                  academics.
                </p>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex justify-content-end">
            <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card>
      </div>
      <div className="text-center mt-4">
        <h2>Awards</h2>
      </div>
      <div className="d-flex justify-content-around mt-4">
        <Card className="custom-card">
          <div className="custom-card-img-container">
            <Card.Img variant="top" src={ibm} width={200} />
            <div className="overlay">hello</div>
          </div>
          <Card.Body>
            <Card.Title>Machine Learning</Card.Title>
            <Card.Text>- Andrew Ng</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <div className="custom-card-img-container">
            <Card.Img variant="top" src={ibm} width={200} />
            <div className="overlay">hello</div>
          </div>
          <Card.Body>
            <Card.Title>Machine Learning</Card.Title>
            <Card.Text>- Andrew Ng</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <div className="custom-card-img-container">
            <Card.Img variant="top" src={ibm} width={200} />
            <div className="overlay">hello</div>
          </div>
          <Card.Body>
            <Card.Title>Machine Learning</Card.Title>
            <Card.Text>- Andrew Ng</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default EducationPage;
