import React from "react";
import { connect } from "react-redux";
import { addTodo ,fetchPosts} from "../redux/actions";

import Catalog from "./Catalog";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", loading:true };
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
    this.props.fetchPosts("")
}

  render() {
    return (
      <div>
          <h2>This is my Test Component</h2>
     
        {this.state.loading ?  <Catalog /> :  <h1>Nothing here </h1>}
        {this.props.apiResults ?  <h1>{this.props.apiResults}</h1> :  <h1>no news </h1>}
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
)(TestComponent);
// export default AddTodo;
