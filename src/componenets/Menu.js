import React from 'react'
import '../styles/Menu.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Menu() {
	return (
		<div className="menu">
			<div className="menu__items">
				<li>Home</li>
				<li>Facility</li>
				<li>Method</li>
				<li>Memberships</li>
				<li>Contact</li>
			</div>
			<div className="menu__login">
				<AccountCircleIcon />
				<li>Log In</li>
				
				<div>
				<div className="menu__login__button">
					<button>Book Now</button>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
