import React, { Component } from "react";
import "./Skills.css";
class Skill extends Component {
  render() {
    return (
      <div className="skill-content">
        <h1 style={{ textAlign: "center" }}>My Skills</h1>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://ppc.land/wp-content/uploads/2018/03/aws.png"
              alt="img"
            />
          </div>
          <div className="grid-item">
            <h2>Amazon Web Services</h2>
            <p>I have all Knowledge of AWS</p>
          </div>
        </div>
        <div className="grid-container2">
          <div className="grid-item">
            <h2>DevOps</h2>
            <p>I have all Knowledge of AWS</p>
          </div>
          <div className="grid-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKp1zbVbFzJzQiBpEJS1RkEywLBPWWASAOnw&usqp=CAU"
              alt="img"
            />
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://icon-icons.com/icons2/2107/PNG/256/file_type_django_icon_130645.png"
              alt="img"
            />
          </div>
          <div className="grid-item">
            <h2>Django</h2>
            <p>I have all Knowledge of AWS</p>
          </div>
        </div>
        <div className="grid-container2">
          <div className="grid-item">
            <h2>Full-Stack Developer</h2>
            <p>I have all Knowledge of AWS</p>
          </div>
          <div className="grid-item">
            <img
              src="https://img-a.udemycdn.com/course/750x422/822444_a6db.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Skill;
