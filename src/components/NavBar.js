import React from 'react'
import USDBalance from './USDBalance.js'
import BTCBalance from './BTCBalance.js'



function NavBar(props) {
  return (

    <nav className="navbar bg-primary">
      <div className="container-fluid">

        <div className="navbar-brand">< BTCBalance /></div>
   
        <div className="navbar-brand" ><USDBalance /></div>
      </div>
    </nav>

  )
}

export default NavBar
