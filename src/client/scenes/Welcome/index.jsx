// @flow strict
import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H1 = styled.h1`
  margin-top: 0;
`;

const A = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Welcome = () => (
  <>
    <H1>Yo</H1>
    <A to="/redux">Redux</A>
    <A to="/context">Context</A>
  </>
);

export default Welcome;
