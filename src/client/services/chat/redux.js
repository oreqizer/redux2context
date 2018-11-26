// @flow strict
import * as R from "ramda";
import type { Dispatch } from "redux";

import type { Message, Messages } from "client/records/Message";
import * as api from "./api";

const CREATE_MESSAGE = "CREATE_MESSAGE";
const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";

type CreateMessage = {|
  type: "CREATE_MESSAGE",
|};

type CreateMessageSuccess = {|
  type: "CREATE_MESSAGE_SUCCESS",
  payload: {|
    message: Message,
    order: number,
  |},
|};

export type Action = CreateMessage | CreateMessageSuccess;

export type State = {|
  order: number,
  messages: Messages,
  messageOrder: string[],
|};

const initialState: State = {
  order: 0,
  messages: {},
  messageOrder: [],
};

function chat(state: State = initialState, action: Action): State {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        order: state.order + 1,
      };

    case CREATE_MESSAGE_SUCCESS:
      return {
        order: state.order,
        messages: R.assoc(action.payload.message.id, action.payload.message, state.messages),
        messageOrder: R.insert(action.payload.order, action.payload.message.id, state.messageOrder),
      };

    default:
      return state;
  }
}

export default chat;

const getOrder = (state: State): number => state.order;

export const getMessages = (state: State): Message[] =>
  state.messageOrder.filter(Boolean).map(id => state.messages[id]);

type GetState<T> = () => T;

const getMessage = () => (dispatch: Dispatch<Action>, getState: GetState<State>) => {
  api.getMessage().then(msg => {
    dispatch({ type: CREATE_MESSAGE });
    const order = getOrder(getState());
    dispatch({
      type: CREATE_MESSAGE_SUCCESS,
      payload: {
        message: msg,
        order,
      },
    });
  });
};

const getResponseCount = () => Math.floor(Math.random() * 4);

export const createMessage = (text: string) => (
  dispatch: Dispatch<Action>,
  getState: GetState<State>,
) => {
  dispatch({ type: CREATE_MESSAGE });

  const order = getOrder(getState());

  api.createMessage(text).then(msg => {
    dispatch({
      type: CREATE_MESSAGE_SUCCESS,
      payload: {
        message: msg,
        order,
      },
    });

    const responses = getResponseCount();
    Array(responses)
      .fill(null)
      // $FlowExpected: thunk
      .forEach(() => dispatch(getMessage()));
  });
};
