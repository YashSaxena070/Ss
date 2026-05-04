import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Kozen-Chatbot"
              description="A modern, responsive AI chatbot web application which gives real-time data."
              ghLink="https://github.com/YashSaxena070/kozen-ai-chatbot/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hateable- AI Service for Developer"
              description="Hateable is used to accelerate software development by enabling real-time AI-based code generation. It helps developers quickly build applications, reduce repetitive coding tasks, and improve productivity."
              ghLink="https://github.com/YashSaxena070/Hateable"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Currix"
              description="Currix is used to help job seekers optimize their resumes by analyzing them against job descriptions and improving ATS compatibility. It provides AI-powered feedback, scoring, and suggestions to enhance resume quality and increase chances of shortlisting."
              ghLink="https://github.com/YashSaxena070/Currix"
              demoLink="https://currix-delta.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CryptoPlace"
              description="CryptoCoin is used to track real-time cryptocurrency prices and market trends, helping users make informed investment decisions. It provides interactive charts and detailed coin analytics, making it useful for traders and beginners to analyze price movements."
              ghLink="https://github.com/YashSaxena070/CryptoPlace"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
