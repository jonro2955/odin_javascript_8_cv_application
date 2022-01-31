import React, { Component } from 'react';
import CredList from './CredList.js';
// Run 'npm install uniqid' to use this package
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adderOn: false,
      editorOn: false,
      currentEditIndex: '',
      school: {
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
      credentials: [
        {
          id: uniqid(),
          school: 'My School',
          degree: 'My Degree',
          start: '2022-01-10',
          end: '2022-02-10',
        },
      ],
    };
  }

  handleChangeSchool = (e) => {
    e.preventDefault();
    this.setState({
      school: {
        id: this.state.school.id,
        school: e.target.value,
        degree: this.state.school.degree,
        start: this.state.school.start,
        end: this.state.school.end,
      },
    });
  };

  handleChangeDegree = (e) => {
    e.preventDefault();
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        degree: e.target.value,
        start: this.state.school.start,
        end: this.state.school.end,
      },
    });
  };

  handleChangeStartDate = (e) => {
    e.preventDefault();
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        degree: this.state.school.degree,
        start: e.target.value,
        end: this.state.school.end,
      },
    });
  };

  handleChangeEndDate = (e) => {
    e.preventDefault();
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        degree: this.state.school.degree,
        start: this.state.school.start,
        end: e.target.value,
      },
    });
  };

  onSubmitAddSchool = () => {
    this.setState({
      adderOn: false,
      credentials: this.state.credentials.concat(this.state.school),
      school: {
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
    });
  };

  toggleSchoolAdder = () => {
    this.setState((prevState) => ({
      adderOn: !prevState.adderOn,
    }));
  };

  closeEditor = () => {
    this.setState({
      editorOn: false,
    });
  };

  /* openEditor(e) is to be attached to a school entry's edit button. 
  That edit button will be assigned a unique id from within the CredList 
  component's render function. This id is used to determine the targetIndex 
  for editing the correct item in the credentials array.*/
  openEditor = (e) => {
    let targetIndex;
    this.state.credentials.forEach((school, i) => {
      if (school.id === e.target.id) {
        targetIndex = i;
      }
    });
    this.setState((prevState) => ({
      editorOn: !prevState.editorOn,
      currentEditIndex: targetIndex,
      school: {
        id: this.state.credentials[targetIndex].id,
        school: this.state.credentials[targetIndex].school,
        degree: this.state.credentials[targetIndex].degree,
        start: this.state.credentials[targetIndex].start,
        end: this.state.credentials[targetIndex].end,
      },
    }));
  };

  /* deleteEntry(e) is to be attached to a school entry's delete button. 
  That button will be assigned a unique id from within the CredList 
  component's render function. This id is used to delete the item 
  with the same id the credentials array.*/
  deleteEntry = (e) => {
    this.setState({
      credentials: this.state.credentials.filter(
        (school) => school.id !== e.target.id
      ),
    });
  };

  /*Replaces the correct school item in the this.state.credentials array
  with the current school (this.state.school) and resets the current school*/
  onSubmitEditSchool = (e) => {
    e.preventDefault();
    let credentialsEditCopy = this.state.credentials;
    credentialsEditCopy[this.state.currentEditIndex] = this.state.school;
    this.setState({
      credentials: credentialsEditCopy,
      editorOn: false,
      school: {
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
    });
  };

  render() {
    return (
      <div id='Education'>
        <div className='rightColumnHeader'>
          <div>Education</div>
          <button className='editBtn' onClick={this.toggleSchoolAdder}>
            Add
          </button>
        </div>

        <CredList
          state={this.state}
          deleteBtnAction={this.deleteEntry}
          editBtnAction={this.openEditor}
        />

        {/* Form: school adder */}
        {this.state.adderOn && (
          <form
            id='educationAdderForm'
            className='componentEditForm'
            onSubmit={this.onSubmitAddSchool}
          >
            <div className='adderFormHeading'>Add School</div>
            {/* school name */}
            <label className='inputFieldLabel' htmlFor='schoolInput'>
              School
            </label>
            <input
              id='schoolInput'
              name='school'
              type='text'
              value={this.state.school.school}
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
              value={this.state.school.degree}
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
              value={this.state.school.start}
              onChange={this.handleChangeStartDate}
            />
            {/* end date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              End Date
            </label>
            <input
              id='endInput'
              name='end'
              type='date'
              value={this.state.school.end}
              onChange={this.handleChangeEndDate}
            />
            {/* form sumbit button */}
            <input type='submit' value='Submit' className='doneBtn' />
            <button className='doneBtn' onClick={this.toggleSchoolAdder}>
              Cancel
            </button>
          </form>
        )}

        {/* Form: school editor */}
        {this.state.editorOn && (
          <form
            id='educationEditorForm'
            className='componentEditForm'
            onSubmit={this.onSubmitEditSchool}
          >
            <div className='adderFormHeading'>Edit School</div>
            {/* school name */}
            <label className='inputFieldLabel' htmlFor='schoolInput'>
              School
            </label>
            <input
              id='schoolInput'
              name='school'
              type='text'
              value={this.state.school.school}
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
              value={this.state.school.degree}
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
              value={this.state.school.start}
              onChange={this.handleChangeStartDate}
            />
            {/* end date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              End Date
            </label>
            <input
              id='endInput'
              name='end'
              type='date'
              value={this.state.school.end}
              onChange={this.handleChangeEndDate}
            />
            {/* form sumbit button */}
            <input type='submit' value='Submit' className='doneBtn' />
            <button className='doneBtn' onClick={this.closeEditor}>
              Cancel
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Education;
