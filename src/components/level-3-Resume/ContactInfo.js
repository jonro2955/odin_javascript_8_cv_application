import React, { Component } from 'react';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
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

  toggleContactEditor = (e) => {
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
      <div id='ContactInfo'>
        <div id='contactInfoHeading'>
          <div className='left-column-headings'>ContactInfo</div>
          <button id='contactInfoEditBtn' onClick={this.toggleContactEditor}>
            Edit
          </button>
        </div>
        <div className='address'>
          <div className='contact-info-field-labels'>Address</div>
          <p>{this.state.address}</p>
        </div>
        <div className='phone'>
          <div className='contact-info-field-labels'>Phone</div>
          <p>{this.state.phone}</p>
        </div>
        <div className='email'>
          <div className='contact-info-field-labels'>Email</div>
          <p>{this.state.email}</p>
        </div>
        <div className='website'>
          <div className='contact-info-field-labels'>Website</div>
          <p>{this.state.website}</p>
        </div>
        <div className='linkedin'>
          <div className='contact-info-field-labels'>Linkedin</div>
          <p>{this.state.linkedin}</p>
        </div>

        {this.state.editorToggle && (
          <form id='contactEditForm' onSubmit={this.toggleContactEditor}>
            <div>Edit Contact Info</div>
            <label htmlFor='addressInput'>Address</label>
            <input
              id='addressInput'
              type='text'
              htmlFor='photoEditForm'
              name='address'
              value={this.state.address}
              onChange={this.onChange}
              autoFocus
            />
            <label htmlFor='phoneInput'>Phone</label>
            <input
              id='phoneInput'
              type='text'
              name='phone'
              onChange={this.onChange}
              value={this.state.phone}
            />
            <label htmlFor='emailInput'>Email</label>
            <input
              id='emailInput'
              type='text'
              name='email'
              onChange={this.onChange}
              value={this.state.email}
            />
            <label htmlFor='websiteInput'>Website</label>
            <input
              id='websiteInput'
              type='text'
              name='website'
              onChange={this.onChange}
              value={this.state.website}
            />
            <label htmlFor='linkedinInput'>LinkedIn Username</label>
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
              style={{ fontWeight: 'bold', backgroundColor: 'orange' }}
            />
          </form>
        )}
      </div>
    );
  }
}

export default ContactInfo;
