import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9_U_oF5AuThqEVgKXUtXiNZF1XWGzgB4",
    authDomain: "pitstop-6bf41.firebaseapp.com",
    databaseURL: "https://pitstop-6bf41.firebaseio.com",
    projectId: "pitstop-6bf41",
    storageBucket: "pitstop-6bf41.appspot.com",
    messagingSenderId: "118672574436"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};