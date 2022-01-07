import React, { Component } from 'react';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      phone: '',
      email: '',
      website: '',
      linkedin: '',
      editorToggle: false,
    };
  }

  toggleContactEditor = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  };

  changeContact = (e) => {
    e.preventDefault();
    this.togglePhotoEditor();
    this.setState({
      address: document.getElementById('addressInput').value,
      phone: document.getElementById('phoneInput').value,
      email: document.getElementById('emailInput').value,
      website: document.getElementById('websiteInput').value,
      linkedin: document.getElementById('linkedinInput').value,
    });
  };

  render() {
    const { editorToggle } = this.state;

    return (
      <div id='ContactInfo' onClick={this.toggleContactEditor}>
        <p>ContactInfo</p>

        {editorToggle && (
          <form
            id='contactEditForm'
            onClick={this.toggleContactEditor}
            onSubmit={this.changeContact}
          >
            <label htmlFor='addressInput'>Address</label>
            <input
              id='addressInput'
              type='text'
              placeholder='123 Address St'
              onChange={this.handleAddress1Change}
            />
            <label htmlFor='phoneInput'>Phone</label>
            <input
              id='phoneInput'
              type='text'
              onChange={this.handlePhoneChange}
            />
            <label htmlFor='emailInput'>Email</label>
            <input
              id='emailInput'
              type='text'
              onChange={this.handleEmailChange}
            />
            <label htmlFor='websiteInput'>Website</label>
            <input
              id='websiteInput'
              type='text'
              onChange={this.handleWebsiteChange}
            />
            <label htmlFor='linkedinInput'>LinkedIn Username</label>
            <input
              id='linkedinInput'
              type='text'
              onChange={this.handleLinkedinChange}
            />
            <button id='contactEditorSubmitBtn' type='submit'>
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactInfo;
