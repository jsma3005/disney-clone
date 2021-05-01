import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgJ4h9sKa0J5meD5_w-k1xV8kaiDzyfvg",
    authDomain: "disneyplus-clone-52bd6.firebaseapp.com",
    projectId: "disneyplus-clone-52bd6",
    storageBucket: "disneyplus-clone-52bd6.appspot.com",
    messagingSenderId: "299067993446",
    appId: "1:299067993446:web:0d282674ea428442e16ca7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;