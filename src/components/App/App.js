import React, { Component } from 'react';

import MessageInput from '../MessageInput';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <MessageInput onSubmit={console.log} />
      </div>
    );
  }
}

export default App;
