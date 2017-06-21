
import { type as addMessageType } from '../actions/addMessageToQueue'

export const INITIAL_STATE = [];

export default (previousState = INITIAL_STATE, action) => {
  switch(action.type) {
    case addMessageType:
      const message = {
        text: action.messageText,
        time: action.time
      }
      return [
        message,
        ...previousState
      ];

    default:
      return previousState;
  }
}