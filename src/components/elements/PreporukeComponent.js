
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import { Link } from 'react-router-dom';



export default class PreporukeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading:true
        }

    }

    componentDidMount() {
this.loadData()

    }

    loadData = () => {
        fetch("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/fetchSuggestions")
            .then((resp) => resp.json())
            .then((data) => {

                this.setState({
                    data: data,
                    loading:false
                })
            })
            .catch((err) => {
                console.log(err)
            })

    }


    render() {
        return (
            <div class="columns is-mobile preporuke is-flex is-centered" >

          

                {
                  this.state.data.map((item, i) =>
                    <div   key={i} class="column is-5-desktop ">
                      <Link data-testid={item.identifikator} 
                      to={{
                        pathname: '/detalji/' + item.identifikator,
                        state: {
                          artikl: item,

                        }
                      }}> <LazyLoadImage   alt="bla" effect="blur" src={item.photoLinks[0]}


                        />
                      </Link>
                    </div>
                  )
                }
            </div>
        );
    }
}








