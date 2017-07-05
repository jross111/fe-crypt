import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Balances from './components/Balances.js'
import Trade from './components/Trade.js'
import BitcoinGraph from './components/BitcoinGraph.js'
import BitcoinPrice from './components/BitcoinPrice.js'



class App extends Component {
  constructor(){
    super()
    this.state = {
      current_price: ""
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
          <div className="col-md-6">
          <BitcoinPrice current_price={this.state.current_price}/>
            <Balances />
          </div>
          <div className="col-md-6">
            <Trade />
          </div>

        </div>

        <BitcoinGraph   />
      </div>
    );
  }
}

export default App;
