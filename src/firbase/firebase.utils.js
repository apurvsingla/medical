import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyByzBU9pDq3cZXVuq8P6YlskiVw39fwsNc",
    authDomain: "shopping-eef6c.firebaseapp.com",
    projectId: "shopping-eef6c",
    storageBucket: "shopping-eef6c.appspot.com",
    messagingSenderId: "795888645896",
    appId: "1:795888645896:web:9a89611f62dbd118fb9ebd",
    measurementId: "G-K9BDHYDCM3"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth){
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,email,createdAt, ...additionalData
      })
    } catch (error) {
      console.log('error creating User', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
