import React from 'react'

function Trade(props){
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Trade</h3>
        </div>
        <div className="col-md-3">
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input type="text" className="form-control" aria-label="Amount"/>
        <div classname="btn-group" role="group" >
          <button type="button" className="btn  btn-primary">1/4</button>
          <button type="button" className="btn  btn-primary">1/2</button>  <button type="button" className="btn  btn-danger">Max</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Trade
