import React from "react";
import MainScreenSaljiDalje from "./components/MainScreenSaljiDalje";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ScreenDetaljnoArtikl from "./components/dumb/ScreenDetaljnoArtikl";
import ScreenDetaljnoDirekt from "./components/dumb/ScreenDetaljnoDirekt";
import ScreenNarudzba from "./components/dumb/ScreenNarudzba";
import ScreenThankYouPage from "./components/dumb/ScreenThankYouPage";
import ScreenKategorije from "./components/dumb/ScreenKategorije";
import ScreenTerms from './components/dumb/ScreenTerms'

import 'bulma/css/bulma.css'

import "./styles.css";
import ScreenSignUp from "./components/dumb/ScreenSignUp";


import ScreenSuradnja from "./components/dumb/ScreenSuradnja";
import ScreenPovratRobe from "./components/dumb/ScreenPovratRobe";


import ScreenONama from "./components/dumb/ScreenONama";


export default function SaljiDaljeApp() {
  return (
    <Router basename="/saljidalje">
      
      <div   >
   
        <br />
        <Switch>
          <Route path="/" exact component={MainScreenSaljiDalje} />
          <Route path="/detalji/:id" component={ScreenDetaljnoArtikl} />
          <Route path="/direkt/detalji/:id" component={ScreenDetaljnoDirekt} />
          <Route path="/category/:kategorija" component={ScreenKategorije} />
          <Route path="/order/" component={ScreenNarudzba} />
          <Route path="/thankyou/" component={ScreenThankYouPage} />
          <Route path="/signup/" component={ScreenSignUp} />
          <Route path="/signupthankyou/" component={ScreenSignUp} />
          <Route path="/suradnja/" component={ScreenSuradnja} />
          <Route path="/uvjeti/" component={ScreenTerms} />
          <Route path="/povrat/" component={ScreenPovratRobe} />
          <Route path="/onama/" component={ScreenONama} />
         
          
        </Switch>
      </div>
    
    </Router>
  );
}
