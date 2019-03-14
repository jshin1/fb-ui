import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/NavBar'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
