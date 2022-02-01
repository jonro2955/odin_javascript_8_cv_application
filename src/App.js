import React, { Component } from 'react';
import Resume from './components/level-2-Main/Resume';
import PrintButton from './components/level-2-Main/PrintButton';

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
