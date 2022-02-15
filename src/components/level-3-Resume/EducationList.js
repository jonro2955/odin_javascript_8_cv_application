import React, { Component } from 'react';

class EducationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      buttonsToShow: 'none',
    };
  }

  toggleHover = () => {
    this.setState(() => ({ hover: !this.state.hover }));
  };

  render() {
    return (
      <div>
        {this.props.state.schoolsList.map((school) => {
          return (
            <div key={school.id} className='schoolEntry'>
              <div className='schoolEntryColumn'>
                {school.start} - {school.end}
              </div>
              <div className='schoolEntryColumn'>
                <div>{school.school}</div>
                <div>{school.location}</div>
              </div>
              <div className='schoolEntryColumn'>
                <div>{school.degree}</div>
                <div>GPA: {school.gpa}</div>
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
