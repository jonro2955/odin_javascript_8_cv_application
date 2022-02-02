import React, { Component } from 'react';
import Resume from '../level-2-App/Resume';
import PrintButton from '../level-2-App/PrintButton';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id='App'>
        <Resume />
        <PrintButton />
      </div>
    );
  }
}

export default App;
