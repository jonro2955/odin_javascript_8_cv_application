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
      <div id='Name'>
        <div className='leftColumnHeader'>
          <div className='leftColumnHeading'>Name</div>
          <button className='editBtn' onClick={this.toggleEditor}>
            Edit
          </button>
        </div>
        <div>{this.state.name}</div>
        {this.state.editorToggle && (
          <form
            id='nameEditForm'
            className='componentEditForm'
            onSubmit={this.toggleEditor}
          >
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
            <input
              type='submit'
              value='Done'
              className='doneBtn'
            />
          </form>
        )}
      </div>
    );
  }
}

export default Name;
