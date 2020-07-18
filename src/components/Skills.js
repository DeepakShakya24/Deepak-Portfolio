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
              src="https://www.pikpng.com/pngl/m/167-1678543_aws-logo-amazon-web-services-icon-clipart.png"
              alt="img"
            />
          </div>
          <div className="grid-item">
            <h2>Amazon Web Services</h2>
            <p>
              My Domain is Cloud Computing so I have the skills of famous Cloud
              Service provider AWS,including AWS Cloud Practitioner and
              Solutions Architect Associate.I know all basic to advance
              knowledge related to AWS like EC2,S3,Load Balancer,VPC,RDS and
              many more.
            </p>
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
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--ljICTE5K--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/3gjbeg830gnu43sxz7et.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Skill;
