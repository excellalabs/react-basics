
import { type as addMessageType } from '../actions/addMessageToQueue'
import { type as setMessageQueue } from '../actions/setMessageQueue'

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
    
    case setMessageQueue:
      return action.messageQueue;

    default:
      return previousState;
  }
}