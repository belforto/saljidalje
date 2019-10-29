import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import PrikazSlika from "./PrikazSlika";
import AutosuggestMovie from "./AutosuggestMovie";

import TodoList from "./TodoList";
import VisibilityFilters from "./VisibilityFilters";

import { Animated } from "react-animated-css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

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

  render() {
    return (



      <div class="row flex-top">

        <h1>My Movie Todo List</h1>
        <div class="sm-6 col">

          <Animated animationIn="fadeIn" animationInDuration={6000} isVisible={true}>
            <p>
              We bring you Movie dataset with over of 1000 movies.Create your favorite movie playlist and show who is the real Scorsese in da' House.
      </p>
          </Animated>
        </div>

        <TodoList />
        <VisibilityFilters />
        <br />
        <div class="sm-6 col">
          <AutosuggestMovie simplifiedFunction={this.updateInput} />
          <button className="add-todo" onClick={this.handleAddTodo}>
            Add Movie
        </button>
        </div>







        <PrikazSlika />
      </div>

    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
