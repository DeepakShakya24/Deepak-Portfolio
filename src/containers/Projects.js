import React, { Component } from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import ProjectContent from "../components/projectcontent";
class Projects extends Component {
  render() {
    return (
      <div className="projects">
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
        <ProjectContent />
      </div>
    );
  }
}
export default Projects;
