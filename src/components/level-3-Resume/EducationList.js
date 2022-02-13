import React, { Component } from 'react';

class EducationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  toggleHover = () => {
    this.setState(() => ({ hover: !this.state.hover }));
  };

  render() {
    let btnStyle;
    if (this.state.hover) {
      btnStyle = { display: 'block' };
    } else {
      btnStyle = { display: 'none' };
    }
    return (
      <div>
        {this.props.state.schoolsList.map((school) => {
          return (
            <div
              key={school.id}
              className='schoolEntry'
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            >
              <div>
                {school.school}, {school.location}
              </div>
              <div>{school.degree}</div>
              <div>{school.gpa}</div>
              <div>{school.start}</div>
              <div>{school.end}</div>
              <div style={btnStyle} className='entryBtns'>
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
