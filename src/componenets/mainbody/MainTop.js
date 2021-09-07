import React, { useState } from 'react'
import { Parallax } from 'react-parallax';
import '../../styles/MainTop.css'

function MainTop() {

	const [aactive, setAactive] = useState(false)
	const imageParallax = "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtvdXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"


	const showText = () => {
		if(window.screenY >= 10) {
			setAactive(true)
		} else {
			setAactive(false)
		}

	}


	window.addEventListener('scroll', showText)


	// const fadeIn = ()=> {
		
	// }
	return (
		<div className="maintop">

			<div className={aactive ? "maintop__text active" : "maintop__text" }>"
			<h1>Train Hard. Sweat Hard.</h1>
			<h3>I'm a title.You can Edit me</h3>
			</div>
			<div className="maintop__left">
				<img src="https://static.wixstatic.com/media/84770f_3529186032aa456987dc088ec160c3db~mv2.jpg/v1/fill/w_872,h_1616,al_c,q_85,usm_0.66_1.00_0.01/84770f_3529186032aa456987dc088ec160c3db~mv2.webp" alt="work out gym" />
			</div>
			
			<Parallax bgImage={ imageParallax } strength={500} className="maintop__left">
			<div className="maintop__middle">
			
			</div>
			</Parallax>
			
			<div className="maintop__left">
				<img src="https://static.wixstatic.com/media/fd6edb_b6dc9b4d5f8845fa895eeb3e9861e485~mv2.jpg/v1/fill/w_810,h_1616,al_c,q_85,usm_0.66_1.00_0.01/fd6edb_b6dc9b4d5f8845fa895eeb3e9861e485~mv2.webp" alt="gym" />
			</div>
		
		</div>
	)
}

export default MainTop
