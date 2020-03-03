
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Link } from 'react-router-dom';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"




export default class ScreenDetaljnoArtikl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            photoLinks: this.props.location.state.artikl.photoLinks
        };
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({
                    loading: false,
                    imgSrc: this.props.location.state.artikl.photoLinks[0]
                });
            }
                .bind(this),
            500
        );
        console.log("abc ", this.props.location.state.artikl)
    }

    changeImage(photoSrc) {
        console.log("changing image*****", photoSrc);
        //  this.setState({ imgSrc: 'https://i.picsum.photos/id/' + Math.floor(Math.random() * Math.floor(100)) + '/500/600.jpg' });
        this.setState({ imgSrc: photoSrc });

    }

    render() {
        const handle = "sssss"//this.props.match.params
        return (
            <div>
                <div class="container">
                    <SaljiDaljeNavbar />
                    {this.state.loading ? <Catalog /> :
                        <div class="columns  is mobile ">
                            <div class="column is-1">
                            </div>
                            <div class="column is-2 horiz odmakniodruba">

                                {
                                    this.state.photoLinks.map((photo, i) =>
                                        <LazyLoadImage onClick={this.changeImage.bind(this, photo)} alt="bla" effect="opacity" src={photo} />
                                    )
                                }

                            </div>
                            <div class="column">
                                <LazyLoadImage alt="bla" effect="opacity" src={this.state.imgSrc} />
                            </div>
                            <div class="column  ">
                                <h1 class="title ">{this.props.location.state.artikl.naslov}</h1>
                                <p >{this.props.location.state.artikl.opis}</p>

                                <Link to={{
                                    pathname: '/order/' ,
                                    state: {
                                        imeArtikla: this.props.location.state.artikl.naslov,
                                        artikl: this.props.location.state.artikl,
                                        slika: this.state.imgSrc
                                    }
                                }}>



                                    <button class="button is-success  is-large is-fullwidth ">
                                        <span class="icon is-small">
                                            <i class="fas fa-check"></i>
                                        </span>
                                        <span>Kupi </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    }
                </div>

                <PreporukeComponent />
            </div>

        );
    }
}








