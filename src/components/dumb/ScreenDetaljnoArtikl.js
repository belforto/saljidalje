
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
            console.log("abc ",this.props.location.state.artikl)
    }

    changeImage(e) {
        console.log("changing image*****", e);
        this.setState({ imgSrc: 'https://i.picsum.photos/id/' + Math.floor(Math.random() * Math.floor(100)) + '/500/600.jpg' });

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
                                <LazyLoadImage onClick={this.changeImage.bind(this, "https://i.picsum.photos/id/11/70/100.jpg")} alt="bla" effect="opacity" src="https://i.picsum.photos/id/1/70/100.jpg" />
                                <LazyLoadImage onClick={this.changeImage.bind(this, "https://i.picsum.photos/id/21/70/100.jpg")} alt="bla" effect="opacity" src="https://i.picsum.photos/id/1/70/100.jpg" />
                                <LazyLoadImage onClick={this.changeImage.bind(this, "https://i.picsum.photos/id/13/70/100.jpg")} alt="bla" effect="opacity" src="https://i.picsum.photos/id/1/70/100.jpg" />
                                <LazyLoadImage onClick={this.changeImage.bind(this, "https://i.picsum.photos/id/41/70/100.jpg")} alt="bla" effect="opacity" src="https://i.picsum.photos/id/1/70/100.jpg" />
                            </div>
                            <div class="column">
                                <LazyLoadImage alt="bla" effect="opacity" src={this.state.imgSrc} />
                            </div>
                            <div class="column  ">
                                <h1 class="title ">{this.props.location.state.artikl.naslov}</h1>
                                <p >{this.props.location.state.artikl.opis}</p>

                                <Link to={{
                                    pathname: '/order/' + { handle },
                                    state: {
                                        imeArtikla: "Majicasssss",
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








