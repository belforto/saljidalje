
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Link } from 'react-router-dom';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import KosaricaModal from "../elements/KosaricaModal";
import PathBar from "../elements/PathBar";
import PreporukeComponent from "../elements/PreporukeComponent"

import placeHolderImg from "../elements/placeholder.jpg"

import { useStore } from "../../redux/zustand/zustand";




export default class ScreenDetaljnoDirekt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            photoLinks: [],
            dodanoUkosaricu:false
        };
    }

    componentDidMount() {
        

        this.pullArtiklFromDB()
    }

    pullArtiklFromDB = async () => {

        // const artikalaUKosarici = useStore(state => state.artikalaUKosarici)
        // console.log("zust",artikalaUKosarici)

        const API_ENDPOINT = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/fetchByID?identifikator="
        var artikl = "3.3.2020-odjeca-hoodie22-xxxxx"
        artikl= this.props.match.params.id

        let response = await fetch(API_ENDPOINT + artikl);
        let data = await response.json()

        console.log("-------------photolinks",data,API_ENDPOINT + artikl);
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

    saveToKosarica =()=>{
        console.log("sejv to lokal storage", this.state.artikl);
        let KOSARICA=JSON.parse(localStorage.getItem('KOSARICA'));
        if(KOSARICA==null) KOSARICA=[]
        let kosarica={
            identifikator:this.state.artikl.identifikator,
            cijena:this.state.artikl.cijena,
            naslov:this.state.artikl.naslov,
            slika:this.state.artikl.photoLinks[0],
            ponovnoSeMozeKupiti:this.state.artikl.ponovnoSeMozeKupiti,
        }
        let dosadasnjiIdentifikatori=KOSARICA.map(x=> {   return(x.identifikator)})
        let postojiVecUkosarici=dosadasnjiIdentifikatori.includes(kosarica.identifikator);
        console.log(postojiVecUkosarici,!postojiVecUkosarici, dosadasnjiIdentifikatori,this.state.artikl.ponovnoSeMozeKupiti);
        
        if(kosarica.ponovnoSeMozeKupiti || !postojiVecUkosarici)
        {
            KOSARICA.push(kosarica)
        }
       
        localStorage.setItem('KOSARICA', JSON.stringify(KOSARICA));
        localStorage.setItem("KOSARICASIZE",KOSARICA.length)

        this.setState({
            dodanoUkosaricu: !this.state.dodanoUkosaricu
          });
    }

    render() {
        const handle = "sssss"//this.props.match.params
        return (
            <div>
                <div class="container" style={{    padding: "20px"}}>
                    <SaljiDaljeNavbar sakrijKosaricu={true} />
                    <PathBar />
                    <KosaricaModal update={this.state.dodanoUkosaricu} />


                    {this.state.loading ? <Catalog /> :
                        <div class="columns  is mobile " >
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

                                <button  onClick={()=> this.saveToKosarica()} class="button is-success  is-large is-fullwidth ">
                                        <span class="icon is-small">
                                            <i class="fas fa-check"></i>
                                        </span>
                                        <span>Dodaj U Košaricu </span>
                                    </button>

                                <Link
                                    data-testid="kupi"
                                    to={{
                                        pathname: '/order/',
                                        state: {
                                            // imeArtikla: "naslov",
                                            // artikl: this.state.artikl,
                                            // slika: this.state.artikl.photoLinks[0],
                                            // ponovnoSeMozeKupiti:this.state.artikl.ponovnoSeMozeKupiti
                                        }
                                    }}>



                                    <button class="button is-danger  is-large is-fullwidth ">
                                        <span class="icon is-small">
                                            <i class="fas fa-check"></i>
                                        </span>
                                        <span>Plaćanje </span>
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








