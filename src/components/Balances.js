import React from 'react'


function Balances () {



  let usd = 10000.00
  let btc_balance = 0

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
      <td>${usd}</td>
    </tr>
    <tr>
      <td>BTC</td>
      <td>{btc_balance} Bitcoin</td>
    </tr>
  </tbody>
</table>
</div>



  )

}

export default Balances


