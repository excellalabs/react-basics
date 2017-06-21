
import { type as addMessageType } from '../actions/addMessageToQueue'

export const INITIAL_STATE = [];

export default (previousState = INITIAL_STATE, action) => {
  switch(action.type) {
    case addMessageType:
      return [
        action.messageText,
        ...previousState
      ];

    default:
      return previousState;
  }
}