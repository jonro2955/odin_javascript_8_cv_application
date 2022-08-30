import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);

    this.state = {
      name: "Your Name",
      formOn: false,
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

  render() {
    return (
      <div id="NameComponent">
        <button className="editBtn" onClick={this.toggleForm}>
          Edit
        </button>
        <div id="name" className="alignLeft">
          {this.state.name}
        </div>
        {/* form */}
        {this.state.formOn && (
          <form className="formPosition2" onSubmit={this.toggleForm}>
            <label className="inputFieldLabel" htmlFor="nameEditForm">
              Your Name
            </label>
            <textarea
              name="name"
              maxLength="50"
              rows="3"
              id="nameEditForm"
              value={this.state.name}
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

export default Name;
