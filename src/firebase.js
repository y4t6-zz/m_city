import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyByc9Kf1soCa9oKJlYvCrL3X51_uQh9Dp4",
    authDomain: "m-city-e0ac5.firebaseapp.com",
    databaseURL: "https://m-city-e0ac5.firebaseio.com",
    projectId: "m-city-e0ac5",
    storageBucket: "m-city-e0ac5.appspot.com",
    messagingSenderId: "596442138120"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB.ref('matches').once('value').then((snapshot)=>{
    console.log(snapshot.val())
})