import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Messenger from './components/Messenger'

const faker = require('faker')
const name = faker.name.findName();

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className='main'>
          <Home />

        </div>
        <Messenger faker={faker}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setHome: (data) => dispatch({type: 'SET_HOME', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
