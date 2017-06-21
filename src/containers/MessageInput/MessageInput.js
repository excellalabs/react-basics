import React, { Component } from 'react';
import { connect } from 'react-redux';

import setMessageText from '../../redux/actions/setMessageText'
import addMessageToQueue from '../../redux/actions/addMessageToQueue'

import './MessageInput.css';

class MessageInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.sendMessage = (ev) => {
      ev.preventDefault()
      this.props.sendMessage(this.props.messageText);
      this.props.setMessageText('');
    };

    this.checkForEnter = (ev) => {
      if (ev.key === 'Enter' && !ev.getModifierState('Shift')) {
        this.sendMessage(ev)
      }
    }
  }

  render() {
    return (
      <form className="message-input" onSubmit={ this.sendMessage }>
        <textarea
          className="message-field"
          value={ this.props.messageText }
          onKeyPress={ this.checkForEnter }
          onChange={ (ev) => this.props.setMessageText(ev.currentTarget.value) }
        />
        <button className="submit-button" type="submit">
          Send
        </button>
      </form>
    );
  }
}

const mapState = (state) => ({
  messageText: state.message.text
});

const mapDispatch = (dispatch) => ({
  setMessageText: (messageText) => dispatch(setMessageText(messageText)),
  sendMessage: (messageText) => dispatch(addMessageToQueue(messageText))
});

export default connect(mapState, mapDispatch)(MessageInput);
