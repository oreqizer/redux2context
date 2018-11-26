// @flow strict
import * as React from "react";
import styled from "styled-components";

const Container = styled.section`
  box-sizing: border-box;
  position: relative;
  height: 40px;
  margin: 5px;
  display: flex;
`;

const Label = styled.label`
  flex: 1;
  width: 100%;
  margin-right: 10px;
`;

const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0 10px;
`;

const Button = styled.button`
  flex: 0;
  display: inline-block;
  outline: none;
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #ddd;
  }
`;

type Props = {|
  onSubmit: (value: string) => void,
|};

type State = {|
  value: string,
|};

export default class Input extends React.PureComponent<Props, State> {
  state = {
    value: "",
  };

  handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value: ev.target.value });
  };

  handleKeyPress = (ev: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const { onSubmit } = this.props;

    if (ev.key === "Enter" && ev.target.value !== "") {
      onSubmit(ev.target.value);
      this.setState({ value: "" });
    }
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    if (value !== "") {
      onSubmit(value);
      this.setState({ value: "" });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Label htmlFor="input">
          <InputStyled
            id="input"
            type="text"
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </Label>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Container>
    );
  }
}
