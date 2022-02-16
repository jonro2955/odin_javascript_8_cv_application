import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.togglePhotoEditor = this.togglePhotoEditor.bind(this);
    this.state = {
      editorToggle: false,
      photoURL:
        'https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/33/1439490128-plants.jpg',
    };
  }

  togglePhotoEditor = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editorToggle: !prevState.editorToggle,
    }));
  };

  onPhotoURLChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  changePhotoToFile = () => {
    let input = document.getElementById('imageFileInput');
    input.addEventListener('change', function () {
      let file = input.files[0];
      if (!file) {
        return;
      }
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        document.getElementById('photo').style.backgroundImage =
          'url(' + reader.result + ')';
      });
      reader.readAsDataURL(file);
    });
  };

  render() {
    const photoStyle = {
      backgroundImage: 'url(' + this.state.photoURL + ')',
    };

    return (
      <div id='PhotoComponent'>
        <div id='photo' style={photoStyle}>
          {/* <button className='editBtn' onClick={this.togglePhotoEditor}>
            Edit
          </button> */}
          <input
            id='imageFileInput'
            className='photoChooseFileBtn'
            type='file'
            onClick={this.changePhotoToFile}
          ></input>
        </div>

        {/* form */}
        {this.state.editorToggle && (
          <form id='photoForm' onSubmit={this.togglePhotoEditor}>
            <label htmlFor='photoURLInput'>New Photo URL</label>
            <textarea
              id='photoURLInput'
              name='photoURL'
              rows='9'
              wrap='soft'
              value={this.state.photoURL}
              onChange={this.onPhotoURLChange}
              autoFocus
            ></textarea>
            <input type='submit' value='Done' className='formBtn' />
          </form>
        )}
      </div>
    );
  }
}

export default Photo;
