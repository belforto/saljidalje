import React from "react";
import { Zoom } from 'react-slideshow-image';

import testimonial5 from './testimonials/16.jpg';

import testimonial4 from './testimonials/13.jpg';

import testimonial3 from './testimonials/12.jpg';

import testimonial2 from './testimonials/10.jpg';

import testimonial1 from './testimonials/9.jpg';

import testimonial30 from './testimonials/30.jpg';


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

    

        <section id="features" class="section section-feature-grey is-medium positionCenter">
            <div class="container">
                <div class="title-wrapper has-text-centered">
                <h3 data-aos="fade-up" class="subtitle is-5 is-muted">Iskustva</h3>
                    <h2 data-aos="fade-up" class="title is-2">ZADOVOLJNIH  KUPACA</h2>
                    <h3 class="subtitle is-5 is-muted">Što cure kažu o nama.</h3>
                    <div class="divider is-centered"></div>
                    <br />
                    <br />
                    
                </div>




                <div className="slide-container  ">
                    <Zoom {...zoomOutProperties}>
                        {
                            images.map((each, index) => <img key={index} className="respTestimonial" src={each} />)
                        }
                    </Zoom>
                </div>




            </div>

        </section>


       
    



);




export default TestimonialComponent;
