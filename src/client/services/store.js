// @flow strict
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import chat from "client/services/chat/redux";

const store = createStore(chat, applyMiddleware(thunk, logger));

export default store;
