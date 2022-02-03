import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      title: 'Web Developer',
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
      <div id='TitleComponent'>
        <button className='editBtn' onClick={this.toggleEditor}>
          Edit
        </button>
        <div>{this.state.title}</div>
        {/* form */}
        {this.state.editorToggle && (
          <form id='nameEditForm' className='form' onSubmit={this.toggleEditor}>
            <label className='inputFieldLabel' htmlFor='nameInput'>
              Title
            </label>
            <input
              id='nameInput'
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.onChange}
              autoFocus
            />
            <input type='submit' value='Done' className='doneBtn' />
          </form>
        )}
      </div>
    );
  }
}

export default Title;
