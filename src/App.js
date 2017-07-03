import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Balances from './components/Balances.js'
class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Balances />

      </div>
    );
  }
}

export default App;
