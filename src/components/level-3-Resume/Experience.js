import React, { Component } from 'react';
import ExperienceList from './ExperienceList.js';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOn: false,
      formHeading: '',
      currentEditIndex: '',

      id: uniqid(),
      organization: '',
      location: '',
      title: '',
      description1: '',
      description2: '',
      description3: '',
      start: '',
      end: '',

      experienceList: [
        {
          id: uniqid(),
          organization: 'Best Web Company',
          location: 'Toronto, ON',
          title: 'Web Developer',
          description1:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          description2:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          description3:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          start: '2020-01-01',
          end: '2021-01-10',
        },
        {
          id: uniqid(),
          organization: 'Awesome Web Company',
          location: 'Toronto, ON',
          title: 'Web Developer',
          description1:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          description2:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          description3:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          start: '2020-01-01',
          end: '2021-01-10',
        },
        {
          id: uniqid(),
          organization: 'Amazing Web Company',
          location: 'Toronto, ON',
          title: 'Web Developer',
          description1:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          description2:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          description3:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ',
          start: '2020-01-01',
          end: '2021-01-10',
        },
      ],
    };
  }

  handleChangeOrganization = (e) => {
    this.setState({
      organization: e.target.value,
    });
  };

  handleChangeLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handleChangePosition = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeDescription1 = (e) => {
    this.setState({
      description1: e.target.value,
    });
  };

  handleChangeDescription1 = (e) => {
    this.setState({
      description1: e.target.value,
    });
  };

  handleChangeDescription2 = (e) => {
    this.setState({
      description2: e.target.value,
    });
  };

  handleChangeDescription3 = (e) => {
    this.setState({
      description3: e.target.value,
    });
  };

  handleChangeStartDate = (e) => {
    this.setState({
      start: e.target.value,
    });
  };

  handleChangeEndDate = (e) => {
    this.setState({
      end: e.target.value,
    });
  };

  onSubmitAdd = () => {
    let newExperience = {
      id: this.state.id,
      organization: this.state.organization,
      location: this.state.location,
      title: this.state.title,
      description1: this.state.description1,
      description2: this.state.description2,
      description3: this.state.description3,
      start: this.state.start,
      end: this.state.end,
    };
    this.setState({
      formOn: false,
      experienceList: this.state.experienceList.concat(newExperience),
      id: uniqid(),
      organization: '',
      location: '',
      title: '',
      description1: '',
      description2: '',
      description3: '',
      start: '',
      end: '',
    });
  };

  toggleAdder = () => {
    this.setState((prevState) => ({
      formOn: !prevState.formOn,
      formHeading: 'Add Experience',
      id: uniqid(),
      organization: '',
      location: '',
      title: '',
      description1: '',
      description2: '',
      description3: '',
      start: '',
      end: '',
    }));
  };

  closeForm = () => {
    this.setState({
      formOn: false,
    });
  };

  /* toggleEditor(e) is to be attached to an entry's edit button. 
  That edit button will be assigned the corresponding id from within the ExperienceList 
  component's render function. This id is used to determine the targetIndex 
  for editing the correct experience item in the experienceList array.*/
  toggleEditor = (e) => {
    let targetIndex;
    this.state.experienceList.forEach((exp, i) => {
      if (exp.id === e.target.id) {
        targetIndex = i;
      }
    });
    this.setState((prevState) => ({
      formOn: !prevState.formOn,
      formHeading: 'Edit Experience',
      currentEditIndex: targetIndex,
      id: this.state.experienceList[targetIndex].id,
      organization: this.state.experienceList[targetIndex].organization,
      location: this.state.experienceList[targetIndex].location,
      title: this.state.experienceList[targetIndex].title,
      description1: this.state.experienceList[targetIndex].description1,
      description2: this.state.experienceList[targetIndex].description2,
      description3: this.state.experienceList[targetIndex].description3,
      start: this.state.experienceList[targetIndex].start,
      end: this.state.experienceList[targetIndex].end,
    }));
  };

  deleteEntry = (e) => {
    this.setState({
      experienceList: this.state.experienceList.filter(
        (exp) => exp.id !== e.target.id
      ),
    });
  };

  onSubmitEdit = (e) => {
    e.preventDefault();
    let newExperience = {
      id: this.state.id,
      organization: this.state.organization,
      location: this.state.location,
      title: this.state.title,
      description1: this.state.description1,
      description2: this.state.description2,
      description3: this.state.description3,
      start: this.state.start,
      end: this.state.end,
    };
    let copyOfExpList = this.state.experienceList;
    copyOfExpList[this.state.currentEditIndex] = newExperience;
    this.setState({
      experienceList: copyOfExpList,
      formOn: false,
    });
  };

  render() {
    return (
      <div id='ExperienceComponent'>
        <div>Experience</div>
        <button className='editBtn' onClick={this.toggleAdder}>
          Add
        </button>
        <ExperienceList
          state={this.state}
          deleteBtnAction={this.deleteEntry}
          editBtnAction={this.toggleEditor}
        />
        {/* Form */}
        {this.state.formOn && (
          <form
            className='form'
            onSubmit={
              this.state.formHeading === 'Edit Experience'
                ? this.onSubmitEdit
                : this.onSubmitAdd
            }
          >
            <div className='adderFormHeading'>{this.state.formHeading}</div>
            {/* organization */}
            <label className='inputFieldLabel' htmlFor='orgnanizationInput'>
              Organization
            </label>
            <input
              id='orgnanizationInput'
              name='orgnanization'
              type='text'
              maxLength='100'
              value={this.state.organization}
              onChange={this.handleChangeOrganization}
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
              maxLength='100'
              value={this.state.location}
              onChange={this.handleChangeLocation}
              required
            />
            {/* title */}
            <label className='inputFieldLabel' htmlFor='positionInput'>
              Position
            </label>
            <input
              id='positionInput'
              name='title'
              type='text'
              maxLength='100'
              value={this.state.title}
              onChange={this.handleChangePosition}
              required
            />
            {/* start date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              Start
            </label>
            <input
              id='startInput'
              name='start'
              type='text'
              value={this.state.start}
              onChange={this.handleChangeStartDate}
            />
            {/* end date */}
            <label className='inputFieldLabel' htmlFor='endDate'>
              End
            </label>
            <input
              id='endInput'
              name='end'
              type='text'
              value={this.state.end}
              onChange={this.handleChangeEndDate}
            />
            {/* description1 */}
            <label className='inputFieldLabel' htmlFor='description1Input'>
              Description 1
            </label>
            <textarea
              rows='4'
              maxLength='300'
              id='description1Input'
              name='description1'
              wrap='soft'
              value={this.state.description1}
              onChange={this.handleChangeDescription1}
            ></textarea>
            {/* description2 */}
            <label className='inputFieldLabel' htmlFor='description2Input'>
              Description 2
            </label>
            <textarea
              rows='4'
              maxLength='300'
              id='description2Input'
              name='description2'
              wrap='soft'
              value={this.state.description2}
              onChange={this.handleChangeDescription2}
            ></textarea>
            {/* description3 */}
            <label className='inputFieldLabel' htmlFor='description3Input'>
              Description 3
            </label>
            <textarea
              rows='4'
              maxLength='300'
              id='description3Input'
              name='description3'
              wrap='soft'
              value={this.state.description3}
              onChange={this.handleChangeDescription3}
            ></textarea>
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

export default Experience;
