
import React from "react";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions";

import Artikli from "./Artikli";



class PopisRobe extends React.Component {


    componentDidMount() {
        //redux action call
        this.props.fetchArticles();

    }

    render() {




        return (

            <Artikli />


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

