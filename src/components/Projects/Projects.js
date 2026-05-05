import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h1 className="project-heading" style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Our Awesome <strong className="purple">Portfolio</strong>
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "3rem" }}>
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card" as={motion.div} variants={item}>
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Kozen-Chatbot"
                description="A modern, responsive AI chatbot web application which gives real-time data."
                ghLink="https://github.com/YashSaxena070/kozen-ai-chatbot/"
              />
            </Col>

            <Col md={4} className="project-card" as={motion.div} variants={item}>
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Hateable- AI Service for Developer"
                description="Hateable is used to accelerate software development by enabling real-time AI-based code generation."
                ghLink="https://github.com/YashSaxena070/Hateable"
              />
            </Col>

            <Col md={4} className="project-card" as={motion.div} variants={item}>
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Currix"
                description="Currix helps job seekers optimize their resumes by analyzing them against job descriptions and improving ATS compatibility."
                ghLink="https://github.com/YashSaxena070/Currix"
                demoLink="https://currix-delta.vercel.app"              
              />
            </Col>

            <Col md={4} className="project-card" as={motion.div} variants={item}>
              <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="CryptoPlace"
                description="CryptoCoin is used to track real-time cryptocurrency prices and market trends, helping users make informed investment decisions."
                ghLink="https://github.com/YashSaxena070/CryptoPlace"
              />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
