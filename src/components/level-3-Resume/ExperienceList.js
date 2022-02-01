import React, { Component } from 'react';

class ExperienceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.state.experienceList.map((exp) => {
          return (
            <div key={exp.id} className='school'>
              <p>Organization: {exp.organization}</p>
              <p>Position: {exp.position}</p>
              <ul>
                <div>{exp.description1}</div>
                <div>{exp.description2}</div>
                <div>{exp.description3}</div>
              </ul>
              <p>Start: {exp.start}</p>
              <p>End: {exp.end}</p>
              <div className='credBtnGroup'>
                <button id={exp.id} onClick={this.props.editBtnAction}>
                  Edit
                </button>
                <button id={exp.id} onClick={this.props.deleteBtnAction}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ExperienceList;
