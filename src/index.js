import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@firebase/firestore';
import firebase from 'firebase';
import { FirestoreProvider } from 'react-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0JoPhnkL9Yk1hMKZzQjt7jvSmVJ4EnTM",
    authDomain: "todo-react-app-1896a.firebaseapp.com",
    databaseURL: "https://todo-react-app-1896a.firebaseio.com",
    projectId: "todo-react-app-1896a",
    storageBucket: "todo-react-app-1896a.appspot.com",
    messagingSenderId: "383548665423",
    appId: "1:383548665423:web:d6466e262db8ddd3d9c43a"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<FirestoreProvider firebase={firebase}>
    <App />
</FirestoreProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
