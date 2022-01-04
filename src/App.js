import './styles/reset.css';
import './styles/index.css';

import React, { Component } from 'react';
import Header from './components/level-1-App/Header';
import Main from './components/level-1-App/Main';
import Footer from './components/level-1-App/Footer';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div id='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
