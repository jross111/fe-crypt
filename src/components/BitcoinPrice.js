import React from 'react'


function BitcoinPrice(props) {
    return (
      <div>
        <h3> 1 Bitcoin = ${props.current_price}</h3>
        <h3> 0.25 Bitcoin = ${props.current_price * 0.25}</h3>
        <h3> $10,000 =  { 10000 / props.current_price} Bitcoin</h3>
        <h3> $1 =  { 1/ props.current_price} Bitcoin</h3>
      </div>

    )


  }


export default BitcoinPrice
