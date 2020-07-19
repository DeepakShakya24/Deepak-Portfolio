import React, { Component } from "react";
import "./About.css";
import { Link } from "react-router-dom";
//import Navbar from "../components/Navbar";
import Skill from "../components/Skills";
import img2 from "../images/img2.jpeg";
class About extends Component {
  render() {
    return (
      <div>
        <div className="about-grid">
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
                  <a href="!#">Contacts</a>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid-item animate__animated animate__fadeInUp">
            <h1>
              <strong>About Me</strong>
            </h1>
            <img src={img2} alt="profile-pic" />
          </div>
          <div className="grid-item2 animate__animated animate__fadeInDown">
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
              Deepak Shakya
            </h1>
            <p>
              Hello,I am Engineering Student of Integral University,Lucknow
              persuing Bachelor of Technology(B.Tech) in Computer Science
              specialization in Cloud Computing and Information
              Security.Currently I am 3rd Year Student and I am mainly
              interested in Cloud Computing.
            </p>
            <p>
              Gecko far one before ouch far indistinctly ouch much doubtfully
              the alas some classically far insincerely much honey close savage
              ground according enthusiastic and that then about realistic
              however more forlornly dear demonstrably a this.
            </p>
          </div>
        </div>
        <Skill />
      </div>
    );
  }
}

export default About;
