import React, { Component } from 'react';
import Header from './main-components/Header';
import Main from './main-components/Main';
import Footer from './main-components/Footer';
import './index.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
