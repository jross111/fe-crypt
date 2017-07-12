import React from 'react'


function BitcoinPrice(props) {
  console.log("---------")
  console.log("BitcoinPrice Props")
  console.log("---------")
  console.log(props)
  console.log(props.current_price)
    return (

      <table className="table table-bordered">
   
      	<tbody>
      		<tr>
      			<td> 1 BTC </td>
      			<td> ${props.current_price}</td>
      		</tr>
      		<tr>
      			<td> 0.25 BTC </td>
      			<td> ${props.current_price * 0.25}</td>
      		</tr>
      		<tr>
      			<td>$10,000</td>
      			<td> BTC {10000 / props.current_price} </td>
      		</tr>
      		<tr>
      			<td>$1 </td>
      			<td> BTC { 1 / props.current_price}</td>
      		</tr>
      	</tbody>
      </table>


    )



  }


export default BitcoinPrice
