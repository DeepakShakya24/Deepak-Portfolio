import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "./Social";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ fontSize: "40px" }}>Deepak Shakya</h1>
        <h1>
          <ReactTypingEffect
            className="typingeffect"
            text={["Cloud Engineer", "DevOps", "Full-Stack Developer"]}
            speed={100}
            eraseDelay={700}
          />
        </h1>
        <Social />
      </div>
    );
  }
}
export default Content;
