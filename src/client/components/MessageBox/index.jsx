// @flow strict
import * as React from "react";
import styled from "styled-components";

const Container = styled.section`
  box-sizing: border-box;
  border-radius: ${({ incoming }) => (incoming ? "0 20px 20px 20px" : "20px 0 20px 20px")};
  padding: 0 20px;
  margin: 5px;
  background: ${({ incoming }) => (incoming ? "#CCC" : "crimson")};
  height: 40px;
  line-height: 40px;
  color: ${({ incoming }) => (incoming ? "black" : "white")};
`;

type Props = {|
  incoming?: boolean,
  children: React.Node,
|};

const MessageBox = ({ children, incoming }: Props) => (
  <Container incoming={incoming}>{children}</Container>
);

export default MessageBox;
