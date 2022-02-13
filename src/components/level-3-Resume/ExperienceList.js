import React, { Component } from 'react';

class ExperienceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.state.experienceList.map((exp) => {
          return (
            <div key={exp.id} className='experienceEntry'>
              <div>{exp.organization}</div>
              <div>{exp.location}</div>
              <div>{exp.title}</div>
              <div>{exp.start}</div>
              <div>{exp.end}</div>
              <ul>
                <li>{exp.description1}</li>
                <li>{exp.description2}</li>
                <li>{exp.description3}</li>
              </ul>
              <div className='entryBtnDiv'>
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
      </div>
    );
  }
}

export default ExperienceList;
