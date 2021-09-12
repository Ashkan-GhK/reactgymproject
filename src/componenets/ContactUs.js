import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax';
import '../styles/ContactUs.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ContactUs() {

	const gymImg = "http://blog.fitnessfirstme.com/wp-content/uploads/2019/05/FF-FLEX-Blog1000x667.jpg"
	

	useEffect(() => {
		AOS.init({ duration: 2000})
	}, [])
	


	return (
		<div className="contactUs">
		    <div data-aos="fade-up" className="contactUs__title">
		    <p>Hit Us Up Anytime</p>	    
		    </div>
		    <div className="contactUs__img__container">
			<Parallax bgImage={ gymImg } strength={500} className="contactUs__img">

			</Parallax>

			    <div className="contactUs__form__container">
				    <div className="contactUs__form">
				            <div className="contactUs__form__title">
					          <p>Contact Us</p>
					    </div>
					    <div className="contactUs__form__input">

					    <div className="contactUs__form__input__one">
						    <p>First Name</p>
						    <input type="text" />

						    <p>Phone Number</p>
						    <input type="text" />
						   
					    </div>
					    
					    <div className="contactUs__form__input__two">
					            <p>Last Name</p>
						    <input type="text" />
						
						    <p>Email</p>
						    <input type="email" />
					    </div>
					    <div className="contactUs__form__input__three">
					    <div className="contactUs__form__textarea">
						    <p>Leave us a Message</p>
						    <textarea name="" id="" cols="18" rows="5"></textarea>
					    </div>
					    <div className="contactUs__form__submit__button">
						    <button>Submit</button>
					    </div>
					    </div>
					   
					    </div>
					    
				    </div>
			    </div>

		    </div>
		</div>
	)
}

export default ContactUs
