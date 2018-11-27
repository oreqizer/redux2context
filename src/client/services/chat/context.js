// @flow strict
import * as React from "react";

import type { Message } from "client/records/Message";

export type Context = {|
  messages: Message[],
  onCreateMessage: (text: string) => void,
|};

const chatDefault: Context = {
  messages: [],
  onCreateMessage: () => {},
};

const context: React.Context<Context> = React.createContext(chatDefault);

export const { Provider, Consumer } = context;
