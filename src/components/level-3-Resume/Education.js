import React, { Component } from 'react';
import CredList from './CredList.js';
// Run 'npm install uniqid' to use this package
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      editorToggle: false,
      cred: {
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
      credentials: [],
    };
  }

  handleChangeSchool = (e) => {
    e.preventDefault();
    this.setState({
      cred: {
        id: this.state.cred.id,
        school: e.target.value,
        degree: this.state.cred.degree,
        start: this.state.cred.start,
        end: this.state.cred.end,
      },
    });
  };

  handleChangeDegree = (e) => {
    e.preventDefault();
    this.setState({
      cred: {
        id: this.state.cred.id,
        school: this.state.cred.school,
        degree: e.target.value,
        start: this.state.cred.start,
        end: this.state.cred.end,
      },
    });
  };

  handleChangeStart = (e) => {
    e.preventDefault();
    this.setState({
      cred: {
        id: this.state.cred.id,
        school: this.state.cred.school,
        degree: this.state.cred.degree,
        start: e.target.value,
        end: this.state.cred.end,
      },
    });
  };

  handleChangeEnd = (e) => {
    e.preventDefault();
    this.setState({
      cred: {
        id: this.state.cred.id,
        school: this.state.cred.school,
        degree: this.state.cred.degree,
        start: this.state.cred.start,
        end: e.target.value,
      },
    });
  };

  deleteEntry = (e) => {
    let targetIndex;
    this.state.credentials.forEach((cred, i) => {
      if (cred.id === e.target.id) {
        targetIndex = i;
      }
    });
    this.setState({
      credentials: this.state.credentials.filter(
        (cred, i) => i !== targetIndex
      ),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      credentials: this.state.credentials.concat(this.state.cred),
      cred: {
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
      editorToggle: false,
    });
  };

  toggleEditor = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  };

  render() {
    return (
      <div id='Education'>
        <div className='rightColumnHeader'>
          <div>Education</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Add
          </button>
        </div>

        <CredList
          state={this.state}
          deleteBtnAction={this.deleteEntry}
          editBtnAction={this.editEntry}
        />

        {/* Form */}
        {this.state.editorToggle && (
          <form
            id='educationAdderForm'
            className='componentEditForm'
            onSubmit={this.onSubmit}
          >
            <div className='adderFormHeading'>Add Education</div>
            {/* school name */}
            <label className='inputFieldLabel' htmlFor='schoolInput'>
              School Name
            </label>
            <input
              id='schoolInput'
              name='school'
              type='text'
              value={this.state.cred.school}
              onChange={this.handleChangeSchool}
              autoFocus
              required
            />
            {/* degree */}
            <label className='inputFieldLabel' htmlFor='degreeInput'>
              Degree
            </label>
            <input
              id='degreeInput'
              name='degree'
              type='text'
              value={this.state.cred.degree}
              onChange={this.handleChangeDegree}
              required
            />
            {/* start date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              Start Date
            </label>
            <input
              id='startInput'
              name='start'
              type='date'
              value={this.state.cred.start}
              onChange={this.handleChangeStart}
            />
            {/* end date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              End Date
            </label>
            <input
              id='endInput'
              name='end'
              type='date'
              value={this.state.cred.end}
              onChange={this.handleChangeEnd}
            />
            {/* education form sumbit button */}
            <input type='submit' value='Submit' className='doneBtn' />
            <button className='doneBtn' onClick={this.toggleEditor}>
              Cancel
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Education;
