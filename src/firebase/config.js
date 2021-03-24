import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaIjLBcGU3yPzcisP1-CwFfwou7eMLHbU",
    authDomain: "choycesmobile-d65f0.firebaseapp.com",
    projectId: "choycesmobile-d65f0",
    storageBucket: "choycesmobile-d65f0.appspot.com",
    messagingSenderId: "753501996921",
    appId: "1:753501996921:web:7086f26af7aa17cee811a8"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export {firebase };