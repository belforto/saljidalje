
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions";



import Catalog from "../elements/Catalog";
import PathBar from "../elements/PathBar";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import KosaricaModal from "../elements/KosaricaModal";
import FooterSD from "../elements/Footer"





import Artikli from "../elements/Artikli";




class ScreenKategorije extends React.Component {
    constructor(props) {
        super(props);
        this.filterApiResults = this.filterApiResults.bind(this);
        this.state = {
            articleLoading: true,
            kategorijaIzUrl: this.props.match.params.kategorija
        };
    }

    async componentDidMount() {

        await this.props.fetchArticles();
        this.setState({ articleLoading: this.props.articleLoading, apiResults: this.props.apiResults })



        // var SCROLLMEMORY = localStorage.getItem('SCROLLMEMORY');


        // if (window.location.href.includes("category")) {
        //     setTimeout(function () {
        //         try {

        //             var element_to_scroll_to = document.querySelectorAll("a[href='" + SCROLLMEMORY + "']")[0];
        //             console.log("scrool into view", element_to_scroll_to)
        //             element_to_scroll_to.scrollIntoView();
        //         }
        //         catch (err) {
        //             console.log(err, "NO SCROLLMEMORY ELEMENT")
        //         }

        //     }, 2000);

        // }




        // window.addEventListener('click', this.handleScroll, null)
    }


    // componentWillUnmount() {
    //     window.removeEventListener('click', null);
    // }


    // handleScroll = (event) => {
    //     var href = event.path[2].hash;

    //     console.log( href, "CLICKKK")
    //     localStorage.setItem('SCROLLMEMORY', href);

    //    // console.log(111, document.getElementsByTagName("a[href='#/saljidalje/detalji/5-5-2020-Handmade-BabyBlue-10007738']"))


    // };


    filterApiResults(value) {
        //  console.log("xx category xx",this.state.kategorijaIzUrl.toUpperCase(),value.kategorija.toUpperCase());
        if (this.state.kategorijaIzUrl.toUpperCase() == value.kategorija.toUpperCase())
            return value;
    }



    render() {

        return (
            <div>
          
                <div class="container">
                    <SaljiDaljeNavbar sakrijKosaricu={false} />
                    <PathBar />
                    
                    <div class="title-wrapper has-text-centered">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#DBA797" fill-opacity="1" d="M0,160L34.3,176C68.6,192,137,224,206,245.3C274.3,267,343,277,411,240C480,203,549,117,617,101.3C685.7,85,754,139,823,144C891.4,149,960,107,1029,122.7C1097.1,139,1166,213,1234,202.7C1302.9,192,1371,96,1406,48L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                        </svg>
                        <h1 class="katBox title is-1 textOrange" >{this.state.kategorijaIzUrl.toUpperCase()}</h1>
                    </div>
                    {this.state.articleLoading ? <Catalog /> :
                        <div class="columns  is mobile " style={{    marginTop: "1em"}}>

                            <Artikli artikli={this.props.apiResults.filter(this.filterApiResults)} />
                        </div>

                    }
                     
                </div>

              
                {/* <FooterSD/> */}

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





