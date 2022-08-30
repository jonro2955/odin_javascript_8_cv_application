import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      title: "Your Title",
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
      <div id="TitleComponent">
        <button className="editBtn" onClick={this.toggleEditor}>
          Edit
        </button>
        <div id="title" className="alignLeft">
          {this.state.title}
        </div>
        {/* form */}
        {this.state.editorToggle && (
          <form className="formPosition2" onSubmit={this.toggleEditor}>
            <label className="inputFieldLabel" htmlFor="nameInput">
              Your Title
            </label>
            <textarea
              id="nameInput"
              name="title"
              rows="3"
              maxLength="50"
              value={this.state.title}
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

export default Title;
