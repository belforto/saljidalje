import React, { Component } from "react";
 import "./snowfall.css";
import snowflake from'./snowflake.svg';
import xmasBgr from'./xmas1.png';
export default class SpecialPromoComponent extends Component {
  render() {
    return (
      <div class="aa positionCenter" 
      // style={{ backgroundImage: "url(" + xmasBgr + ")"}} 
       >
        
        
        
        <img  class={"animacijaPahuljice"}style={{left:"1%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"3%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"15%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"28%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"39%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"41%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"55%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"67%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"78%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"88%"}}  src={snowflake}/>
        <img class={"animacijaPahuljice"} style={{left:"98%"}}  src={snowflake}/>
          
          
      
      </div>
    );
  }
}
