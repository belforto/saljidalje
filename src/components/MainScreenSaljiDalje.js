import React from "react";





import HeroComponent from "./elements/HeroComponent"
import PopisRobe from "./elements/PopisRobe"
import SaljiDaljeNavbar from "./elements/SaljiDaljeNavbar"
import OsnovneInfo from "./elements/OsnovneInfo"
import TestimonialComponent from "./elements/TestimonialComponent"
import FooterSD from "./elements/Footer"




class MainScreenSaljiDalje extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }


  render() {
    return (
      <div>
        <div class="container">
          <SaljiDaljeNavbar />


          <HeroComponent />
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
