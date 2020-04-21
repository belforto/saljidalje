
import React from "react";
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Popup from "reactjs-popup";

import Catalog from "../elements/Catalog";


import XLoacalStore from '../elements/XLoacalStore'




export default class ScreenNarudzba extends React.Component {
    constructor(props) {
        super(props);
        //binding 2 functions to use this state inside
        this.sendOrder = this.sendOrder.bind(this);
        this.validForm = this.validForm.bind(this);
        this.handleChange = this.handleChange.bind(this);

        const { imeArtikla, slika, artikl } = this.props.location.state
        this.state = {

            loading: true,
            modalOpen: false,
            slika: slika,
            imeArtikla: imeArtikla,
            artikl: artikl,

            imePrezime: "",
            email: "",
            adresa: "",
            grad: "",
            mob: "",
            igProfil: "",
            privola: false

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

    validForm() {
        const { email, imePrezime, adresa, grad } = this.state;
        const isEnabled = imePrezime.length > 0 && adresa.length > 0 && grad.length > 0;

        console.log(email, imePrezime, isEnabled)

        if (!isEnabled) {
            console.log(email, imePrezime, adresa, grad, "******provjera")
            alert("Provjeri jel uneseno ime, adresa i grad")
        }
        return isEnabled;
    }

    async sendOrder() {
        try {

            if (!this.validForm()) return null;
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
                                "ime": this.state.imePrezime,
                                "adresa": this.state.adresa,
                                "grad": this.state.grad,
                                "email": this.state.email,
                                "mob": this.state.mob,
                                "igProfil": this.state.igProfil,
                                "privola": this.state.privola,
                                "slika": this.state.slika,
                                "identifikator": this.state.artikl.identifikator,
                                "imeArtikla": this.state.imeArtikla,
                                "datumNarudzbe": new Date().toISOString().slice(0, 10)

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

        console.log()


    }

    handleChange(e) {
        // console.log(111, e.target.name)
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {

        const handle = "sssss"//this.props.match.params
        return (
            <div>
                {this.state.loading ? <Catalog /> :
                    <div>
                        <div class="container box bgrGreen ">

                            Unos podataka za slanje
                             <progress class="progress is-primary is-custom" value="85" max="100">50%</progress>
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
                                                    <input class="input" type="text" data-testid="imeprezime" placeholder="Ime i Prezime" value={this.state.saveMyData ? XLoacalStore.get("imePrezime") : null} name="imePrezime" onChange={this.handleChange} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-user"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <p class="help"> Dopiši molim te  prezime koje se nalazi na tvom poštanskom sandučiću ako nije isto kao tvoje</p>

                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">

                                                <p class="control is-expanded has-icons-left has-icons-right">
                                                    <input class="input" type="text" data-testid="adresa" placeholder="Adresa i Kućni broj" value={this.state.saveMyData ? XLoacalStore.get("adresa") : null} name="adresa" onChange={this.handleChange} />
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
                                                    <input class="input" data-testid="postagrad" type="text" placeholder="Poštanski Broj i Grad" value={this.state.saveMyData ? XLoacalStore.get("grad") : null} name="grad" onChange={this.handleChange} />
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
                                                    <input class="input" type="email" data-testid="email" placeholder="Email Adresa" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={this.state.saveMyData ? XLoacalStore.get("email") : null} name="email" onChange={this.handleChange} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-envelope"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">
                                                        <i class="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <p class="help">A može i email adresa ako više preferiraš tako</p>
                                            <br />
                                            <label class="checkbox">
                                                <input type="checkbox" name="privola" onChange={this.handleChange} />
                                                Ubaci me i na e-mail listu kako bi ti javili za nove artikle prije nego se pojave u webshopu
                                    </label>
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
                                                    <input class="input" type="tel" data-testid="mob" placeholder="Tvoj Broj Mobitela" value={this.state.saveMyData ? XLoacalStore.get("mob") : null} name="mob" onChange={this.handleChange} />
                                                    <span class="icon is-small is-right">

                                                    </span>
                                                </p>
                                            </div>
                                            <p class="help">Trebamo tvoj kontakt kako bi se mogli javit u vezi s narudžbom ako bude trebalo radi nekog razloga</p>

                                        </div>
                                    </div>
                                </div>

                                <div class="field is-horizontal">
                                    <div class="field-label"></div>
                                    <div class="field-body">
                                        <div class="field is-expanded">
                                            <div class="field has-addons">
                                                <p class="help">Ili da te kontaktiramo preko IG profila</p>

                                                <p class="control is-expanded has-icons-left has-icons-right">
                                                    <input class="input" type="text" placeholder="Instagram profil" name="igProfil" onChange={this.handleChange} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fab fa-instagram"></i>
                                                    </span>
                                                    <span class="icon is-small is-right">

                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>












                                <div class="field is-horizontal">
                                    <div class="field-label">

                                    </div>
                                    <div class="field-body">
                                        <div class="field">
                                            <div class="control">


                                                <button class="button bgrOrange pastelText is-large is-fullwidth" data-testid="posaljiNarudzbu" onClick={this.sendOrder}>
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


                <Popup
                    open={this.state.modalOpen}
                    closeOnDocumentClick
                    modal
                //   onClose={this.closeModal}
                >
                    <div> Modal content </div>
                </Popup>
            </div>

        );
    }
}








