// @flow strict
import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import type { Connector } from "react-redux";

import Input from "client/components/Input";
import MessageBox from "client/components/MessageBox";
import type { Message } from "client/records/Message";
import * as chat from "client/services/chat/redux";

const Container = styled.div`
  box-sizing: border-box;
  padding: 10px;
  max-width: 400px;
`;

type Props = {|
  messages: Message[],
  createMessage: (text: string) => void,
|};

const ChatRedux = ({ messages, createMessage }: Props) => (
  <Container>
    {messages.map(msg => (
      <MessageBox key={msg.id} incoming={msg.from !== "me"}>
        {msg.text}
      </MessageBox>
    ))}
    <Input onSubmit={createMessage} />
  </Container>
);

// $FlowExpected: the new libdefs are fed up
const connector = connect(
  state => ({
    messages: chat.getMessages(state),
  }),
  {
    createMessage: chat.createMessage,
  },
);

export default connector(ChatRedux);
