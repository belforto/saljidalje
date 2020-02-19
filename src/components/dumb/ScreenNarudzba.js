
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"




export default class ScreenNarudzba extends React.Component {
    constructor(props) {
        super(props);
        const { imeArtikla, slika } = this.props.location.state
        this.state = {
            input: "", loading: true,
            slika: slika,
            imeArtikla: imeArtikla
        };

        console.log(imeArtikla + slika + "***************ime artikla sa narudzbe screena")
    }



    render() {
        return (
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
                            <div class="field-label is-normal">
                                <label class="">Još samo malo :) Unesi Podatke i adresu <br/> Plaćanje je pouzećem kada paket stigne</label>
                                
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Ime Prezime" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Adresa i kućni broj" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Poštanski broj i Grad" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="control is-expanded has-icons-left has-icons-right">
                                        <input class="input is-success" type="email" placeholder="moj@email.com" />
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
                                        <p class="control is-expanded">
                                            <input class="input" type="tel" placeholder="Tvoj Broj Mobitela" />
                                        </p>
                                    </div>
                                    <p class="help">Trebamo tvoj broj kako bi poslali SMS kada paket bude spreman za uručenje</p>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Department</label>
                            </div>
                            <div class="field-body">
                                <div class="field is-narrow">
                                    <div class="control">
                                        <div class="select is-fullwidth">
                                            <select>
                                                <option>Business development</option>
                                                <option>Marketing</option>
                                                <option>Sales</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label">
                                <label class="label">Already a member?</label>
                            </div>
                            <div class="field-body">
                                <div class="field is-narrow">
                                    <div class="control">
                                        <label class="radio">
                                            <input type="radio" name="member" />
                                            Yes
        </label>
                                        <label class="radio">
                                            <input type="radio" name="member" />
                                            No
        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Subject</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity" />
                                    </div>
                                    <p class="help is-danger">
                                        This field is required
      </p>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Question</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
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
                                        <button class="button is-primary">
                                            Send message
        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}








