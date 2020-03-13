
import React from "react";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions";

import Artikli from "./Artikli";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import odjeca from "./ikone/odjeca.jpg"
import obuca from "./ikone/obuca.jpg"
import kids from "./ikone/kids.jpg"
import eko from "./ikone/eko.jpg"



class PopisRobe extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
            articleLoading: true,
            apiResults: [],
          
        };
        this.numberOfArticles=0;
        this.filterApiResults = this.filterApiResults.bind(this);
    }


    async componentDidMount() {
        //redux action call
        await this.props.fetchArticles();
        this.setState({ articleLoading: this.props.articleLoading, apiResults: this.props.apiResults })



    }

    filterApiResults(value) {
        this.numberOfArticles+=1
       // this.setState({numberOfArticles:this.numberOfArticles+1})
      console.log(value,"www",this.numberOfArticles);
      //  if(this.numberOfArticles<2)   
        return value;
      
    }

    render() {
        return (
            <div>
                {this.state.articleLoading ? <div>load</div> :
                    <div>
                        <div class="title-wrapper has-text-centered">
                            <h2 class="title is-2">Što sve možete naći kod nas</h2>
                            <h3 class="subtitle is-5 is-muted"></h3>
                            <div class="divider is-centered"></div>
                            <br />
                            <br />

                        </div>
                        <div class="columns is-multiline is-mobile  is-centered box boxnoshadows">

                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/odjeca',
                                    
                                }} >
                                    <LazyLoadImage alt="bla" effect="opacity" src={odjeca} />
                                </Link>
                            </div>

                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/obuca',
                                    
                                }} >
                                    <LazyLoadImage alt="bla" effect="opacity" src={obuca} />
                                </Link>
                            </div>

                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/baby',
                                    
                                }} >
                                    <LazyLoadImage alt="bla" effect="opacity" src={kids} />
                                </Link>
                            </div>
                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/eko',
                                    
                                }} >
                                    <LazyLoadImage alt="bla" effect="opacity" src={eko} />
                                </Link>
                            </div>

                            <h2 class="title is-2">Najnovije</h2>


                        </div>

                        <Artikli artikli={this.props.apiResults.filter(this.filterApiResults)} />
                    </div>
                }
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
)(PopisRobe);

