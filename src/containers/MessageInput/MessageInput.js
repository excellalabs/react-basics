import React, { Component } from 'react';
import { connect } from 'react-redux';

import setMessageText from '../../redux/actions/setMessageText'

import './MessageInput.css';

class MessageInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.sendMessage = (ev) => {
      ev.preventDefault()
      this.props.onSubmit(this.state.messageText);
      this.setMessage('');
    };
  }

  render() {
    return (
      <form className="message-input" onSubmit={ this.sendMessage }>
        <textarea
          className="message-field"
          value={ this.props.messageText }
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
  setMessageText: (messageText) => dispatch(setMessageText(messageText))
});

export default connect(mapState, mapDispatch)(MessageInput);
