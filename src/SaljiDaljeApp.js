import React from "react";
import MainScreenSaljiDalje from "./components/MainScreenSaljiDalje";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScreenDetaljiKupnje from "./components/dumb/ScreenDetaljiKupnje";
import ScreenNarudzba from "./components/dumb/ScreenNarudzba";


import "./styles.css";


export default function SaljiDaljeApp() {
  return (
    <Router basename="/saljidalje">
      <div   >
        <br />
        <Switch>
          <Route path="/" exact component={MainScreenSaljiDalje} />
          <Route path="/detalji/:id" component={ScreenDetaljiKupnje} />
          <Route path="/order/" component={ScreenNarudzba} />

        </Switch>
      </div>
    </Router>
  );
}
