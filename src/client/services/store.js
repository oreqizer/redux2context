// @flow strict
import { createStore, applyMiddleware } from "redux";
import type { Store } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import chat from "client/services/chat/redux";
import type { State, Action } from "client/services/chat/redux";

const store: Store<State, Action> = createStore(chat, applyMiddleware(thunk, logger));

export default store;

// Hot reload
// ---

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept("client/services/chat/redux", () => {
    store.replaceReducer(chat);
  });
}
