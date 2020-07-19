import React, { Component } from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
class Skill extends Component {
  render() {
    return (
      <div className="skill-content">
        <Slide top>
          <h1 style={{ textAlign: "center" }}>My Skills</h1>
        </Slide>
        <div className="grid-container">
          <div className="grid-item">
            <Fade left>
              <img
                src="https://www.pikpng.com/pngl/m/167-1678543_aws-logo-amazon-web-services-icon-clipart.png"
                alt="img"
              />
            </Fade>
          </div>
          <div className="grid-item">
            <Fade left>
              <h2>Amazon Web Services</h2>
              <p>
                My Domain is Cloud Computing so I have the skills of famous
                Cloud Service provider AWS,including AWS Cloud Practitioner and
                Solutions Architect Associate.I know all basic to advance
                knowledge related to AWS like EC2,S3,Load Balancer,VPC,RDS and
                many more.
              </p>
            </Fade>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <Fade right>
              <h2>DevOps</h2>
              <p>
                The DevOps is now using in all enterprises everybody is moving
                towards an automation, so I learned a DevOps tools like
                Git,Docker,Kubernetes,Jenkins etc.I have knowledge of making
                CI/CD Pipelines.View some of my work related to DevOps in my
                Project Section.
              </p>
            </Fade>
          </div>
          <div className="grid-item">
            <Fade right>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKp1zbVbFzJzQiBpEJS1RkEywLBPWWASAOnw&usqp=CAU"
                alt="img"
              />
            </Fade>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <Fade left>
              <img
                src="https://icon-icons.com/icons2/2107/PNG/256/file_type_django_icon_130645.png"
                alt="img"
              />
            </Fade>
          </div>
          <div className="grid-item">
            <Fade left>
              <h2>Django</h2>
              <p>
                Django,Python Web Framework,from here my journey as a Back-End
                Developer starts.This is an Open-source python web-Framework I
                worked alot in this framework,Because you can build both
                Front-End and Back-end from this tool.View my project section to
                see some of my projects on Django
              </p>
            </Fade>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <Fade right>
              <h2>Full-Stack Developer</h2>
              <p>I have all Knowledge of AWS</p>
            </Fade>
          </div>
          <div className="grid-item">
            <Fade right>
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--ljICTE5K--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/3gjbeg830gnu43sxz7et.png"
                alt="img"
              />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
export default Skill;
