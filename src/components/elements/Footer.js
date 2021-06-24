

import React from "react";
import { Link } from 'react-router-dom';
import EmailService from "./EmailService"
import GDPR from "./GDPR"


export default class FooterSD extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      ime:"",
  }
  this.handleEmail = this.handleEmail.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    
     var validEmailRegex =
         RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

     if (!validEmailRegex.test(e.target.value)&& [e.target.name]=="email") {
         console.log("wrong email")
       //  this.setState({error:"E-mail adresa nije ispravna"})
     }else{
         this.setState({error:""})
     }
     this.setState({ [e.target.name]: e.target.value });
 }

 handleEmail(){
    if(this.state.email!="")
    {
        EmailService.saveEmail(this.state.email,this.state.ime)
        alert("Spremili smo te na E-mail listu, uskoro se javimo")
    }
  
  }



  render() {

    return (

      <footer class="footer bgrOrange bgrSpecial footer2 positionCenter" style={{padding:"0px", paddingBottom:"10px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: "relative",
    top: "-3px"}}>
  <path fill="#FFFFFF" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,240C480,213,600,139,720,138.7C840,139,960,213,1080,213.3C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
        <div class=" content has-text-centered has-text-white">
        <div class="container" style={{    marginLeft: "2em",
    marginRight: "2em"}}>
          <div class="columns">
            <div class="column">
              <h6 data-aos="fade-up" data-testid="testfooter">Postani dio SaljiDalje Family</h6>
              
              <div class="control has-icons-left has-icons-right morespace">
                <input class="input is-medium paddingfooter" type="text" placeholder="Tvoje Ime" name="ime" onChange={this.handleChange}/>
                <span class="icon is-left">
                  <i class="fas fa-female"></i>
                </span>
              </div>
              <div class="control has-icons-left has-icons-right morespace">
                <input class="input is-medium" type="email" placeholder="Email" name="email" onChange={this.handleChange} />
                <span class="icon is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <a class="button  is-rounded bgrGreen" onClick={this.handleEmail} >Obavijesti me na E-mail</a>
            </div>

            <div class="column">

              <ul >
                <Link to={{ pathname: '/suradnja' }}> <a className="navbar-item"> Suradnja </a></Link>
                <Link to={{ pathname: '/onama' }}> <a className="navbar-item"> O Nama </a></Link>
                <Link to={{ pathname: '/uvjeti' }}> <a className="navbar-item"> Uvjeti </a></Link>
                <Link to={{ pathname: '/povrat' }}> <a className="navbar-item"> Povrat Robe </a></Link>

              </ul>
            </div>
            <div class="column">

              <ul>
                <Link to={{ pathname: '/kontakt' }}> <a className="navbar-item"> Kontakt </a></Link>


              </ul>
            </div>
            <div class="column">
              <h6>Naša misija</h6>
              <p class="has-text-center">
              Omogućiti dobroj, kvalitetnoj odjeći, koja samo otežava policama na&scaron;ih ormara da pronade svoje sretnije ruke, čime nećemo samo usrećiti druge, već ovakvom gestom radimo na nećem puno većem - očuvanju na&scaron;e prirode i boljoj budućnosti nas samih.
            </p>
            </div>
          </div>
          <h5>Copyright SaljiDalje 2020</h5>
        </div>
        </div>
        
      </footer>
    )
  }

}







