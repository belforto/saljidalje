
import React from "react";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions";

import Artikli from "./Artikli";
import SVGKateg from "./SVGKateg";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import odjeca from "./ikone/odjeca.jpg"
import obuca from "./ikone/obuca.jpg"
import kids from "./ikone/kids.jpg"
import handmade from "./ikone/handmade.jpg"



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
      /* this.setState(prevState => ({
        numberOfArticles: prevState.numberOfArticles+1
      }));
      */
      console.log(value,"www",this.numberOfArticles);
        if(this.numberOfArticles<8)   
        return value;
      
    }

    render() {
        return (
            <div class="positionCenter">
                {this.state.articleLoading ? <div>load</div> :
                    <div>
                        <div class="title-wrapper has-text-centered">
                            <h2 data-aos="fade-up" data-testid="testnaslov" class="title is-1">KATEGORIJE</h2>
                            <h3 class="subtitle is-5 is-muted">Što sve možete naći kod nas</h3>
                            <div class="divider is-centered"></div>
                            <br />
                            <br />

                        </div>
                        <div class="columns is-multiline is-mobile  is-centered box boxnoshadows">

                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/odjeca',
                                    
                                }} >
                                    <SVGKateg kategorija="ODJEĆA" />
                                </Link>
                            </div>

                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/obuca',
                                    
                                }} >
                                    <SVGKateg kategorija="OBUĆA" />
                                </Link>
                            </div>

                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/baby',
                                    
                                }} >
                                     <SVGKateg kategorija="DJECA" />
                                </Link>
                            </div>
                            <div class="column is-half-mobile is-one-quarter-widescreen">
                                <Link to={{
                                    pathname: '/category/handmade',
                                    
                                }} >
                                     <SVGKateg kategorija="#ECOBAG" />
                                </Link>
                            </div>

                            


                        </div>
                        <div class="title-wrapper has-text-centered">
                        <h2 class="title is-2">NAJNOVIJE</h2>
                        </div>
                        <br/>
                        <br/>

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

