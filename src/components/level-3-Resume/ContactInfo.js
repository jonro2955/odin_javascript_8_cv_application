import React, { Component } from 'react';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    // this.changeContact = this.changeContact.bind(this);
    // this.toggleContactEditor = this.toggleContactEditor.bind(this);
    this.toggleContactEditor = this.toggleContactEditor.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.state = {
      address: '123 Town Street, City, State, ZIP',
      phone: '555-555-5555',
      email: 'info@website.com',
      website: 'website.com',
      linkedin: 'user-name',
      editorToggle: false,
    };
  }

  toggleContactEditor() {
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  }

  changeContact(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
    this.setState({
      address: document.getElementById('addressInput').value,
      phone: document.getElementById('phoneInput').value,
      email: document.getElementById('emailInput').value,
      website: document.getElementById('websiteInput').value,
      linkedin: document.getElementById('linkedinInput').value,
    });
    console.log('?');
  }

  render() {
    const { address, phone, email, website, linkedin, editorToggle } =
      this.state;

    return (
      <div id='ContactInfo'>
        <div className='left-column-headings'>ContactInfo</div>
        <div className='address'>
          <div className='contact-info-field-labels'>Address</div>
          <p>{address}</p>
        </div>
        <div className='phone'>
          <div className='contact-info-field-labels'>Phone</div>
          <p>{phone}</p>
        </div>
        <div className='email'>
          <div className='contact-info-field-labels'>Email</div>
          <p>{email}</p>
        </div>
        <div className='website'>
          <div className='contact-info-field-labels'>Website</div>
          <p>{website}</p>
        </div>
        <div className='linkedin'>
          <div className='contact-info-field-labels'>Linkedin</div>
          <p>{linkedin}</p>
        </div>
        <button onClick={this.toggleContactEditor}>Edit</button>

        {editorToggle && (
          <form id='contactEditForm' onSubmit={this.changeContact}>
            <div>Edit Contact Info</div>
            <label htmlFor='addressInput'>Address</label>
            <input id='addressInput' type='text' />
            <label htmlFor='phoneInput'>Phone</label>
            <input id='phoneInput' type='text' />
            <label htmlFor='emailInput'>Email</label>
            <input id='emailInput' type='text' />
            <label htmlFor='websiteInput'>Website</label>
            <input id='websiteInput' type='text' />
            <label htmlFor='linkedinInput'>LinkedIn Username</label>
            <input id='linkedinInput' type='text' />
            <button type='submit' form='contactEditForm'>
              Enter
            </button>
            <button type='button' onClick={this.toggleContactEditor}>
              Cancel
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactInfo;
