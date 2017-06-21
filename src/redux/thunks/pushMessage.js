
import messages from '../../database/messages'

export default (messageText) => {
  return () => {
    const message = {
      text: messageText,
      time: Date.now()
    };

    messages.push(message);
  }
}