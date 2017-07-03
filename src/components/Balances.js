import React from 'react'
import btcgraph from './images/btcgraph.svg'
import btcgraph2 from './images/btcgraph2.svg'

function Balances(props) {
  return (
    <div className="container">
    <div className="col-md-6">
<h2>Account Balances</h2>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Currency</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>USD</td>
      <td>$10000.00</td>
    </tr>
    <tr>
      <td>BTC</td>

      <td>0.00</td>
    </tr>
    <tr>
      <td>ETH</td>

      <td>0.00</td>
    </tr>
  </tbody>
</table>
</div>

    </div>

  )

}

export default Balances
