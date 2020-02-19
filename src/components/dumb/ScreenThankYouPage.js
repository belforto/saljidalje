
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"




export default class ScreenThankYouPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "", loading: true,
            listaSlika: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        };
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({
                    loading: false,
                    imgSrc: 'https://i.picsum.photos/id/1/500/600.jpg'
                });
            }
                .bind(this),
            1000
        );

    }

    changeImage(e) {
        console.log("changing image*****", e);
        this.setState({ imgSrc: 'https://i.picsum.photos/id/'+Math.floor(Math.random() * Math.floor(100))+'/500/600.jpg' });

    }

    render() {
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
                                <h1 class="title ">Majica</h1>
                                <button class="button is-success  is-large is-fullwidth ">
                                    <span class="icon is-small">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    <span>Kupi </span>
                                </button>
                            </div>
                        </div>

                    }
                </div>
                <TestimonialComponent />
                <PreporukeComponent />
            </div>

        );
    }
}








