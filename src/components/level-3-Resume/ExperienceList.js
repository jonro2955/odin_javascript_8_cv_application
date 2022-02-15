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
      <div>
        {this.props.state.experienceList.map((exp) => {
          return (
            <div key={exp.id} className='experienceEntry'>
              <div className='expEntryInfo1 experienceEntryColumn'>
                <div>
                  {exp.start} - {exp.end}
                </div>
                <div>{exp.title}</div>
              </div>
              <div className='expEntryInfo2 experienceEntryColumn'>
                <div>{exp.organization}</div>
                <div>{exp.location}</div>
              </div>
              <ul className='expEntryDetail'>
                <li>{exp.description1}</li>
                <li>{exp.description2}</li>
                <li>{exp.description3}</li>
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
