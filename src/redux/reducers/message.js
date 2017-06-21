
import { type as setMessageTextType } from '../actions/setMessageText'

export const INITIAL_STATE = {
  text: ''
};

export default (previousState = INITIAL_STATE, action) => {
  switch(action.type) {
    case setMessageTextType:
      return {
        ...previousState,
        text: action.messageText
      };

    default:
      return previousState;
  }
}