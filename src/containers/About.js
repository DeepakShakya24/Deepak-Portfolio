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
              Hello,I am Engineering Student of Integral University,Lucknow
              persuing Bachelor of Technology(B.Tech) in Computer Science
              specialization in Cloud Computing and Information
              Security.Currently I am 3rd Year Student and I am mainly
              interested in Cloud Computing.
            </p>
            <p style={{ fontSize: "20px" }}>
              I learned a lot of things related to Cloud Computing and DevOps
              and i am still learning,My main Domain is Cloud service Provider
              AWS and DevOps and I have done many projects on these Technologies
              and I am full-stack Web Developer.
            </p>
          </div>
        </div>
        <Skill />
      </div>
    );
  }
}

export default About;
