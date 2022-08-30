import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.state = {
      formOn: false,
      address: "123 Center Street, City, State, ZIP",
      phone: "123-456-7890",
      email: "info@website.com",
      website: "website.com",
      linkedin: "in/username",
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
    const addressInput = document.getElementById("addressInput").value;
    const phoneInput = document.getElementById("phoneInput").value;
    const emailInput = document.getElementById("emailInput").value;
    const websiteInput = document.getElementById("websiteInput").value;
    const linkedinInput = document.getElementById("linkedinInput").value;
    if (addressInput || phoneInput || emailInput || websiteInput || linkedinInput) {
      this.setState({
        address: document.getElementById("addressInput").value,
        phone: document.getElementById("phoneInput").value,
        email: document.getElementById("emailInput").value,
        website: document.getElementById("websiteInput").value,
        linkedin: document.getElementById("linkedinInput").value,
      });
    }
    this.setState((prevState) => ({
      formOn: !prevState.formOn,
    }));
  };

  render() {
    return (
      <div id="ContactComponent">
        <div id="contactCenterBox">
          <button className="editBtn" type="button" onClick={this.toggleForm}>
            Edit
          </button>
          <div className="address">
            <div className="contactHeading">Address:</div>
            <div>{this.state.address}</div>
          </div>
          <div className="phone">
            <div className="contactHeading">Phone:</div>
            <div>{this.state.phone}</div>
          </div>
          <div className="email">
            <div className="contactHeading">Email:</div>
            <div>{this.state.email}</div>
          </div>
          <div className="website">
            <div className="contactHeading">Website:</div>
            <div>{this.state.website}</div>
          </div>
          <div className="linkedin">
            <div className="contactHeading">Linkedin:</div>
            <div>{this.state.linkedin}</div>
          </div>

          {/* Form */}
          {this.state.formOn && (
            <form className="contactForm" onSubmit={this.toggleForm}>
              <label className="inputFieldLabel" htmlFor="addressInput">
                Address
              </label>
              <input
                id="addressInput"
                type="text"
                name="address"
                maxLength="100"
                value={this.state.address}
                onChange={this.onChange}
                autoFocus
              />
              <label className="inputFieldLabel" htmlFor="phoneInput">
                Phone
              </label>
              <input
                id="phoneInput"
                type="text"
                name="phone"
                maxLength="100"
                onChange={this.onChange}
                value={this.state.phone}
              />
              <label className="inputFieldLabel" htmlFor="emailInput">
                Email
              </label>
              <input
                id="emailInput"
                type="text"
                name="email"
                maxLength="100"
                onChange={this.onChange}
                value={this.state.email}
              />
              <label className="inputFieldLabel" htmlFor="websiteInput">
                Website
              </label>
              <input
                id="websiteInput"
                type="text"
                name="website"
                maxLength="100"
                onChange={this.onChange}
                value={this.state.website}
              />
              <label className="inputFieldLabel" htmlFor="linkedinInput">
                LinkedIn Username
              </label>
              <input
                id="linkedinInput"
                type="text"
                name="linkedin"
                maxLength="100"
                onChange={this.onChange}
                value={this.state.linkedin}
              />
              <input type="submit" value="Done" className="formBtn" />
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
