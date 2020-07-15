import React, { Component } from "react";
import "./projectcontent.css";
import ss1 from "../images/ss1.png";
import ss2 from "../images/ss2.png";
import ss3 from "../images/ss3.png";
import ss4 from "../images/ss4.png";
import img3 from "../images/img3.png";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },
};
class ProjectContent extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="project-content style={styles.bounce}">
          <div class="projects-grid">
            <div class="card" style={{ width: "18rem" }}>
              <img src={ss1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hostel Complaint Site</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img src={ss2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Weather App</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img src={ss3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">React Based Weather App</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img src={ss4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Covid Statics App</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://github.com/DeepakShakya24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-github"></i>
                </a>
                <br />
                <a
                  href="https://covid-app-statics.netlify.app/"
                  class="btn btn-primary"
                >
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img src={img3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Dockerize a Django Application</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}
export default ProjectContent;
