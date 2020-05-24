import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from './configs/FireBaseConfig';

const store = createStore(
                rootReducer,
                applyMiddleware(thunk),
              );

firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App initUser={user} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})
M.AutoInit();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
