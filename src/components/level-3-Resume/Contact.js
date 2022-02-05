import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.state = {
      formOn: false,
      address: '123 Town Street, City, State, ZIP',
      phone: '555-555-5555',
      email: 'info@website.com',
      website: 'website.com',
      linkedin: 'user-name',
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      formOn: !prevState.formOn,
    }));
  };

  closeForm = () => {
    this.setState({
      formOn: false,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeContact = () => {
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
      formOn: !prevState.formOn,
    }));
  };

  render() {
    return (
      <div id='ContactComponent'>
        <div className='leftColumnHeader'>
          <div className='leftColumnHeading'>Contact</div>
          <button className='editBtn' onClick={this.toggleForm}>
            Edit
          </button>
        </div>
        <div className='address'>
          <div className='contactInfoLabel'>Address</div>
          <div>{this.state.address}</div>
        </div>
        <div className='phone'>
          <div className='contactInfoLabel'>Phone</div>
          <div>{this.state.phone}</div>
        </div>
        <div className='email'>
          <div className='contactInfoLabel'>Email</div>
          <div>{this.state.email}</div>
        </div>
        <div className='website'>
          <div className='contactInfoLabel'>Website</div>
          <div>{this.state.website}</div>
        </div>
        <div className='linkedin'>
          <div className='contactInfoLabel'>Linkedin</div>
          <div>{this.state.linkedin}</div>
        </div>

        {this.state.formOn && (
          <form
            id='contactEditForm'
            className='form'
            onSubmit={this.toggleForm}
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
            <input type='submit' value='Done' className='formBtn' />
          </form>
        )}
      </div>
    );
  }
}

export default Contact;
