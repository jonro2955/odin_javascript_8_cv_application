import React, { Component } from 'react';

class Name extends Component {
  constructor(props) {
    super(props);
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
        <div className='leftColumnHeading'>
          <div className='left-column-headings'>Name</div>
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
            <label htmlFor='nameEditForm'>Name</label>
            <input
              id='nameInput'
              name='name'
              type='text'
              htmlFor='nameEditForm'
              value={this.state.name}
              onChange={this.onChange}
              autoFocus
            />
            <input
              type='submit'
              value='Done'
              className='doneBtn'
              style={{ fontWeight: 'bold', backgroundColor: 'orange' }}
            />
          </form>
        )}
      </div>
    );
  }
}

export default Name;
