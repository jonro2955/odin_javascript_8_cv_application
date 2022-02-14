import React, { Component } from 'react';

class Name extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);

    this.state = {
      name: 'John Webster',
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
      <div id='NameComponent'>
        <button className='editBtn' onClick={this.toggleForm}>
          Edit
        </button>
        <div id='name' className='alignLeft'>{this.state.name}</div>
        {/* form */}
        {this.state.formOn && (
          <form className='form' onSubmit={this.toggleForm}>
            <label className='inputFieldLabel' htmlFor='nameEditForm'>
              Name
            </label>
            <input
              name='name'
              type='text'
              maxLength='100'
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
