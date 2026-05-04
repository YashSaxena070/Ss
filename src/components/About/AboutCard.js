import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sparsh Saxena</span>{" "}
            from <span className="purple">Bareilly, India</span>.
            <br />
            I’m currently pursuing{" "}
            <span className="purple">B.Tech</span> from{" "}
            <span className="purple">JSS Academy of Technical Education</span>.
            <br />I’m passionate about building{" "}
            <span className="purple">scalable applications</span> and exploring{" "}
            <span className="purple">full-stack development.</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with vision."{" "}
          </p>
          <footer className="blockquote-footer">Sparsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
