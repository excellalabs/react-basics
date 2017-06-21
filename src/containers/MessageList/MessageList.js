import React from 'react';
import { connect } from 'react-redux';

import './MessageList.css';

const MessageList = (props) => {
  const messages = props.messages || [];
  return (
    <div className="message-list">
      {
        messages.map((message, index) => (
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
