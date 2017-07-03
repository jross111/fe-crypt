import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Balances from './components/Balances.js'
class App extends Component {
  render() {
    return (
      <div className="container">
      <NavBar />
      <div className="col-md-3" style={{color: "black"}}>
      <Balances />
      </div>

      </div>
    );
  }
}

export default App;
