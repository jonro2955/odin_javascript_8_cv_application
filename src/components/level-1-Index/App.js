import React, { Component } from 'react';
import Resume from '../level-2-App/Resume';
import PDFButton from '../level-2-App/PDFButton';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id='AppComponent'>
        <Resume />
        <PDFButton />
      </div>
    );
  }
}

export default App;
