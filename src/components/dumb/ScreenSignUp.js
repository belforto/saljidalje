
import React from "react";

import EmailService from "../elements/EmailService"


import DateCountdown from 'react-date-countdown-timer';

import logo from './logo.png';



export default class ScreenSignUp extends React.Component {
    constructor(props) {
        super(props)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            email: "",
            ime:"",
            error: ""
        }
    }

    handleEmail() {
        if(this.state.error==""&&this.state.email!="")
        {
            EmailService.saveEmail(this.state.email,this.state.ime)
            alert("Spremili smo te na E-mail listu, uskoro se javimo")
        }
       
    }

    handleChange(e) {
       // console.log(" email", e.target.value, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
        var validEmailRegex =
            RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

        if (!validEmailRegex.test(e.target.value)&& [e.target.name]=="email") {
            console.log("wrong email")
            this.setState({error:"E-mail adresa nije ispravna"})
        }else{
            this.setState({error:""})
        }
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div>
                <img src={logo} width="70" height="50" />
                <section class="hero is-success is-fullheight ">
                    <div class="hero-body bgrOrange">
                        <div class="container has-text-centered ">
                            <DateCountdown dateTo='March 22, 2020 00:00:00 GMT+03:00' />

                            <br />
                            <br />
                            <br />
                            <p> Do lansiranja webshopa </p>
                            <h1 class="title">
                                Postani dio ŠaljiDalje Family
            </h1>
                            <br />
                            <br />
                            <br />
                            <h2 class="subtitle">

                                Ostavi nam svoj E-mail kako bi prva upecala nove stvarčice koje ćemo objavljivati na našem web shopu
                            <br />


                            </h2>

                            <div class="field">
                                <div class="control">
                                <input class="input is-medium is-rounded" type="text" name="ime" placeholder="Tvoje Ime" onChange={this.handleChange} />
                                    <input class="input is-medium is-rounded" type="text" name="email" placeholder="Tvoj Email" onChange={this.handleChange} />
                                   
                                    <span class="red"> {this.state.error} </span>
                                    <br />
                                    <button class="button   is-rounded  is-large is-fullwidth bgrGreen" onClick={this.handleEmail}>Dodaj me na E-mail listu</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}