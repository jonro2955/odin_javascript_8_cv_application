import React, { Component } from 'react';

class CredList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.state.credentials.map((cred) => {
          return (
            <div key={cred.id}>
              <p>School: {cred.school}</p>
              <p>Degree: {cred.degree}</p>
              <p>Start: {cred.start}</p>
              <p>End: {cred.end}</p>
              <button id={cred.id} onClick={this.props.editBtnAction}>
                Edit
              </button>
              <button id={cred.id} onClick={this.props.deleteBtnAction}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default CredList;
