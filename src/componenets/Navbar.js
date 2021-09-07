import React from 'react'
import '../styles/Navbar.css'
import Logo from './Logo'
import Menu from './Menu'

function Navbar() {
	return (
		<div className="navbar">
		
		        <div className="navbar__left">
			<Logo />
			</div>
			
			<div className="navbar__right">
			<Menu />

			</div>
		</div>
	)
}

export default Navbar
