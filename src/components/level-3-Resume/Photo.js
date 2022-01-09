import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
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

  changePhoto = (e) => {
    e.preventDefault();
    this.togglePhotoEditor();
    const newURL = document.getElementById('photoURLInput').value;
    if (newURL) {
      console.log('hey')
    }
    this.setState({
      photoURL: document.getElementById('photoURLInput').value,
    });
  };

  render() {
    const { editorToggle, photoURL } = this.state;
    const photoStyle = {
      backgroundImage: 'url(' + photoURL + ')',
    };

    return (
      <div id='Photo' onClick={this.togglePhotoEditor} style={photoStyle}>
        <p id='photoLabel'>
          Click <br></br> to Edit <br></br> Photo
        </p>

        {editorToggle && (
          <form
            id='photoEditForm'
            onClick={this.togglePhotoEditor}
            onSubmit={this.changePhoto}
          >
            <label htmlFor='photoEditForm'>Photo URL</label>
            <input id='photoURLInput' type='text' />
            <button id='photoEditorSubmitBtn' type='submit'>
              Submit
            </button>
            <button id='photoEditorCloseBtn' onClick={this.togglePhotoEditor}>
              Close
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Photo;
