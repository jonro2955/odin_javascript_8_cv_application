import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      profile: 'I am a Web Developer',
      editorToggle: false,
    };
  }

  toggleEditor = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id='Profile'>
        <div className='leftColumnHeader'>
          <div className='leftColumnHeading'>Profile</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Edit
          </button>
        </div>
        <div>{this.state.profile}</div>
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
        )}
      </div>
    );
  }
}

export default Profile;
