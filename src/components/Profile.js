import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      profile: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
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
      <div id="ProfileComponent">
        <div id="profileHeading" className="borderedHeading alignLeft">
          Profile
        </div>
        <button className="editBtn" onClick={this.toggleEditor}>
          Edit
        </button>
        <div className="alignLeft fontSize15">{this.state.profile}</div>
        {this.state.editorToggle && (
          <form className="formPosition2" onSubmit={this.toggleEditor}>
            <label className="inputFieldLabel" htmlFor="profileInput">
              Profile
            </label>
            <textarea
              rows="9"
              maxLength="525"
              id="profileInput"
              name="profile"
              wrap="soft"
              value={this.state.profile}
              onChange={this.onChange}
              autoFocus
            ></textarea>
            <input type="submit" value="Done" className="formBtn" />
          </form>
        )}
      </div>
    );
  }
}

export default Profile;
