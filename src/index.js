import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'
import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


// add imports and code
const store = createStore(manageUsers, composeWithDevTools())

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,  
  // add imports and code
  document.getElementById('root')
);
