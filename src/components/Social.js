import React, { Component } from "react";
import "./Social.css";
//import { SocialIcon } from "react-social-icons";
class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          href="mailto:deepakshakya4455@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-envelope"></i>
        </a>
        <a
          href="https://github.com/DeepakShakya24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          href="https://Linkedin.com/in/deepak-shakya-174978189"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/_deepakshakya_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100011861584240"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-facebook-f"></i>
        </a>
      </div>
    );
  }
}
export default Social;
