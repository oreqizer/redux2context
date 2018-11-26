// @flow strict
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { createStore } from "redux";
import type { Store } from "redux";
import { Provider } from "react-redux";

import chat from "client/services/chat/redux";
import type { State, Action } from "client/services/chat/redux";
import Root from "client/scenes/Root";
import Html from "./Html";
import { assets } from "../config";

const store: Store<State, Action> = createStore(chat);

function markup(url: string) {
  const context = {};
  const sheet = new ServerStyleSheet();
  const root = ReactDOM.renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <StyleSheetManager sheet={sheet.instance}>
          <Root />
        </StyleSheetManager>
      </StaticRouter>
    </Provider>,
  );

  return ReactDOM.renderToStaticNodeStream(
    <Html root={root} css={sheet.getStyleElement()} assets={assets} />,
  );
}

export default markup;
