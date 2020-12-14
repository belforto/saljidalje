import React from "react";





import HeroComponent from "./elements/HeroComponent"
import PopisRobe from "./elements/PopisRobe"
import SaljiDaljeNavbar from "./elements/SaljiDaljeNavbar"
import OsnovneInfo from "./elements/OsnovneInfo"
import TestimonialComponent from "./elements/TestimonialComponent"
import SpecialPromoComponent from "./elements/SpecialPromoComponent"
import FooterSD from "./elements/Footer"


 
import AOS from 'aos'; 




class MainScreenSaljiDalje extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" }; 
    
    AOS.init();
  }

  componentWillReceiveProps(){
    AOS.refresh();
  }


  render() {
    return (
      <div>
        <div class="container">
          <SaljiDaljeNavbar />


          <HeroComponent />
          <SpecialPromoComponent />
          <OsnovneInfo />
          <TestimonialComponent />
          <PopisRobe />
          <FooterSD/>





        </div>

      </div>
    );
  }
}


 export default MainScreenSaljiDalje;
