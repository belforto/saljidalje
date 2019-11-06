import React from "react";
import AddTodo from "./components/AddTodo";
import ArticlesDynamic from "./components/ArticlesDynamic";


import "./styles.css";

import TestComponent from "./components/TestComponent";
import Navbar from "./components/dumb/Navbar";

import { HashRouter as Router, Switch, Route } from 'react-router-dom'


export default function TodoApp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>


      <div className="todo-app container"  >
        <Navbar />
        <br />
      

        <Switch>
          <Route path="/" exact component={AddTodo} />
          <Route path="/test" component={TestComponent} />
          <Route path="/articles/:id" component={ArticlesDynamic} />

        </Switch>

      </div>

    </Router>
  );
}
