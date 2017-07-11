import React from 'react'


class USDBalance extends React.Component {
	constructor(){
		super()
		this.state = {
			usd: 10000
		}
	}

	render(){
		let usd = this.state.usd
		return <p border="2px">USD Available: ${usd}</p>
	}
}


 

export default USDBalance