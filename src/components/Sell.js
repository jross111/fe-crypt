import React from 'react'


function Sell(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Sell Bitcoin For USD</h3>
        </div>
        <div className="col-md-3">
        <div className="btn-group" role="group" >
          <div className="input-group">
          
            <input type="text" id="buy_btc" placeholder="BTC" className="form-control" aria-label="Amount"/>
            <input type="text" id="sell_btc" placeholder="USD" className="form-control" aria-label="Amount"/>
          <button type="button" className="btn  btn-primary">1/4</button>
          <button type="button" className="btn  btn-primary">1/2</button>  <button type="button" className="btn  btn-danger">Max</button>
        </div>
              <input type="submit" value="Sell" className="btn btn-block btn-lg btn-success"/>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Sell
  