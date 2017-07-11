import React from 'react'


class BTCBalance extends React.Component {
	constructor(){
		super()
		this.state = {
			btc: 0.00
		}
	}

	render(){
		let btc = this.state.btc
		return <p>BTC Available: {btc}</p>
	}
}


 

export default BTCBalance