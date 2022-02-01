import React, { Component } from 'react';
import ExperienceList from './ExperienceList.js';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adderOn: false,
      editorOn: false,
      currentEditIndex: '',
      experience: {
        id: uniqid(),
        organization: '',
        position: '',
        description1: '',
        description2: '',
        description3: '',
        start: '',
        end: '',
      },
      experienceList: [
        {
          id: uniqid(),
          organization: 'My Organization',
          position: 'My Position',
          description1: 'Exp description1',
          description2: 'Exp description2',
          description3: 'Exp description3',
          start: '2022-01-10',
          end: '2023-01-10',
        },
      ],
    };
  }

  handleChangeOrganization = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: e.target.value,
        position: this.state.experience.position,
        description1: this.state.experience.description1,
        description2: this.state.experience.description2,
        description3: this.state.experience.description3,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleChangePosition = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: this.state.experience.organization,
        position: e.target.value,
        description1: this.state.experience.description1,
        description2: this.state.experience.description2,
        description3: this.state.experience.description3,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleChangeDescription1 = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: this.state.experience.organization,
        position: this.state.experience.position,
        description1: e.target.value,
        description2: this.state.experience.description2,
        description3: this.state.experience.description3,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleChangeDescription1 = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: this.state.experience.organization,
        position: this.state.experience.position,
        description1: e.target.value,
        description2: this.state.experience.description2,
        description3: this.state.experience.description3,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleChangeDescription2 = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: this.state.experience.organization,
        position: this.state.experience.position,
        description1: this.state.experience.description1,
        description2: e.target.value,
        description3: this.state.experience.description3,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleChangeDescription3 = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: this.state.experience.organization,
        position: this.state.experience.position,
        description1: this.state.experience.description1,
        description2: this.state.experience.description2,
        description3: e.target.value,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleChangeStartDate = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: this.state.experience.organization,
        position: this.state.experience.position,
        description1: this.state.experience.description1,
        description2: this.state.experience.description2,
        description3: this.state.experience.description3,
        start: e.target.value,
        end: this.state.experience.end,
      },
    });
  };

  handleChangeEndDate = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        organization: this.state.experience.organization,
        position: this.state.experience.position,
        description1: this.state.experience.description1,
        description2: this.state.experience.description2,
        description3: this.state.experience.description3,
        start: this.state.experience.start,
        end: e.target.value,
      },
    });
  };

  onSubmitAdd = () => {
    this.setState({
      adderOn: false,
      experienceList: this.state.experienceList.concat(this.state.experience),
      experience: {
        id: uniqid(),
        organization: '',
        position: '',
        description1: '',
        description2: '',
        description3: '',
        start: '',
        end: '',
      },
    });
  };

  toggleAdder = () => {
    this.setState((prevState) => ({
      adderOn: !prevState.adderOn,
    }));
  };

  closeEditor = () => {
    this.setState({
      editorOn: false,
    });
  };

  /* openEditor(e) is to be attached to an entry's edit button. 
  That edit button will be assigned the corresponding id from within the ExperienceList 
  component's render function. This id is used to determine the targetIndex 
  for editing the correct experience item in the experienceList array.*/
  openEditor = (e) => {
    let targetIndex;
    this.state.experienceList.forEach((exp, i) => {
      if (exp.id === e.target.id) {
        targetIndex = i;
      }
    });
    this.setState((prevState) => ({
      editorOn: !prevState.editorOn,
      currentEditIndex: targetIndex,
      experience: {
        id: this.state.experienceList[targetIndex].id,
        organization: this.state.experienceList[targetIndex].organization,
        position: this.state.experienceList[targetIndex].position,
        description1: this.state.experienceList[targetIndex].description1,
        description2: this.state.experienceList[targetIndex].description2,
        description3: this.state.experienceList[targetIndex].description3,
        start: this.state.experienceList[targetIndex].start,
        end: this.state.experienceList[targetIndex].end,
      },
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
    let copy = this.state.experienceList;
    copy[this.state.currentEditIndex] = this.state.experience;
    this.setState({
      experienceList: copy,
      editorOn: false,
      experience: {
        id: uniqid(),
        organization: '',
        position: '',
        description1: '',
        description2: '',
        description3: '',
        start: '',
        end: '',
      },
    });
  };

  render() {
    return (
      <div id='Experience'>
        <div className='rightColumnHeader'>
          <div>Experience</div>
          <button className='editBtn' onClick={this.toggleAdder}>
            Add
          </button>
        </div>
        <ExperienceList
          state={this.state}
          deleteBtnAction={this.deleteEntry}
          editBtnAction={this.openEditor}
        />
        {/* Adder Form */}
        {this.state.adderOn && (
          <form
            id='experienceAdderForm'
            className='componentEditForm'
            onSubmit={this.onSubmitAdd}
          >
            <div className='adderFormHeading'>Add Experience</div>
            {/* organization */}
            <label className='inputFieldLabel' htmlFor='orgnanizationInput'>
              Organization
            </label>
            <input
              id='orgnanizationInput'
              name='orgnanization'
              type='text'
              value={this.state.experience.organization}
              onChange={this.handleChangeOrganization}
              autoFocus
              required
            />
            {/* position */}
            <label className='inputFieldLabel' htmlFor='positionInput'>
              Position
            </label>
            <input
              id='positionInput'
              name='position'
              type='text'
              value={this.state.experience.position}
              onChange={this.handleChangePosition}
              required
            />
            {/* description1 */}
            <label className='inputFieldLabel' htmlFor='description1Input'>
              Description 1
            </label>
            <input
              id='description1Input'
              name='description1'
              type='text'
              value={this.state.experience.description1}
              onChange={this.handleChangeDescription1}
            />
            {/* description2 */}
            <label className='inputFieldLabel' htmlFor='description2Input'>
              Description 2
            </label>
            <input
              id='description2Input'
              name='description2'
              type='text'
              value={this.state.experience.description2}
              onChange={this.handleChangeDescription2}
            />
            {/* description3 */}
            <label className='inputFieldLabel' htmlFor='description3Input'>
              Description 3
            </label>
            <input
              id='description3Input'
              name='description3'
              type='text'
              value={this.state.experience.description3}
              onChange={this.handleChangeDescription3}
            />
            {/* start date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              Start Date
            </label>
            <input
              id='startInput'
              name='start'
              type='date'
              value={this.state.experience.start}
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
              value={this.state.experience.end}
              onChange={this.handleChangeEndDate}
            />
            {/* form sumbit button */}
            <input type='submit' value='Submit' className='doneBtn' />
            <button className='doneBtn' onClick={this.toggleAdder}>
              Cancel
            </button>
          </form>
        )}

        {/* Editor Form: This form looks like a duplicate of the adder but 
        an important difference is it calls the this.onSubmitEdit callback 
        upon onSubmit. */}
        {this.state.editorOn && (
          <form
            id='experienceEditorForm'
            className='componentEditForm'
            onSubmit={this.onSubmitEdit}
          >
            <div className='adderFormHeading'>Edit Experience</div>
            {/* organization */}
            <label className='inputFieldLabel' htmlFor='orgnanizationInput'>
              Organization
            </label>
            <input
              id='orgnanizationInput'
              name='orgnanization'
              type='text'
              value={this.state.experience.organization}
              onChange={this.handleChangeOrganization}
              autoFocus
              required
            />
            {/* position */}
            <label className='inputFieldLabel' htmlFor='positionInput'>
              Position
            </label>
            <input
              id='positionInput'
              name='position'
              type='text'
              value={this.state.experience.position}
              onChange={this.handleChangePosition}
              required
            />
            {/* description1 */}
            <label className='inputFieldLabel' htmlFor='description1Input'>
              Description 1
            </label>
            <input
              id='description1Input'
              name='description1'
              type='text'
              value={this.state.experience.description1}
              onChange={this.handleChangeDescription1}
              required
            />
            {/* description2 */}
            <label className='inputFieldLabel' htmlFor='description2Input'>
              Description 2
            </label>
            <input
              id='description2Input'
              name='description2'
              type='text'
              value={this.state.experience.description2}
              onChange={this.handleChangeDescription2}
              required
            />
            {/* description3 */}
            <label className='inputFieldLabel' htmlFor='description3Input'>
              Description 3
            </label>
            <input
              id='description3Input'
              name='description3'
              type='text'
              value={this.state.experience.description3}
              onChange={this.handleChangeDescription3}
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
              value={this.state.experience.start}
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
              value={this.state.experience.end}
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

export default Experience;
