import React, { Component } from 'react';
import { Provider } from 'react-redux';

import DevTools from '../../containers/DevTools';
import MessageList from '../../containers/MessageList';
import MessageInput from '../../containers/MessageInput';
import store from '../../redux'
import beginReadingMessages from '../../redux/thunks/beginReadingMessages'

import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(beginReadingMessages());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DevTools />
          <MessageList />
          <MessageInput onSubmit={console.log} />
        </div>
      </Provider>
    );
  }
}

export default App;
