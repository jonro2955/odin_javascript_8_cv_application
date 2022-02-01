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
            <div key={exp.id} className='experienceEntry'>
              <p>{exp.organization}</p>
              <p>{exp.location}</p>
              <p>{exp.title}</p>
              <ul>
                <div>{exp.description1}</div>
                <div>{exp.description2}</div>
                <div>{exp.description3}</div>
              </ul>
              <p>{exp.start}</p>
              <p>{exp.end}</p>
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
      </ul>
    );
  }
}

export default ExperienceList;
