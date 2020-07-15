import React, { Component } from "react";
import "./projects.css";
import Navbar from "../components/Navbar";
import ProjectContent from "../components/projectcontent";
class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Navbar />
        <ProjectContent />
      </div>
    );
  }
}
export default Projects;
