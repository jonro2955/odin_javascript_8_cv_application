import React, { Component } from 'react';

class EducationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      buttonsToShow: 'none',
    };
  }

  render() {
    return (
      <div>
        {this.props.state.schoolsList.map((school) => {
          return (
            <div key={school.id} className='schoolEntry'>
              <div className='dates'>
                {school.start} - {school.end}
              </div>
              <div className='schoolEntryColumn'>
                <div className='schoolName'>{school.school}</div>
                <div className='schoolLocation'>{school.location}</div>
              </div>
              <div className='schoolEntryColumn'>
                <div className='schoolDegree'>{school.degree}</div>
                <div className='gpa'>GPA: {school.gpa}</div>
              </div>
              <div className='entryEditBtnsDiv'>
                <button
                  className='entryEditBtn'
                  id={school.id}
                  onClick={this.props.editBtnAction}
                >
                  Edit
                </button>
                <button
                  className='entryEditBtn'
                  id={school.id}
                  onClick={this.props.deleteBtnAction}
                >
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
