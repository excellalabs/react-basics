
export const type = 'add_message_to_queue';

export default (messageText) => ({
  type,
  time: Date.now(),
  messageText
});