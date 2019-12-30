import firebase from 'firebase/app';
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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        //Si la snapshot no existe, entonces queremos que se cree
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating the user', error)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
