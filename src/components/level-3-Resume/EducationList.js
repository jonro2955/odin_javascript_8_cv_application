import React, { Component } from 'react';

class EducationList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.state.schoolsList.map((school) => {
          return (
            <div key={school.id} className='schoolEntry'>
              <div>{school.school}</div>
              <div>{school.location}</div>
              <div>{school.degree}</div>
              <div>{school.gpa}</div>
              <div>{school.start}</div>
              <div>{school.end}</div>
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
      </div>
    );
  }
}

export default EducationList;
