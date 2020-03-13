import React from "react";
import MainScreenSaljiDalje from "./components/MainScreenSaljiDalje";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScreenDetaljnoArtikl from "./components/dumb/ScreenDetaljnoArtikl";
import ScreenNarudzba from "./components/dumb/ScreenNarudzba";
import ScreenThankYouPage from "./components/dumb/ScreenThankYouPage";
import ScreenKategorije from "./components/dumb/ScreenKategorije";
import ScreenTerms from './components/dumb/ScreenTerms'



import "./styles.css";
import ScreenSignUp from "./components/dumb/ScreenSignUp";
import ReactGA from 'react-ga';
import ScreenSuradnja from "./components/dumb/ScreenSuradnja";
ReactGA.initialize('UA-160018072-1');
ReactGA.pageview(window.location.pathname + window.location.search);


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
          <Route path="/signup/" component={ScreenSignUp} />
          <Route path="/suradnja/" component={ScreenSuradnja} />
          <Route path="/uvjeti/" component={ScreenTerms} />

        </Switch>
      </div>
    </Router>
  );
}
