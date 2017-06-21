import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MessageInput from '../../containers/MessageInput';
import store from '../../redux'

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <MessageInput onSubmit={console.log} />
        </Provider>
      </div>
    );
  }
}

export default App;
