import React, { Component } from 'react';
import { connect } from 'react-redux';

import setMessageText from '../../redux/actions/setMessageText'

import './MessageList.css';

const MessageList = (props) => {
  const messages = [
    'Hello',
    'I am doing well',
    'How are you?'
  ]
  return (
    <div className="message-list">
      {
        messages.map((message) => (
          <div className="message-item">
            { message }
          </div>
        ))
      }
    </div>
  );
}

const mapState = (state) => ({
  messageText: state.message.text
});

const mapDispatch = (dispatch) => ({
  setMessageText: (messageText) => dispatch(setMessageText(messageText))
});

//export default connect(mapState, mapDispatch)(MessageInput);
export default MessageList;
