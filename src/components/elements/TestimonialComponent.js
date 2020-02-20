import React from "react";
import { Zoom } from 'react-slideshow-image';

import testimonial5 from './testimonials/16.png';

import testimonial4 from './testimonials/13.png';

import testimonial3 from './testimonials/12.png';

import testimonial2 from './testimonials/10.png';

import testimonial1 from './testimonials/9.png';

import testimonial30 from './testimonials/30.png';


const images = [
    testimonial1, testimonial30, testimonial5, testimonial4, testimonial2, testimonial3,
];


const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 1500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}




const TestimonialComponent = () => (

    <div>

        <section id="features" class="section section-feature-grey is-medium">
            <div class="container">
                <div class="title-wrapper has-text-centered">
                    <h2 class="title is-2">Iskustva zadovoljnih kupaca</h2>
                    <h3 class="subtitle is-5 is-muted">Što cure kažu o nama.</h3>
                    <div class="divider is-centered"></div>
                    <br />
                    <br />
                    
                </div>




                <div className="slide-container aa ">
                    <Zoom {...zoomOutProperties}>
                        {
                            images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                        }
                    </Zoom>
                </div>




            </div>

        </section>


       
    </div>



);




export default TestimonialComponent;
