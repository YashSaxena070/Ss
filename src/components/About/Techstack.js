import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

function Techstack() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Javascript} alt="javascript" />
          <div className="tech-icons-text">Javascript</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Typescript} alt="typescript" />
          <div className="tech-icons-text">Typescript</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Node} alt="node" />
          <div className="tech-icons-text">Node.Js</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Java} alt="java" />
          <div className="tech-icons-text">Java</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={ReactIcon} alt="react" />
          <div className="tech-icons-text">React.Js</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Mongo} alt="mongoDb" />
          <div className="tech-icons-text">Mongo DB</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Redux} alt="redux" />
          <div className="tech-icons-text">Redux</div>
        </Col>

        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <SiNextdotjs fontSize={"24px"} style={{color:"white", marginBottom:"1rem"}}/>
          <div className="tech-icons-text">Next.js</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Git} alt="git" />
          <div className="tech-icons-text">Git</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Firebase} alt="firebase" />
          <div className="tech-icons-text">Firebase</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Redis} alt="redis" />
          <div className="tech-icons-text">Redis</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Docker} alt="docker" />
          <div className="tech-icons-text">Docker</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Kubernates} alt="kubernetes" />
          <div className="tech-icons-text">Kubernetes</div>
        </Col>

        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={SQL} alt="SQL" />
          <div className="tech-icons-text">Postgresql</div>
        </Col>

        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Python} alt="Python" />
          <div className="tech-icons-text">Python</div>
        </Col>
        
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Tailwind} alt="tailwind" />
          <div className="tech-icons-text">Tailwind CSS</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Postman} alt="Postman" />
          <div className="tech-icons-text">Postman</div>
        </Col>
        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={AWS} alt="AWS" className="tech-icon-images" />
          <div className="tech-icons-text">AWS</div>
        </Col>

        <Col xs={4} md={2} as={motion.div} variants={item} className="tech-icons">
          <img src={Kafka} alt="Kafka" className="tech-icon-images" />
          <div className="tech-icons-text">Kafka</div>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Techstack;
