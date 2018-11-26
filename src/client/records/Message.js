// @flow strict
export type Message = {|
  id: string,
  from: string,
  text: string,
|};

export type Messages = { [id: string]: Message };
