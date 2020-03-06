
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"
import { Link } from 'react-router-dom';



export default class ScreenThankYouPage extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div class="container">
            <section class="hero bgrGreen ">
               
                    <div class="hero-body bgrGreen">
                        <div class="container has-text-centered bgrGreen">
                            <h1 class="title bgrGreen">
                                Zahvaljujemo se na kupnji
      </h1>
                            <h2 class="subtitle is-1 bgrGreen">
                                Narudžba ti uskoro stiže :)
      </h2>
      <br/>
      <hr/>
      <h2 class="subtitle bgrGreen">
                                A do onda..
      </h2>
      <h2 class="title is-3"> Možda bi te mogle interesirati i ove stvari</h2>
      <i class="fas fa-angle-double-down fa-3x"></i>


                        </div>
                    </div>
               
               
            </section>

            <section class="hero  ">
               
                    <div class="hero-body">
                        <div class="container has-text-centered">
                        majica hlače
                        </div>
                    </div>
               
                
            </section>

            <Link to={{
                                            pathname: '/' ,
                                            
                                        }}>
                                            <button class="button is-danger is-large is-fullwidth">
                                                Vrati me na Početnu
        </button>
                                        </Link>
            </div>
        );
    }
}








