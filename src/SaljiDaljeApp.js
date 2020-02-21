import React from "react";
import MainScreenSaljiDalje from "./components/MainScreenSaljiDalje";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScreenDetaljnoArtikl from "./components/dumb/ScreenDetaljnoArtikl";
import ScreenNarudzba from "./components/dumb/ScreenNarudzba";
import ScreenThankYouPage from "./components/dumb/ScreenThankYouPage";
import ScreenKategorije from "./components/dumb/ScreenKategorije";



import "./styles.css";


export default function SaljiDaljeApp() {
  return (
    <Router basename="/saljidalje">
      <div   >

        <br />
        <Switch>
          <Route path="/" exact component={MainScreenSaljiDalje} />
          <Route path="/detalji/:id" component={ScreenDetaljnoArtikl} />
          <Route path="/category/:kategorija" component={ScreenKategorije} />
          <Route path="/order/" component={ScreenNarudzba} />
          <Route path="/thankyou/" component={ScreenThankYouPage} />

        </Switch>
      </div>
    </Router>
  );
}
