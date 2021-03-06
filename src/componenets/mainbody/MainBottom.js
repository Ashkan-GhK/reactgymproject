import React, { useEffect } from 'react'
import AOS from 'aos'
import '../../styles/MainBottom.css'
import 'aos/dist/aos.css';




function MainBottom() {

	useEffect(() => {
		AOS.init({ duration: 3000})
	}, [])




	return (
		<div className="mainBottom">
			
                            <div data-aos="fade-left" className="mainBottom__text__top">
				    <p>I'm a paragraph. Click here to add your own </p>
				      <p> text and edit me. It’s easy. Just click “Edit</p>
				       <p>Text” or double click me to add your own </p> 
				      <p> content and make changes to the font.</p>   
				      <div className="mainBottom__text button">
					<button>Start Sweating</button>
				</div>                  

			    </div>
			    
			    <div className="mainBottom__img">
				    <div data-aos="fade-right" className="mainBottom__img___bg">
				    <div className="mainBottom__img">
					    <img src="https://media.istockphoto.com/photos/getting-fit-one-lift-at-a-time-picture-id961254774?k=20&m=961254774&s=612x612&w=0&h=mvzGKh-ec1BOWlbq_Lfp3ygmX3b-grqfLRm_9zBAhRk=" alt="gym" />
					    
				    </div>
				    <div data-aos="fade-up" className="mainBottom__img img__cover">
					    <p>100% Results</p>
					    <p>Guaranteed</p>
					    <div className="mainBottom__text">
						    <p>I'm a paragraph. Click here to add</p>
						    <p>your own text and edit me. It’s easy.</p>
						    <p>Just click “Edit Text” or double click</p>
						    <p>me to add your own content and</p>
						    <p>make changes to the font. </p>
					    </div>
					    <div className="mainBottom__button button">
						    <button>Learn More</button>
					    </div>
				    </div>

				    
				    </div>
				    
			    </div>
			
			    
		</div>
	)
}

export default MainBottom
