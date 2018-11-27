// @flow strict
import * as React from "react";
import styled from "styled-components";

import Input from "client/components/Input";
import MessageBox from "client/components/MessageBox";
import { Consumer } from "client/services/chat/context";

const Container = styled.div`
  box-sizing: border-box;
  padding: 10px;
  max-width: 400px;
`;

const ChatContext = () => (
  <Container>
    <Consumer>
      {chat => (
        <>
          {chat.messages.map(msg => (
            <MessageBox key={msg.id} incoming={msg.from !== "me"}>
              {msg.text}
            </MessageBox>
          ))}
          <Input onSubmit={chat.onCreateMessage} />
        </>
      )}
    </Consumer>
  </Container>
);

export default ChatContext;
