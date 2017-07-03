import React from 'react'


function Balances(props) {
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



  )

}

export default Balances
