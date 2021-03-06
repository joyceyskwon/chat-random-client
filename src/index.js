import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ActionCableProvider } from 'react-actioncable-provider'
import * as serviceWorker from './serviceWorker';
import adapter from './services/adapter';

// const host = location.origin.replace(/^http/, 'ws')
// this.connection = new Websocket(host)

ReactDOM.render(
  <Router>
    <ActionCableProvider url={adapter.API_WS_ROOT}>
      <App />
    </ActionCableProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();