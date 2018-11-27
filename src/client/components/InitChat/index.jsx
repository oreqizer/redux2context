// @flow strict
import * as React from "react";
import * as R from "ramda";

import type { Context } from "client/services/chat/context";
import type { Messages } from "client/records/Message";
import * as api from "client/services/chat/api";

type Props = {|
  children: (ctx: Context) => React.Node,
|};

type State = {|
  order: number,
  messages: Messages,
  messageOrder: string[],
|};

export default class InitChat extends React.Component<Props, State> {
  state = {
    order: 0,
    messages: {},
    messageOrder: [],
  };

  handleGetMessage = () => {
    api.getMessage().then(msg => {
      const { order } = this.state;

      const orderNew = order + 1;
      this.setState(state => ({
        order: orderNew,
        messages: R.assoc(msg.id, msg, state.messages),
        messageOrder: R.insert(orderNew, msg.id, state.messageOrder),
      }));
    });
  };

  handleCreateMessage = (text: string) => {
    const { order } = this.state;

    const orderNew = order + 1;
    this.setState({ order: orderNew });

    api.createMessage(text).then(msg => {
      this.setState(state => ({
        messages: R.assoc(msg.id, msg, state.messages),
        messageOrder: R.insert(orderNew, msg.id, state.messageOrder),
      }));

      const responses = Math.floor(Math.random() * 4);
      Array(responses)
        .fill(null)
        .forEach(this.handleGetMessage);
    });
  };

  render() {
    const { children } = this.props;
    const { messages, messageOrder } = this.state;

    return children({
      messages: messageOrder.filter(Boolean).map(id => messages[id]),
      onCreateMessage: this.handleCreateMessage,
    });
  }
}
