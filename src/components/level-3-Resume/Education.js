import React, { Component } from 'react';
import CredList from './CredList.js';
// Run 'npm install uniqid' to use this package
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);
    this.toggleAdder = this.toggleAdder.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.onSubmitAdd = this.onSubmitAdd.bind(this);
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
    this.state = {
      adderOn: false,
      editorOn: false,
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

  handleChangeStartDate = (e) => {
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

  handleChangeEndDate = (e) => {
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
    this.setState({
      credentials: this.state.credentials.filter(
        (cred) => cred.id !== e.target.id
      ),
    });
  };

  onSubmitAdd = (e) => {
    e.preventDefault();
    this.setState({
      adderOn: false,
      credentials: this.state.credentials.concat(this.state.cred),
      cred: {
        id: uniqid(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
    });
  };

  onSubmitEdit = (e) => {
    e.preventDefault();
    this.setState({
      // credentials: this.state.credentials.concat(this.state.cred),
      // cred: {
      //   id: uniqid(),
      //   school: '',
      //   degree: '',
      //   start: '',
      //   end: '',
      // },
      EditorToggle: false,
    });
  };

  toggleAdder = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      adderOn: !prevState.adderOn,
    }));
  };

  openEditor = (e) => {
    e.preventDefault();
    let credentialsTargetIndex;
    this.state.credentials.forEach((cred, i) => {
      if (cred.id === e.target.id) {
        credentialsTargetIndex = i;
      }
    });
    this.setState({
      editorOn: true,
      cred: {
        id: this.state.credentials[credentialsTargetIndex].id,
        school: this.state.credentials[credentialsTargetIndex].school,
        degree: this.state.credentials[credentialsTargetIndex].degree,
        start: this.state.credentials[credentialsTargetIndex].start,
        end: this.state.credentials[credentialsTargetIndex].end,
      },
    });
  };

  closeEditor = () => {
    this.setState({
      editorOn: false,
    });
  };

  render() {
    return (
      <div id='Education'>
        <div className='rightColumnHeader'>
          <div>Education</div>
          <button className='editBtn' onClick={this.toggleAdder}>
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
            onSubmit={this.onSubmitAdd}
          >
            <div className='adderFormHeading'>Add Education</div>
            {/* school name */}
            <label className='inputFieldLabel' htmlFor='schoolInput'>
              School
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
              value={this.state.cred.end}
              onChange={this.handleChangeEndDate}
            />
            {/* education form sumbit button */}
            <input type='submit' value='Submit' className='doneBtn' />
            <button className='doneBtn' onClick={this.toggleAdder}>
              Cancel
            </button>
          </form>
        )}

        {/* Form: school editor */}
        {this.state.editorOn && (
          <form
            id='educationEditorForm'
            className='componentEditForm'
            onSubmit={this.onSubmitEdit}
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
              value={this.state.cred.end}
              onChange={this.handleChangeEndDate}
            />
            {/* education form sumbit button */}
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
