import React, { Component } from 'react';
import Photo from '../level-3-Resume/Photo';
import Contact from '../level-3-Resume/Contact';
import Skills from '../level-3-Resume/Skills';
import Name from '../level-3-Resume/Name';
import Title from '../level-3-Resume/Title';
import Profile from '../level-3-Resume/Profile';
import Education from '../level-3-Resume/Education';
import Experience from '../level-3-Resume/Experience';

class Resume extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id='ResumeComponent'>
        <div id='resumeInnerDiv'>
          <div id='resume-left-column'>
            <Photo />
            <Contact />
            <Skills />
          </div>
          <div id='resume-right-column'>
            <div id='introGroup'>
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
