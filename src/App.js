import React, { Component } from "react";
import Resume from "./components/Resume";
import ReactToPrint from "react-to-print";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id="AppComponent">
        <ReactToPrint
          trigger={() => {
            return <button id="printBtn">PRINT TO PDF</button>;
          }}
          content={() => this.componentRef}
        />
        <Resume ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default App;
