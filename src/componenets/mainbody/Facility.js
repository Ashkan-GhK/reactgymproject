import React, { useEffect } from 'react'
import AOS from 'aos'
import '../../styles/Facility.css'
import 'aos/dist/aos.css'

function Facility() {

	useEffect(() => {
		AOS.init({ duration: 3000})
	}, [])
	



	return (
		<div className="facility">
			<div className="facility__text">
			<p>Workout Facility</p>

			</div>
			
			<div className="facility__img__bg">
				
			</div>
		</div>
	)
}

export default Facility
