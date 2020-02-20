
import React from "react";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions";

import Artikli from "./Artikli";



class PopisRobe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleLoading:true,
            apiResults:[]
        };
      }
    

    async componentDidMount() {
        //redux action call
       await this.props.fetchArticles();
       // console.log(this.props.apiResults,"3333333333");
        this.setState({articleLoading:this.props.articleLoading, apiResults:this.props.apiResults})

        
        
    }

    render() {
        return (
            <div>
            {this.state.articleLoading?<div>load</div>:
                <Artikli artikli={this.props.apiResults}/>
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

