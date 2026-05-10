import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/picsart.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SPARSH SAXENA</strong>
                </h1>

                <div style={{ padding: "20px 0px 40px", textAlign: "left" }}>
                  <Type />
                </div>
                
                <div style={{ paddingLeft: 0 }}>
                  <a href="mailto:saxenayash@gmail.com" className="btn btn-primary" style={{ padding: "12px 30px", fontSize: "1.2rem" }}>
                    Contact Me ↗
                  </a>
                </div>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ display: "flex", justifyContent: "center", height: "500px" }}
              >
                <div style={{ position: "relative", width: "400px", maxWidth: "100%", height: "100%" }}>
                  {/* Background Circle with Clipped Bottom Image */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "100%",
                      aspectRatio: "1/1",
                      backgroundColor: "var(--bg-secondary)",
                      borderRadius: "50%",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      src={homeLogo}
                      alt="home pic"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "500px",
                        width: "auto",
                        maxWidth: "none"
                      }}
                    />
                  </div>
                  
                  {/* Top Image Popping Out */}
                  <img
                    src={homeLogo}
                    alt="home pic"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      height: "500px",
                      width: "auto",
                      maxWidth: "none",
                      clipPath: "inset(0 0 50% 0)",
                      zIndex: 1
                    }}
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/YashSaxena070"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sparsh-saxena01/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yash_.saxena/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
