import React from 'react'
import Logo from './Logo'
import '../styles/Footer.css'

function Footer() {
	return (
		<div className="footer">
		
					<div className="footer__contents">
					
						<div className="footer__logo__contariner">
						        <div className="logo__left">
				                                The
			                                </div>
			                                
			                                <div className="logo__right">
				                                Gym
			                                </div>
						</div>
						
						<div className="footer__contents__menu">
							<span>Menu</span>
							<li>Home</li>
							<li>Facility</li>
							<li>Metgods</li>
							<li>Memberships</li>
							<li>Contact</li>
						</div>
						<div className="footer__contents__contact">
							<span>Contact Us</span>
							<p>500 Terry Francois Street</p>
							<p>San Francisco, CA 94158</p>
							<p>Mail: info@mysite.com</p>
							<p>Tel: 123-456-7890</p>
						</div>
						<div className="footer__contents__openingTime">
							<span>Opening Hours</span>
							<p>Sun-Fri: 9AM to 10PM</p>
							<p>Saturday: 10AM to 7PM
</p>

						</div>
					</div>
					
				</div>
			
	
	)
}

export default Footer
