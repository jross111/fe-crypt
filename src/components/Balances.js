import React from 'react'
import fetch from 'isomorphic-fetch'

function Balances () {



  let usd = 10000.00
  let btc_balance = 0
  let eth_balance = 0
  return (
<div>
<h2>Account Balances</h2>
<table className="table table-bordered">
  <thead>
    <tr>
      <th>Currency</th>
      <th>Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>USD</td>
      <td>{usd}</td>
    </tr>
    <tr>
      <td>BTC</td>

      <td>{btc_balance}</td>
    </tr>
    <tr>
      <td>ETH</td>

      <td>{eth_balance}</td>
    </tr>
  </tbody>
</table>
</div>



  )

}

export default Balances
