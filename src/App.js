import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Balances from './components/Balances.js'
import Trade from './components/Trade.js'
import Sell from './components/Sell.js'
import BitcoinGraph from './components/BitcoinGraph.js'
import BitcoinPrice from './components/BitcoinPrice.js'
import USDBalance from './components/USDBalance.js'





class App extends Component {
  constructor(){
    super()
    this.state = {
      current_price: "",

    }
  } 

  componentWillMount() {
    fetch('https://blockchain.info/q/24hrprice')
      .then(response => response.json())
      .then(data => this.setState({current_price: data}))
      }
  render() {
    return (
      <div className="container">
        <NavBar />

        <div className="row">
          <div className="col-md-4">
          <Trade />
          </div>
          <div className="col-md-4">
          <Sell />
          </div>
        <div className="col-md-4">
          <BitcoinPrice current_price={this.state.current_price}/>
              </div>
         
          <div className="col-md-3">
          
          </div>
        </div>
        <BitcoinGraph />
      </div>
    );
  }
}

export default App;
