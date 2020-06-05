
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';



import Catalog from "../elements/Catalog";
import SaljiDaljeNavbar from "../elements/SaljiDaljeNavbar";
import TestimonialComponent from "../elements/TestimonialComponent"
import PreporukeComponent from "../elements/PreporukeComponent"
import { Link } from 'react-router-dom';





export default class ScreenONama extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
              
           
            <div class="container">
            <SaljiDaljeNavbar />

                <section class="hero bgrGreen ">

                    <div class="hero-body bgrGreen">
                    <h1 dir="auto">O nama</h1>
<div dir="auto">&nbsp;</div>
<div dir="auto">Pozdrav divne du&scaron;e!</div>
<div dir="auto">Mi smo Ivana i Simona, a život nas je spojio na jedan od najljep&scaron;ih načina - dijelimo istu majku, koja, ne da je postala biti dio &Scaron;aljiDalje obitelji, već bez tih vrijednih ruku, na&scaron;e i va&scaron;e ecocool vrećice ne bi postojale.</div>
<div dir="auto">&nbsp;</div>
<div dir="auto">Za&scaron;to profil <em><strong>@saljidalje</strong></em>?&nbsp;</div>
<div dir="auto">Jedan je razlog: omogućiti dobroj, kvalitetnoj odjeći, koja samo otežava policama na&scaron;ih ormara da pronade svoje sretnije ruke, čime nećemo samo usrećiti druge, već ovakvom gestom radimo na nećem puno većem - očuvanju na&scaron;e prirode i boljoj budućnosti nas samih.&nbsp;</div>
<div dir="auto">Hoćemo li krenuti?&nbsp;</div>
<div dir="auto">&nbsp;</div>
<div dir="auto">Va&scaron;e, <strong>Ivana&amp;Simona</strong></div>
                    </div>


                </section>

                <Link to={{
                    pathname: '/',

                }}>
                    <button class="button is-danger is-large is-fullwidth">
                        Vrati me na Početnu
        </button>
                </Link>
            </div>

            </div>
        );
    }
}








