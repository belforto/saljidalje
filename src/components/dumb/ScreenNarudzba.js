
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"
import { Link } from 'react-router-dom';

import XLoacalStore from '../elements/XLoacalStore'




export default class ScreenNarudzba extends React.Component {
    constructor(props) {
        super(props);
        //binding 2 functions to use this state inside
        this.sendOrder = this.sendOrder.bind(this);
        this.checkIfNotSold = this.checkIfNotSold.bind(this);

        const { imeArtikla, slika, artikl } = this.props.location.state
        this.state = {

            loading: true,
            slika: slika,
            imeArtikla: imeArtikla,
            artikl: artikl,

            imePrezime: "",
            email: "",
            adresa: "",
            grad: "",
            mob: "",

        };
        /*
                console.log(imeArtikla + slika + "***************ime artikla sa narudzbe screena")
                console.log(XLoacalStore.get("email"));
        */

    }

    componentDidMount() {
        this.prePopulateMyForm();
        console.log(this.state)
        setTimeout(
            function () {
                this.setState({ loading: false });
            }
                .bind(this),
            300
        );

        console.log("propsxxx", this.state.artikl)
    }

    toggleCheckBox(bool) {
        this.setState({
            saveMyData: bool,
        }
        )
        XLoacalStore.set("saveMyData", bool)
    }

    async  checkIfNotSold(identifikator) {
        console.log("is sold checking", identifikator)


        await fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/checkIfNotSold?identifikator=' + identifikator,
            {
                method: 'GET',

            }
        )
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        console.log(data);
                        return data;
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
                return false;
            });

    }


    async sendOrder() {
        try {

            this.setState({ loading: true })
            //check if order is still avalible
            var identifikator = this.state.artikl.identifikator;
            var slobodnoZaNarucit = await fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/checkIfNotSold?identifikator=' + identifikator,
                { method: 'GET' })
            var free = await slobodnoZaNarucit.json()
            console.log("ok to order ", free)
            if (free) {
                //if tru then send order
                console.log("ok to order ")



                var narudzba = await fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/spremiNarudzbu',
                    {
                        method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                "ime": "hanii",
                                "adresa": "bani"
                            }

                        ),
                    })
                let potvrdaNarudzbe = await narudzba.json()
                console.log("potvrda", potvrdaNarudzbe)
                //REDIRECT TO THANKYOU
                this.props.history.push('/thankyou/')
                this.setState({ loading: false })

            } else {
                //not avalible sorry
                console.log("aLREADY SOLD ", free)
                this.setState({ loading: false })


            }
        } catch (err) {
            alert(err); // TypeError: failed to fetch
        }


    }


    prePopulateMyForm() {
        /*
        console.log("***************Pre populate")
        this.setState({
            saveMyData: XLoacalStore.get("saveMyData"),
            imePrezime: XLoacalStore.get("imePrezime"),
            adresa: XLoacalStore.get("adresa"),
            grad: XLoacalStore.get("grad"),
            email: XLoacalStore.get("email"),
            mob: XLoacalStore.get("mob"),
        }
        )
        */
        if (XLoacalStore.get('saveMyData')) {
            this.setState({
                saveMyData: XLoacalStore.get('saveMyData')
            })
        } else {
            this.setState({
                saveMyData: false

            })
        }
    }


    onTodoChange(key, value) {
        console.log(key, value)
        this.setState({
            key: value
        });

        XLoacalStore.set(key, value)
    }


    render() {

        const handle = "sssss"//this.props.match.params
        return (
            <div>
                {this.state.loading ? <Catalog /> :
                    <div>
                        <div class="container box ">

                            Unos podataka za slanje
                <progress class="progress is-primary" value="85" max="100">50%</progress>
                            <hr />

                            <div class="content has-text-centered">



                                <img src={this.state.slika} width="200px" />

                                <h2 class="title is-2 text-centered">{this.state.imeArtikla}</h2>

                            </div>
                            <div class="">


                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">

                                                <p class="">Još samo malo :) Unesi Podatke i adresu. Plaćanje je pouzećem kada paket stigne</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>




                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">

                                                <p class="control is-expanded has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="Ime i Prezime" value={this.state.saveMyData ? XLoacalStore.get("imePrezime") : null} name="imePrezime" onChange={e => this.onTodoChange(e.target.name, e.target.value)} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-user"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">

                                                <p class="control is-expanded has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="Adresa i Kućni broj" value={this.state.saveMyData ? XLoacalStore.get("adresa") : null} name="adresa" onChange={e => this.onTodoChange(e.target.name, e.target.value)} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-address-book"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">

                                                <p class="control is-expanded has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="Poštanski Broj i Grad" value={this.state.saveMyData ? XLoacalStore.get("grad") : null} name="grad" onChange={e => this.onTodoChange(e.target.name, e.target.value)} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-mail-bulk"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">

                                                <p class="control is-expanded has-icons-left has-icons-right">
                                                    <input class="input" type="email" placeholder="Email Adresa" value={this.state.saveMyData ? XLoacalStore.get("email") : null} name="email" onChange={e => this.onTodoChange(e.target.name, e.target.value)} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-envelope"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">
                                                <p class="control">
                                                    <a class="button is-static">
                                                        +385
          </a>
                                                </p>
                                                <p class="control is-expanded has-icons-right">
                                                    <input class="input" type="tel" placeholder="Tvoj Broj Mobitela" value={this.state.saveMyData ? XLoacalStore.get("mob") : null} name="mob" onChange={e => this.onTodoChange(e.target.name, e.target.value)} />
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <p class="help">Trebamo tvoj broj kako bi poslali SMS kada paket bude spreman za uručenje</p>
                                        </div>
                                    </div>
                                </div>









                                <div class="field is-horizontal">
                                    <div class="field-label">

                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">


                                                <button class="button is-primary is-large is-fullwidth" onClick={this.sendOrder}>
                                                    Pošalji Narudžbu
        </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>







                            </div>
                        </div>

                    </div>
                }
            </div>

        );
    }
}








