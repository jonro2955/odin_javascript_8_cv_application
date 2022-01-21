import React, { Component } from 'react';
import Cred from './Cred.js';

class Education extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      editorToggle: false,
      education: [['School', 'Degree', 'Start', 'End']],
    };
  }

  toggleEditor = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let form = document.querySelector('#addEduForm');
    let displayDiv = document.querySelector('#eduList');
    let school = form.elements['schoolInput'].value;
    let degree = form.elements['degreeInput'].value;
    let start = form.elements['startInput'].value;
    let end = form.elements['endInput'].value;

    this.setState((prevState) => ({
      editorToggle: false,
      education: prevState.education.concat([school, degree, start, end]),
    }));
    displayDiv.append(
      <Cred school='school' degree='degree' start='start' end='end' />
    );
  };

  render() {
    return (
      <div id='Education'>
        <div className='leftColumnHeader'>
          <div className='leftColumnHeading'>Education</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Add
          </button>
        </div>
        <div id='eduList'>{this.state.education}</div>

        {/* education adder form */}
        {this.state.editorToggle && (
          <form
            id='addEduForm'
            className='componentEditForm'
            onSubmit={this.onSubmit}
          >
            <button className='closeBtn' onClick={this.toggleEditor}>
              Cancel
            </button>

            <div className='adderFormHeading'>Add Education</div>

            {/* school name */}
            <label className='inputFieldLabel' htmlFor='schoolInput'>
              School Name
            </label>
            <input
              id='schoolInput'
              name='schoolInput'
              type='text'
              autoFocus
              required
            />

            {/* degree */}
            <label className='inputFieldLabel' htmlFor='degreeInput'>
              Degree
            </label>
            <input id='degreeInput' name='degreeInput' type='text' required />

            {/* start date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              Start Date
            </label>
            <input id='startInput' name='startInput' type='date' required />

            {/* end date */}
            <label className='inputFieldLabel' htmlFor='startDate'>
              End Date
            </label>
            <input id='endInput' name='endInput' type='date' required />

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
