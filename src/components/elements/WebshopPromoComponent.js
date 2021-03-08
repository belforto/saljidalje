import React, { Component } from "react";
 import "./snowfall.css";
import snowflake from'./snowflake.svg';
import zavriWebshop from'./webshop-zaviri.png';
export default class WebshopPromoComponent extends Component {
  render() {
    return (
      <div class=" positionCenter" 
      style={{marginTop:"4em",marginBottom:"4em"}}
      onClick={()=>window.location.href ="/"}
       >
        
        
        <img  style={{cursor:"pointer"}}src={zavriWebshop} alt="webshop Link" />
       
          
          
      
      </div>
    );
  }
}
