import React, { Component } from 'react';

class SchoolList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.state.credentials.map((school) => {
          return (
            <div key={school.id} className='school'>
              <p>School: {school.school}</p>
              <p>Degree: {school.degree}</p>
              <p>Start: {school.start}</p>
              <p>End: {school.end}</p>
              <div className='credBtnGroup'>
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

export default SchoolList;
