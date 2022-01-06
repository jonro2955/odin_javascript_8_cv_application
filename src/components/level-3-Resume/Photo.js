import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPhoto: false,
      photoURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    };
  }

  handlePhotoChange = (e) => {
    this.setState({
      photoURL: e.target.value,
    });
  };

  toggleEditPhoto = () => {
    this.setState((prevState) => ({
      editPhoto: !prevState.editPhoto,
    }));
  };

  render() {
    const { editPhoto, photoURL } = this.state;
    return (
      <div id='Photo' onClick={this.toggleEditPhoto}>
        <p id='photoLabel'>Photo</p>
        {editPhoto && (
          <form
            id='photoEditForm'
            className='photo-edit-form'
            onClick={this.toggleEditPhoto}
          >
            <label htmlFor='photoEditForm'>Photo URL</label>
            <input id='photoURLInput' type='text' onChange={this.handlePhotoChange} />
            <button type='submit'>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Photo;
