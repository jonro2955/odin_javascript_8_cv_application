import React, { Component } from "react";
import Photo from "./Photo";
import Contact from "./Contact";
import Skills from "./Skills";
import Name from "./Name";
import Title from "./Title";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";

class Resume extends Component {
  render() {
    return (
      <div id="ResumeComponent">
        <div id="resumeInnerDiv">
          <div id="resume-left-column">
            <Photo />
            <Contact />
            <Skills />
          </div>
          <div id="resume-right-column">
            <div id="introGroup">
              <Name />
              <Title />
              <Profile />
            </div>
            <Education />
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
