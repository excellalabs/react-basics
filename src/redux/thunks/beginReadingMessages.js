
import messages from '../../database/messages'
import setMessageQueue from '../actions/setMessageQueue'
import addMessageToQueue from '../actions/addMessageToQueue'

let reading = false;

export default () => {
  return (dispatch) => {
    const readFromRemote = () => {
      messages.once('value', (messageQueue) => {
        dispatch(setMessageQueue(messageQueue));
      })
    };

    readFromRemote();

    if(reading) {
      return;
    }

    messages.on('child_added', (message) => {
      dispatch(addMessageToQueue(message));
    });

    mesages.on('child_removed', readFromRemote);

    reading = true;
  }
}