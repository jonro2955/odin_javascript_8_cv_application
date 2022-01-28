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
            <div key={cred.id} className='cred'>
              <p>School: {cred.school}</p>
              <p>Degree: {cred.degree}</p>
              <p>Start: {cred.start}</p>
              <p>End: {cred.end}</p>
              <div className='credBtnGroup'>
                <button id={cred.id} onClick={this.props.editBtnAction}>
                  Edit
                </button>
                <button id={cred.id} onClick={this.props.deleteBtnAction}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default CredList;
