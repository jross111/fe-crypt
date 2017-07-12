import React from 'react'


function Sell(props){
  console.log(props)
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Sell Bitcoin For USD</h3>
        </div>
        <div className="col-md-3">
        <div className="btn-group" role="group" >
          <div className="input-group">
          <span className="input-group-addon">BTC</span>
               <input id="buy_btc" 
                    type="number" 
                    placeholder="Bitcoin" 
                    className="form-control"
                    aria-label="Ammount"
                    onChange={props.handleSellChange}
              />
              </div>
              <div id="btc_sell">You Will Receive: <h2>${props.convertedValueUSD} </h2></div>

    
        
              <input type="submit" value="Sell" className="btn btn-block btn-lg btn-warning"/>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Sell
  