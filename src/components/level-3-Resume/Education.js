import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      editorToggle: false,
    };
  }

  toggleEditor = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
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
        {/* <div>{this.state.profile}</div>
        {this.state.editorToggle && (
          <form
            id='nameEditForm'
            className='componentEditForm'
            onSubmit={this.toggleEditor}
          >
            <label className='inputFieldLabel' htmlFor='nameInput'>
              Profile
            </label>
            <input
              id='nameInput'
              name='profile'
              type='text'
              value={this.state.profile}
              onChange={this.onChange}
              autoFocus
            />
            <input type='submit' value='Done' className='doneBtn' />
          </form>
        )} */}
      </div>
    );
  }
}

export default Education;
