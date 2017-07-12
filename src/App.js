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
      convertedTradeValue: "",
      convertedSellValue: ""
    }
  } 

  handleTradeChange( e ){
    const newValue = e.target.value
    console.log(newValue)
    const convertedValue =  (( newValue / this.state.current_price ).toFixed(4))
    this.setState({convertedTradeValue: convertedValue})   
  }

  handleSellChange( e ){
    const newValueUSD = e.target.value
    console.log(newValueUSD)
    const convertedValueUSD2 = ((this.state.current_price * newValueUSD).toFixed(2))
    const convertedValueUSD = convertedValueUSD2.toLocaleString('en')
    console.log(convertedValueUSD)
    this.setState({convertedSellValue: convertedValueUSD})
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
          <Trade handleTradeChange={this.handleTradeChange.bind(this)} convertedValue={this.state.convertedTradeValue} />
          </div>
          <div className="col-md-4">
          <Sell handleSellChange={this.handleSellChange.bind(this)} convertedValueUSD={this.state.convertedSellValue}/>
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
