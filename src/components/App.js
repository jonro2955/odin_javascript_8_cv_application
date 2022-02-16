import React, { Component } from 'react';
import Resume from './Resume';
import ReactToPrint from 'react-to-print';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id='AppComponent'>
        <Resume ref={(el) => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => {
            return <button id='printBtn'>PRINT TO PDF</button>;
          }}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

export default App;
