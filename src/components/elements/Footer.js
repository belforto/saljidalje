

import React from "react";
import { Link } from 'react-router-dom';




const FooterSD = () => (
   
<footer class="footer bgrOrange ">
<div class="content has-text-centered has-text-white">
       
        <div class="columns">
        <div class="column">
            <h6>Postani dio SaljiDalje Family</h6>
            <h5>I saznaj kad stigne nova robica</h5>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="text" placeholder="Tvoje Ime"/>
              <span class="icon is-left">
              <i class="fas fa-female"></i>
              </span>
            </div>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-medium" type="email" placeholder="Email"/>
              <span class="icon is-left">
              <i class="fa fa-envelope"></i>
              </span>
            </div>
            <a class="button  is-rounded bgrGreen">Obavijesti me na E-mail</a>
          </div>
          
          <div class="column">
            
            <ul>
            <Link to={{ pathname: '/suradnja' }}> <a className="navbar-item"> Suradnja </a></Link>
            <Link to={{ pathname: '/onama' }}> <a className="navbar-item"> O Nama </a></Link>
            <Link to={{ pathname: '/uvjeti' }}> <a className="navbar-item"> Uvjeti </a></Link>
            <Link to={{ pathname: '/povrat' }}> <a className="navbar-item"> Povrat Robe </a></Link>
              
            </ul>
          </div>
          <div class="column">
            
            <ul>
            <Link to={{ pathname: '/kontakt' }}> <a className="navbar-item"> Kontakt </a></Link>
            <Link to={{ pathname: '/blog' }}> <a className="navbar-item"> Blog </a></Link>
          
            
            </ul>
          </div>
          <div class="column">
            <h6>About Us</h6>
            <p class="has-text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <h5>Copyright SaljiDalje 2020</h5>
      </div>
    
</footer>

);




export default FooterSD;
