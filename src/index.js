import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import { config } from './firebase.config';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp(config);
const db = firebase.firestore();

ReactDOM.render(<App db={db} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
