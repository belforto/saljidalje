import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import { addTodo ,fetchPosts} from "../redux/actions";

import Catalog from "./Catalog";

import {Animated} from "react-animated-css";



class PrikazSlika extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", loading:true };
  }


   fetchItems =  async () =>{
      const data= await fetch('https://jsonplaceholder.typicode.com/photos');
      console.log(data.json())
  }


  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

componentDidMount(){
    setTimeout(
        function() {
            this.setState({loading: false});
        }
        .bind(this),
        3000
    );
    this.fetchItems()
    this.props.fetchPosts("")
}

  render() {
    return (
      <div>
          <h2>New Movies</h2>

           
           
<Animated animationIn="bounceInLeft" animationInDuration={4000}  animationOut="fadeOut" isVisible={true}>

     
<div class="row child-borders">
  <div class="sm-2 col border border-primary"><img src="https://unsplash.it/100" alt="Random Unsplash"/> <h4>Blue Horizon (1988)</h4>  </div>
  <div class="sm-2 col border border-secondary"><img src="https://unsplash.it/200" alt="Random Unsplash"/> <h4>Amazing Life (2005)</h4> </div> 
  <div class="sm-2 col border border-success"><img src="https://unsplash.it/300" alt="Random Unsplash"/> <h4>Heart (1999)</h4> </div>
  <div class="sm-2 col border border-warning"><img src="https://unsplash.it/400" alt="Random Unsplash"/> <h4>Story of a Farmer (2001)</h4>  </div>
  <div class="sm-2 col border border-danger"><img src="https://unsplash.it/500" alt="Random Unsplash"/> <h4>Mr. Jack (1992)</h4> </div>
  <div class="sm-2 col border background-primary border-white"><img src="https://unsplash.it/600" alt="Random Unsplash"/> <h4>My Minds My Story (2001)</h4> </div>
</div>
   


</Animated>
        {this.state.loading ?  <Catalog /> :  <h1>Loaded </h1>}
        {this.props.apiResults ?  <h1>news </h1> :  <h1>no news </h1>}
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
    apiResults: JSON.stringify(state.apiReducer.json),
   
  })

export default connect(
    mapStateToProps,
  { addTodo,fetchPosts }
)(PrikazSlika);
// export default AddTodo;
