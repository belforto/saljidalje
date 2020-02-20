import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";




import HeroComponent from "./elements/HeroComponent"
import PopisRobe from "./elements/PopisRobe"
import SaljiDaljeNavbar from "./elements/SaljiDaljeNavbar"
import OsnovneInfo from "./elements/OsnovneInfo"
import TestimonialComponent from "./elements/TestimonialComponent"




class MainScreenSaljiDalje extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
/*
  updateInput = input => {
    console.log(input);

    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };


  simplifiedFunction(value) {
    console.log(value)
  }
*/




  render() {
    return (
      <div>
        <div class="container">
          <SaljiDaljeNavbar />


          <HeroComponent />
          <OsnovneInfo />
          <TestimonialComponent />
          <PopisRobe />






        </div>

      </div>
    );
  }
}


 export default MainScreenSaljiDalje;
