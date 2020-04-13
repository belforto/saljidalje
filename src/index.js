import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import SaljiDaljeApp from "./SaljiDaljeApp";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-N47NT6J'
}
TagManager.initialize(tagManagerArgs)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}  >
  
    <SaljiDaljeApp />
  </Provider>,
  rootElement
);
