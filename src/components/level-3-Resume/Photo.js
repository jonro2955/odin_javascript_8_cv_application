import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.togglePhotoEditor = this.togglePhotoEditor.bind(this);
    this.state = {
      editorToggle: false,
      photoURL:
        'https://moderndogmagazine.com/sites/default/files/images/articles/top_images/husky2.jpg',
      //https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg
    };
  }

  togglePhotoEditor = (e) => {
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
    const photoStyle = {
      backgroundImage: 'url(' + this.state.photoURL + ')',
    };

    return (
      <div id='Photo' style={photoStyle}>
        <button className='photoEditBtn' onClick={this.togglePhotoEditor}>Change Photo</button>
        {/* form */}
        {this.state.editorToggle && (
          <form
            id='photoEditForm'
            className='form'
            onSubmit={this.togglePhotoEditor}
          >
            <label htmlFor='photoURLInput'>New Photo URL</label>
            <input
              id='photoURLInput'
              name='photoURL'
              type='text'
              value={this.state.photoURL}
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

export default Photo;
