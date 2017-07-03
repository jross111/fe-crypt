import React from 'react'
import btcgraph2 from './images/btcgraph2.svg'


function BitcoinGraph(props) {
  return (
    <div className="container">
    <div className="row">
    <div className="col">

      <img src={btcgraph2}  width="90%" height="200px" />
    </div>
    </div>
    </div>
  )
}

export default BitcoinGraph;
