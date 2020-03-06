
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions";



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"

import Artikli from "../elements/Artikli";




 class ScreenKategorije extends React.Component {
    constructor(props) {
        super(props);
        this.filterApiResults = this.filterApiResults.bind(this);
        this.state = {
            articleLoading:true,
            kategorijaIzUrl:this.props.match.params.kategorija
        };
    }

   async componentDidMount() {

        await this.props.fetchArticles();
        this.setState({ articleLoading: this.props.articleLoading, apiResults: this.props.apiResults })

    }

    filterApiResults(value) {
       //  console.log("xx category xx",this.state.kategorijaIzUrl.toUpperCase(),value.kategorija.toUpperCase());
        if(this.state.kategorijaIzUrl.toUpperCase()==value.kategorija.toUpperCase())
        return value;
    }

   

    render() {
     
        return (
            <div>
                <div class="container">
                    <SaljiDaljeNavbar />
                    {this.state.articleLoading ? <Catalog /> :
                        <div class="columns  is mobile ">
                           
                           <Artikli artikli={this.props.apiResults.filter(this.filterApiResults)} />
                        </div>

                    }
                </div>
                
               
            </div>

        );
    }
}


const mapStateToProps = (state) => ({


    apiResults: state.articleReducer.json,
    articleLoading: state.articleReducer.articleLoading

})



export default connect(
    mapStateToProps,
    { fetchArticles }
)(ScreenKategorije);





