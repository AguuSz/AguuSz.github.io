import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA0JoPhnkL9Yk1hMKZzQjt7jvSmVJ4EnTM",
    authDomain: "todo-react-app-1896a.firebaseapp.com",
    databaseURL: "https://todo-react-app-1896a.firebaseio.com",
    projectId: "todo-react-app-1896a",
    storageBucket: "todo-react-app-1896a.appspot.com",
    messagingSenderId: "383548665423",
    appId: "1:383548665423:web:d6466e262db8ddd3d9c43a"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;