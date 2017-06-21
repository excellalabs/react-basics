import React, { Component } from 'react';

import './MessageInput.css';

class MessageInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      messageText: ''
    };
    this.setMessage = (messageText) => this.setState({ messageText });
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
          value={ this.state.messageText }
          onChange={ (ev) => this.setMessage(ev.currentTarget.value) }
        />
        <button className="submit-button" type="submit">
          Send
        </button>
      </form>
    );
  }
}

export default MessageInput;
