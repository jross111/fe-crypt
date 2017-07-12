import React from 'react'


function Trade(props){
  console.log(props)
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Buy Bitcoin With USD</h3>
        </div>
        <div className="col-md-3">
        <div className="btn-group" role="group" >
          <div className="input-group">
        <span className="input-group-addon">$</span>
             <input id="sell_btc" 
                    type="string" 
                    placeholder="USD" 
                    className="form-control"
                    onChange={props.handleTradeChange}

              />
        </div>
              <div id="btc_buy">You Will Receive: <h2>{props.convertedValue} BTC</h2></div>
        <input type="submit" value="BUY" className="btn btn-block btn-lg btn-success"/>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Trade
