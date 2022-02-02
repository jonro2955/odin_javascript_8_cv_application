import React, { Component } from 'react';
import EducationList from './EducationList.js';
// Run 'npm install uniqid' to use this package
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOn: false,
      formHeading: '',
      currentEditIndex: '',
      school: {
        id: uniqid(),
        school: '',
        location: '',
        degree: '',
        gpa: '',
        start: '',
        end: '',
      },
      schoolsList: [
        {
          id: uniqid(),
          school: 'School',
          location: 'Location',
          degree: 'Degree',
          gpa: '3.5',
          start: '2022-01-10',
          end: '2023-02-10',
        },
      ],
    };
  }

  handleChangeSchool = (e) => {
    this.setState({
      school: {
        id: this.state.school.id,
        school: e.target.value,
        location: this.state.location,
        degree: this.state.school.degree,
        gpa: this.state.school.gpa,
        start: this.state.school.start,
        end: this.state.school.end,
      },
    });
  };

  handleChangeLocation = (e) => {
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        location: e.target.value,
        degree: this.state.school.degree,
        gpa: this.state.school.gpa,
        start: this.state.school.start,
        end: this.state.school.end,
      },
    });
  };

  handleChangeDegree = (e) => {
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        location: this.state.location,
        degree: e.target.value,
        gpa: this.state.school.gpa,
        start: this.state.school.start,
        end: this.state.school.end,
      },
    });
  };

  handleChangeGPA = (e) => {
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        location: this.state.location,
        gpa: e.target.value,
        start: this.state.school.start,
        end: this.state.school.end,
      },
    });
  };

  handleChangeStartDate = (e) => {
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        location: this.state.location,
        degree: this.state.school.degree,
        gpa: this.state.school.gpa,
        start: e.target.value,
        end: this.state.school.end,
      },
    });
  };

  handleChangeEndDate = (e) => {
    this.setState({
      school: {
        id: this.state.school.id,
        school: this.state.school.school,
        location: this.state.location,
        degree: this.state.school.degree,
        gpa: this.state.school.gpa,
        start: this.state.school.start,
        end: e.target.value,
      },
    });
  };

  onSubmitAdd = () => {
    this.setState({
      formOn: false,
      schoolsList: this.state.schoolsList.concat(this.state.school),
      school: {
        id: uniqid(),
        school: '',
        location: '',
        degree: '',
        gpa: '',
        start: '',
        end: '',
      },
    });
  };

  toggleAdder = () => {
    this.setState((prevState) => ({
      formHeading: 'Add School',
      school: {
        id: uniqid(),
        school: '',
        location: '',
        degree: '',
        gpa: '',
        start: '',
        end: '',
      },
      formOn: !prevState.formOn,
    }));
  };

  closeForm = () => {
    this.setState({
      formOn: false,
    });
  };

  /* toggleEditor(e) is to be attached to an entry's edit button. 
  From within the EducationList componenet, that edit button will be assigned 
  a corresponding id. This id is used to determine the targetIndex 
  for editing the correct school item in the schoolsList array.*/
  toggleEditor = (e) => {
    let targetIndex;
    this.state.schoolsList.forEach((school, i) => {
      if (school.id === e.target.id) {
        targetIndex = i;
      }
    });
    this.setState((prevState) => ({
      formOn: !prevState.formOn,
      formHeading: 'Edit School',
      currentEditIndex: targetIndex,
      school: {
        id: this.state.schoolsList[targetIndex].id,
        school: this.state.schoolsList[targetIndex].school,
        location: this.state.schoolsList[targetIndex].location,
        degree: this.state.schoolsList[targetIndex].degree,
        gpa: this.state.schoolsList[targetIndex].gpa,
        start: this.state.schoolsList[targetIndex].start,
        end: this.state.schoolsList[targetIndex].end,
      },
    }));
  };

  deleteEntry = (e) => {
    this.setState({
      schoolsList: this.state.schoolsList.filter(
        (school) => school.id !== e.target.id
      ),
    });
  };

  onSubmitEdit = (e) => {
    e.preventDefault();
    let copy = this.state.schoolsList;
    copy[this.state.currentEditIndex] = this.state.school;
    this.setState({
      schoolsList: copy,
      formOn: false,
      school: {
        id: uniqid(),
        school: '',
        location: '',
        degree: '',
        gpa: '',
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
          <button className='schoolAddBtn' onClick={this.toggleAdder}>
            Add
          </button>
        </div>
        <EducationList
          state={this.state}
          deleteBtnAction={this.deleteEntry}
          editBtnAction={this.toggleEditor}
        />
        {/* Form */}
        {this.state.formOn && (
          <form
            id='educationForm'
            className='form'
            onSubmit={
              this.state.formHeading === 'Edit School'
                ? this.onSubmitEdit
                : this.onSubmitAdd
            }
          >
            <div className='adderFormHeading'>{this.state.formHeading}</div>
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
            {/* location */}
            <label className='inputFieldLabel' htmlFor='locationInput'>
              Location
            </label>
            <input
              id='locationInput'
              name='location'
              type='text'
              value={this.state.school.location}
              onChange={this.handleChangeLocation}
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
            {/* gpa */}
            <label className='inputFieldLabel' htmlFor='gpaInput'>
              GPA
            </label>
            <input
              id='gpaInput'
              name='gpa'
              type='text'
              value={this.state.school.gpa}
              onChange={this.handleChangeGPA}
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
            <label className='inputFieldLabel' htmlFor='endDate'>
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
            <input type='submit' value='Submit' className='formBtn' />
            <button className='formBtn' onClick={this.toggleAdder}>
              Cancel
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Education;
