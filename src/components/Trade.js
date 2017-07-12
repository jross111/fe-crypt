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
        
             <input id="sell_btc" 
                    type="number" 
                    placeholder="USD" 
                    className="form-control"
                    onChange={props.handleTradeChange}

              />
              <div id="btc_buy">You Will Receive <h4>{props.convertedValue} Bitcoin</h4></div>
        </div>
        <input type="submit" value="BUY" className="btn btn-block btn-lg btn-success"/>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Trade
