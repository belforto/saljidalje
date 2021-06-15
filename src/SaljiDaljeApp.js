import React from "react";
import MainScreenSaljiDalje from "./components/MainScreenSaljiDalje";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import ScreenDetaljnoArtikl from "./components/dumb/ScreenDetaljnoArtikl";
import ScreenDetaljnoDirekt from "./components/dumb/ScreenDetaljnoDirekt";
import ScreenNarudzba from "./components/dumb/ScreenNarudzba";
import ScreenThankYouPage from "./components/dumb/ScreenThankYouPage";
import ScreenKategorije from "./components/dumb/ScreenKategorije";
import ScreenTerms from './components/dumb/ScreenTerms'
import {  useEffect } from 'react';
import 'bulma/css/bulma.css'

import "./styles.css";
import ScreenSignUp from "./components/dumb/ScreenSignUp";


import ScreenSuradnja from "./components/dumb/ScreenSuradnja";
import ScreenPovratRobe from "./components/dumb/ScreenPovratRobe";


import ScreenONama from "./components/dumb/ScreenONama";
import ScreenBlogPost from "./components/dumb/ScreenBlogPost";
import {Helmet} from "react-helmet";


export default function SaljiDaljeApp() {
  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = "/gtm.js";
  //   // script.async = true;

  //   // script.innerHTML = "...";

  //   document.head.appendChild(script);
  // return () => {
  //     document.head.removeChild(script);
  //   }
  // }, []);

  return (
    <Router basename="/saljidalje">
{/* 
<Helmet>
                <meta charSet="utf-8" />
                <title>Helmet-test</title>

                <script>
    
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments)
    }
  
    gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "granted",
        wait_for_update: 2000 // milliseconds
    });
    
    gtag("set", "ads_data_redaction", true);
    
   
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-N47NT6J''); //replace GTM-XXXXXX with the ID of your Google Analytics property
</script>
            </Helmet> */}

      <div   >
   
        <br />
        <Switch>
          <Route path="/" exact component={MainScreenSaljiDalje} />
          <Route path="/detalji/:id" component={ScreenDetaljnoArtikl} />
          <Route path="/direkt/detalji/:id" component={ScreenDetaljnoDirekt} />
          <Route path="/category/:kategorija" component={ScreenKategorije} />
          <Route path="/blog/:identifikator" component={ScreenBlogPost} />
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
