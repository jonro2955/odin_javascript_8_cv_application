import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='Experience'>
        <div className='rightColumnHeader'>
          <div>Experience</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Experience;
