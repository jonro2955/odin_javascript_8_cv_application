import React, { Component } from 'react';

class EducationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.state.schoolsList.map((school) => {
          return (
            <div key={school.id} className='schoolEntry'>
              <p>{school.school}</p>
              <p>{school.location}</p>
              <p>{school.degree}</p>
              <p>{school.gpa}</p>
              <p>{school.start}</p>
              <p>{school.end}</p>
              <div className='entryBtnDiv'>
                <button id={school.id} onClick={this.props.editBtnAction}>
                  Edit
                </button>
                <button id={school.id} onClick={this.props.deleteBtnAction}>
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

export default EducationList;
