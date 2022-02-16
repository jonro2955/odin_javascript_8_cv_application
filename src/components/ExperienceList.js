import React, { Component } from 'react';

class ExperienceList extends Component {
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
    return (
      <div id='experienceList'>
        {this.props.state.experienceList.map((exp) => {
          return (
            <div key={exp.id} className='experienceEntry'>
              <div className='expEntryInfo1 experienceEntryColumn'>
                <div className='dates'>
                  {exp.start} - {exp.end}
                </div>
                <div className='expTitle'>{exp.title}</div>
              </div>
              <div className='expEntryInfo2 experienceEntryColumn'>
                <div className='expOrgName'>{exp.organization}</div>
                <div className='expLocation'>{exp.location}</div>
              </div>
              <ul className='expEntryList'>
                <li className='fontSize15 expDesc'>{exp.description1}</li>
                <li className='fontSize15 expDesc'>{exp.description2}</li>
                <li className='fontSize15 expDesc'>{exp.description3}</li>
              </ul>
              <div className='entryEditBtnsDiv'>
                <button
                  className='entryEditBtn'
                  id={exp.id}
                  onClick={this.props.editBtnAction}
                >
                  Edit
                </button>
                <button
                  className='entryEditBtn'
                  id={exp.id}
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

export default ExperienceList;
