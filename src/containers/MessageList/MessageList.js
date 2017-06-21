import React from 'react';
import { connect } from 'react-redux';

import './MessageList.css';

const MessageList = (props) => {
  const sortedMessages = (props.messages || []).sort((msg1, msg2) => msg2.time - msg1.time);
  const messagesWithBreaks = sortedMessages
    .map(message => {
      return {
        text: message.text.split('\n').map((line, index) => <p key={index}>{line}</p>),
        time: message.time
      };
    });
  return (
    <div className="message-list">
      {
        messagesWithBreaks.map((message, index) => (
          <div key={index} className="message-item">
            { message.text }
            <span className="message-time">{ new Date(message.time).toLocaleString() }</span>
          </div>
        ))
      }
    </div>
  );
}

const mapState = (state) => ({
  messages: state.messageQueue
});

export default connect(mapState)(MessageList);
