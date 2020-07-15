import React, { Component } from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import Skill from "../components/Skills";
//import bg from "../images/bg.jpg";
class About extends Component {
  render() {
    return (
      <div>
        <div className="about">
          <Navbar />
          <div className="content">
            <h1>Deepak Shakya</h1>
            <p>
              Bachelor of Technology in Computer Science and Enginnering <br />
              Integral University,Lucknow
            </p>
            <ul>
              <li>Specialization in Cloud Computing</li>
              <li>AWS Solution Architect Associate</li>
            </ul>
          </div>
        </div>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    );
  }
}

export default About;
