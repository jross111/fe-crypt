import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Trade from './components/Trade.js'
import Sell from './components/Sell.js'
import BitcoinGraph from './components/BitcoinGraph.js'
import BitcoinPrice from './components/BitcoinPrice.js'







class App extends Component {
  constructor(){
    super()
    this.state = {
      current_price: "",
      convertedTradeValue: "",
      convertedSellValue: "",
      usd_balance: 10000,
      btc_balance: 2.5

    }
  }




  handleTradeChange( e ){
    const newValue = e.target.value
    const convertedValue =  parseFloat((( newValue / this.state.current_price ).toFixed(4)))

    this.setState({convertedTradeValue: convertedValue})   
  }

  handleSellChange( e ){
    const newValueUSD = e.target.value
    const convertedValueUSD2 = ((this.state.current_price * newValueUSD).toFixed(2))
    const convertedValueUSD = parseFloat(convertedValueUSD2, 10).toLocaleString(
  undefined,  { minimumFractionDigits: 2 }
);
    this.setState({convertedSellValue: convertedValueUSD})
  }

  handleBuyClick( e ){
    e.preventDefault();
    const newBtcBalance = this.state.btc_balance + this.state.convertedTradeValue
    const sellUSD = parseInt(document.getElementById('buy_btc').value)
    const newUSDBalance = this.state.usd_balance - sellUSD
    this.setState({btc_balance: newBtcBalance, usd_balance: newUSDBalance } )
  
   


  }

  handleSellClick( e ) {
    e.preventDefault();
    console.log("Sell")
    console.log(this)
    const newUSDBalance = this.state.usd_balance + this.state.convertedSellValue
    console.log("~~~~")
    console.log(newUSDBalance)
    this.setState({})
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
          <Trade handleTradeChange={this.handleTradeChange.bind(this)} convertedValue={this.state.convertedTradeValue} handleBuyClick={this.handleBuyClick.bind(this)} />
          </div>
          <div className="col-md-4">
          <Sell handleSellChange={this.handleSellChange.bind(this)} convertedValueUSD={this.state.convertedSellValue} handleSellClick={this.handleSellClick.bind(this)}/>
          </div>
          <div className="col-md-4">
          <h2>Available Balance</h2>
          <button className="btn-lg btn-primary"> ${this.state.usd_balance}</button>
          <button className="btn-lg btn-primary"> {this.state.btc_balance} BTC</button>

          </div>
        <div className="col-md-4">
          <BitcoinPrice current_price={this.state.current_price}/>
              </div>
         
          <div className="col-md-3">
          
          </div>
        </div>
        <BitcoinGraph />
        <btc_usd />
      </div>
    );
  }
}

export default App;

