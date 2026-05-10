import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ padding: "30px 50px" }}>
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright text-md-start text-center pb-3 pb-md-0">
          <span style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
            <span style={{ color: "var(--accent-color)" }}>S</span>s.
          </span>
        </Col>
        <Col md="4" className="footer-body pb-3 pb-md-0">
          <ul className="footer-icons" style={{ marginBottom: 0 }}>
            <li className="social-icons">
              <a
                href="https://github.com/YashSaxena070"
                style={{ color: "var(--text-secondary)" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sparsh-saxena01/"
                style={{ color: "var(--text-secondary)" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/yash_.saxena/"
                style={{ color: "var(--text-secondary)" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-copywright text-md-end text-center">
          <h3 style={{ color: "var(--text-secondary)", margin: 0 }}>© {year} Ss. All Rights Reserved</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
