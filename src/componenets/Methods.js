import React, { useEffect } from 'react'
import '../styles/Methods.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Methods() {


	useEffect(() => {
		AOS.init({ duration: 2000})
	}, [])


	return (
		<div className="methods">
			<div data-aos='fade-up' className="methods__title">
				<p>Our Methods</p>
			</div>
			<div className="methods__img__bg">
			</div>
			<div data-aos='fade-up' className="methods__img__container">
				<div className="methods__img">
					<img src="https://static.wixstatic.com/media/fd6edb_90d702bbbde8422184ee065cd9239255~mv2.jpg/v1/fill/w_680,h_766,al_c,q_85,usm_0.66_1.00_0.01/fd6edb_90d702bbbde8422184ee065cd9239255~mv2.webp" alt="gym" />
					<h4>Body Shape</h4>
					<p>I'm a paragraph. Click here to </p>
					<p>add your own text and edit</p> 
					<p> me. Let your users get to</p> 
					<p> know you.</p>
				</div>
				<div className="methods__img">
					<img src="https://static.wixstatic.com/media/fd6edb_329ca0d207224f279a9cab7c408ad4d5~mv2.jpg/v1/fill/w_680,h_766,al_c,q_85,usm_0.66_1.00_0.01/fd6edb_329ca0d207224f279a9cab7c408ad4d5~mv2.webp" alt="workout" />
					<h4>Extreme</h4>
					<p>I'm a paragraph. Click here to </p>
					<p>add your own text and edit</p> 
					<p> me. Let your users get to</p> 
					<p> know you.</p>
				</div>
				<div className="methods__img">
					<img src="https://static.wixstatic.com/media/fd6edb_cf56faf05d854ddabafc5f447df68680~mv2.jpg/v1/fill/w_680,h_766,al_c,q_85,usm_0.66_1.00_0.01/fd6edb_cf56faf05d854ddabafc5f447df68680~mv2.webp" alt="fitness" />
					<h4>Burn</h4>
					<p>I'm a paragraph. Click here to </p>
					<p>add your own text and edit</p> 
					<p> me. Let your users get to</p> 
					<p> know you.</p>
				</div>
				<div className="methods__img">
					<img src="https://static.wixstatic.com/media/fd6edb_8f088bdebace4df985abb6d644b8ec0e~mv2.jpg/v1/fill/w_680,h_766,al_c,q_85,usm_0.66_1.00_0.01/fd6edb_8f088bdebace4df985abb6d644b8ec0e~mv2.webp" alt="fit" />
					<h4>Hiit</h4>
					<p>I'm a paragraph. Click here to </p>
					<p>add your own text and edit</p> 
					<p> me. Let your users get to</p> 
					<p> know you.</p>
				</div>
			</div>
			
		</div>
	)
}

export default Methods
