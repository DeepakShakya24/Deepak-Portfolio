import React, { Component } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Skill from "../components/Skills";
import img2 from "../images/img2.jpeg";
class About extends Component {
  render() {
    return (
      <div className="about-content">
        <div className="Navbar">
          <nav className="fill">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="mailto:deepakshakya4455@gmail.com">Hire Me!</a>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="about-grid">
          <div className="grid-item animate__animated animate__fadeInUp">
            <h1>
              <strong>About Me</strong>
            </h1>
            <img src={img2} className="profile-pic" alt="profile-pic" />
          </div>
          <div className="grid-item2 animate__animated animate__fadeInDown">
            <h1
              style={{
                textAlign: "center",

                fontSize: "60px",
                fontFamily: "Rowdies",
              }}
            >
              Deepak Shakya
            </h1>
            <p style={{ fontSize: "20px" }}>
              Hello,I am self-taught developer pursuing Bachelors in Computer
              Science and Engineering with specialization in Cloud Computing and
              Information Security from Integral University, Lucknow.
            </p>
            <p style={{ fontSize: "20px" }}>
              I like to make things and Cloud Computing fascinates me the most.
              I have learnt a lot of things related to Cloud Computing and
              DevOps. I am a FullStack Web Developer and I love tweaking with
              React.
            </p>
            <p style={{ fontSize: "20px" }}>
              I am a full-time Linux user and I support Free and Open Source
              Software Technologies..
            </p>
          </div>
        </div>
        <Skill />
      </div>
    );
  }
}

export default About;
