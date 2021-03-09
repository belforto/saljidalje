import React, { Component } from "react";
 import "./snowfall.css";

import fbgrupa from'./fb-grupa.png';
export default class WebshopFacebookPromoComponent extends Component {
  render() {
    return (
      <div class=" positionCenter" 
      style={{marginTop:"4em",marginBottom:"4em"}}
      onClick={()=>window.location.href ="/"}
       >
        
        
        <img  style={{cursor:"pointer"}}src={fbgrupa} alt="webshop Link" />
       
          
          
      
      </div>
    );
  }
}
