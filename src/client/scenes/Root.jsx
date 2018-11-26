// @flow strict
import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Welcome from "client/scenes/Welcome";
import ChatRedux from "client/scenes/ChatRedux";
import ChatContext from "client/scenes/ChatContext";

const Global = createGlobalStyle`
  body {
    color: #212121;
    font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02em;
  }
`;

const Root = () => (
  <>
    <Global />
    <Switch>
      <Route path="/" exact render={() => <Welcome />} />
      <Route path="/redux" exact render={() => <ChatRedux />} />
      <Route path="/context" exact render={() => <ChatContext />} />
    </Switch>
  </>
);

// eslint-disable-next-line no-undef
export default hot(module)(Root);
