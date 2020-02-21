
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
        this.state = {
            articleLoading:true
        };
    }

   async componentDidMount() {

        await this.props.fetchArticles();
        this.setState({ articleLoading: this.props.articleLoading, apiResults: this.props.apiResults })

    }

    filterApiResults(value) {
        // console.log(value);

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





