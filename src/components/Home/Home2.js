import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer passionate about building scalable, reliable applications across both frontend and backend systems. I enjoy transforming ideas into real-world products and have developed a strong interest in system design and high-performance architectures.
              <br />
              <br />
              I’m work with
              <i>
                <b className="purple">
                  {" "}
                  Java, SpringBoot, JavaScript, Node.js, and React.js {" "}
                </b>
              </i>
              — and have experience building microservices-based systems using tools like Kafka, Redis, and PostgreSQL. I enjoy designing event-driven systems and solving complex backend challenges.
              <br />
              <br />
              My key areas of interest include 
              <i>
                <b className="purple">
                  {" "}
                  Distributed Systems, Web Applications and clud-native development{" "}
                </b>
              </i>
              and I actively explore technologies like Docker and Kubernetes to deploy and scale applications.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
