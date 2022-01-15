import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.state = {
      editorToggle: false,
      address: '123 Town Street, City, State, ZIP',
      phone: '555-555-5555',
      email: 'info@website.com',
      website: 'website.com',
      linkedin: 'user-name',
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

  changeContact = (e) => {
    e.preventDefault();
    const addressInput = document.getElementById('addressInput').value;
    const phoneInput = document.getElementById('phoneInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const websiteInput = document.getElementById('websiteInput').value;
    const linkedinInput = document.getElementById('linkedinInput').value;
    if (
      addressInput ||
      phoneInput ||
      emailInput ||
      websiteInput ||
      linkedinInput
    ) {
      this.setState({
        address: document.getElementById('addressInput').value,
        phone: document.getElementById('phoneInput').value,
        email: document.getElementById('emailInput').value,
        website: document.getElementById('websiteInput').value,
        linkedin: document.getElementById('linkedinInput').value,
      });
    }
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  };

  render() {
    return (
      <div id='Contact'>
        <div className='leftColumnHeader'>
          <div className='leftColumnHeading'>Contact</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Edit
          </button>
        </div>
        <div className='address'>
          <div className='contactInfoLabel'>Address</div>
          <p>{this.state.address}</p>
        </div>
        <div className='phone'>
          <div className='contactInfoLabel'>Phone</div>
          <p>{this.state.phone}</p>
        </div>
        <div className='email'>
          <div className='contactInfoLabel'>Email</div>
          <p>{this.state.email}</p>
        </div>
        <div className='website'>
          <div className='contactInfoLabel'>Website</div>
          <p>{this.state.website}</p>
        </div>
        <div className='linkedin'>
          <div className='contactInfoLabel'>Linkedin</div>
          <p>{this.state.linkedin}</p>
        </div>

        {this.state.editorToggle && (
          <form
            id='contactEditForm'
            className='componentEditForm'
            onSubmit={this.toggleEditor}
          >
            <div>Edit Contact Info</div>
            <label className='inputFieldLabel' htmlFor='addressInput'>
              Address
            </label>
            <input
              id='addressInput'
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.onChange}
              autoFocus
            />
            <label className='inputFieldLabel' htmlFor='phoneInput'>
              Phone
            </label>
            <input
              id='phoneInput'
              type='text'
              name='phone'
              onChange={this.onChange}
              value={this.state.phone}
            />
            <label className='inputFieldLabel' htmlFor='emailInput'>
              Email
            </label>
            <input
              id='emailInput'
              type='text'
              name='email'
              onChange={this.onChange}
              value={this.state.email}
            />
            <label className='inputFieldLabel' htmlFor='websiteInput'>
              Website
            </label>
            <input
              id='websiteInput'
              type='text'
              name='website'
              onChange={this.onChange}
              value={this.state.website}
            />
            <label className='inputFieldLabel' htmlFor='linkedinInput'>
              LinkedIn Username
            </label>
            <input
              id='linkedinInput'
              type='text'
              name='linkedin'
              onChange={this.onChange}
              value={this.state.linkedin}
            />
            <input
              type='submit'
              value='Done'
              className='doneBtn'
            />
          </form>
        )}
      </div>
    );
  }
}

export default Contact;
