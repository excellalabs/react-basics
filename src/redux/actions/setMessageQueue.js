
export const type = 'set_message_queue';

export default (messageQueue) => ({
  type,
  messageQueue
});