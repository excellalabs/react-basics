import React from 'react';
import { connect } from 'react-redux';

import './MessageList.css';

const MessageList = (props) => {
  const messages = props.messages || [];
  const messagesWithBreaks = messages.map(message => {
    return message.split('\n').map((line, index) => <p key={index}>{line}</p>)
  })
  return (
    <div className="message-list">
      {
        messagesWithBreaks.map((message, index) => (
          <div key={index} className="message-item">
            { message }
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
