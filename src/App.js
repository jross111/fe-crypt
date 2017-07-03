import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Balances from './components/Balances.js'
import Trade from './components/Trade.js'
import BitcoinGraph from './components/BitcoinGraph.js'


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="row">
          <div className="col-md-6">
            <Balances />
          </div>
          <div className="col-md-6">
            <Trade />
          </div>
        </div>
        <BitcoinGraph  />
      </div>
    );
  }
}

export default App;
