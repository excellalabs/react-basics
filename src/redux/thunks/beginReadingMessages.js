
import messages from '../../database/messages'
import setMessageQueue from '../actions/setMessageQueue'
import addMessageToQueue from '../actions/addMessageToQueue'

let reading = false;

const limitedMessages = messages.limitToLast(30);

export default () => {
  return (dispatch) => {
    const readFromRemote = () => {
      limitedMessages.once('value', (snapshot) => {
        const messageQueue = [];
        snapshot.forEach(msgSnap => {
          messageQueue.push(msgSnap.val());
        });
        dispatch(setMessageQueue(messageQueue));
      })
    };

    readFromRemote();

    if(reading) {
      return;
    }

    limitedMessages.on('child_added', (snapshot) => {
      const message = snapshot.val();
      dispatch(addMessageToQueue(message));
    });

    messages.on('child_removed', readFromRemote);

    reading = true;
  }
}