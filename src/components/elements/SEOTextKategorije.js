
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions";



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";


import Artikli from "../elements/Artikli";




class SEOTextKategorije extends React.Component {
    constructor(props) {
        super(props);
        this.filterApiResults = this.filterApiResults.bind(this);
        this.state = {
            articleLoading: true,
            kategorijaIzUrl: this.props.match.params.kategorija
        };

        //if screen = odjeca then text o odjeci

        //if screen = obuća then text o obući
    }

    


    render() {

        return (
            <div>
                <div class="container">
                    seo seo
                </div>


            </div>

        );
    }
}





export default 
(SEOTextKategorije);





