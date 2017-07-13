import React from 'react'


function BitcoinPrice(props) {
    return (

      <div className="dropdown">
       <h5 className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Current Price Conversions</h5>
   
      	<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      		
      			<h4 className="dropdown-item">1 BTC is worth ${props.current_price}</h4>
      	
      		 <h6 className="dropdown-item">0.25 BTC = ${props.current_price * 0.25}</h6>
      
      			<h6 className="dropdown-item">$10,000 = BTC {10000 / props.current_price}</h6> 
      	
      		
      			<h6 className="dropdown-item">$1 = BTC { 1 / props.current_price}</h6>
      		
      	</div>
      </div>


    )



  }


export default BitcoinPrice
