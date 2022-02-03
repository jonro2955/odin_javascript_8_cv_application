import React, { Component } from 'react';

class Name extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      name: 'John Webster',
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
      <div id='NameComponent'>
        <div className='leftColumnHeader'>
          <div className='leftColumnHeading'>{this.state.name}</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Edit
          </button>
        </div>
        {/* form */}
        {this.state.editorToggle && (
          <form id='nameEditForm' className='form' onSubmit={this.toggleEditor}>
            <label className='inputFieldLabel' htmlFor='nameEditForm'>
              Name
            </label>
            <input
              name='name'
              type='text'
              id='nameEditForm'
              value={this.state.name}
              onChange={this.onChange}
              autoFocus
            />
            <input type='submit' value='Done' className='formBtn' />
          </form>
        )}
      </div>
    );
  }
}

export default Name;
