import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import Reducer from './reducer/Reducer';
import logger from 'redux-logger'


const store = createStore(
  Reducer,
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
