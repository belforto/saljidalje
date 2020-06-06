
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Link } from 'react-router-dom';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import PreporukeComponent from "../elements/PreporukeComponent"

import placeHolderImg from "../elements/placeholder.jpg"




export default class ScreenDetaljnoDirekt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            photoLinks: []
        };
    }

    componentDidMount() {
        

        this.pullArtiklFromDB()
    }

    pullArtiklFromDB = async () => {

        const API_ENDPOINT = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/fetchByID?identifikator="
        var artikl = "3.3.2020-odjeca-hoodie22-xxxxx"
        artikl= this.props.match.params.id

        let response = await fetch(API_ENDPOINT + artikl);
        let data = await response.json()
       await this.setState({ artikl: data[0] ,
        loading: false
    })

    this.setState({
        imgSrc: this.state.artikl.photoLinks[0]
    })
        console.log(this.state,"/////////////////////////////")
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
                                    this.state.artikl.photoLinks.map((photo, i) =>
                                        <LazyLoadImage placeholderSrc={placeHolderImg} onClick={this.changeImage.bind(this, photo)} alt="bla" effect="opacity" src={photo} />
                                    )
                                }

                            </div>
                            <div class="column">
                                <LazyLoadImage alt="bla" effect="opacity" src={this.state.imgSrc} />
                            </div>
                            <div class="column  ">
                                <h1 class="title "> {this.state.artikl.naslov}</h1>

                                <p class="subtitle">{this.state.artikl.opis}</p>
                                <h3 class="title ">{this.state.artikl.cijena}</h3>
                                <p class="subtitle">Dostava uključena u cijenu</p>

                                <Link
                                    data-testid="kupi"
                                    to={{
                                        pathname: '/order/',
                                        state: {
                                            imeArtikla: "naslov",
                                            artikl: this.state.artikl,
                                            slika: this.state.artikl.photoLinks[0],
                                            ponovnoSeMozeKupiti:this.state.artikl.ponovnoSeMozeKupiti
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

              
            </div>

        );
    }
}








