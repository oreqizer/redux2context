// @flow strict
/* eslint-disable no-underscore-dangle */
import * as React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Root from "./scenes/Root";
import store from "./services/store";

const app = document.getElementById("react");

if (app) {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </BrowserRouter>,
    app,
  );
}

// Hot reload
// ---

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
