import React from 'react'
import { usd_balance } from './Balances.js'


function Trade(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Buy Bitcoin With USD</h3>
        </div>
        <div className="col-md-3">
        <div className="btn-group" role="group" >
          <div className="input-group">
        
             <input id="buy" id="sell_btc" type="number" placeholder="USD"className="form-control" aria-label="Amount"/>
             <input id="buy" id="sell_usd" type="number" placeholder="BTC"className="form-control" aria-label="Amount"/>
          <button type="button" className="btn  btn-primary">1/4</button>
          <button type="button" className="btn  btn-primary">1/2</button>  <button type="button" className="btn  btn-danger">Max</button>
        </div>
        <input type="submit" value="BUY" className="btn btn-block btn-lg btn-success"/>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Trade
