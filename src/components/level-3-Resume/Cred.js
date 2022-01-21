import React, { Component } from 'react';

class Cred extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='Cred'>
        <p>{this.props.school}</p>
        <p>{this.props.degree}</p>
        <p>{this.props.start}</p>
        <p>{this.props.end}</p>
      </div>
    );
  }
}

export default Cred;
