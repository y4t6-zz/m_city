import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import { getFirebaseConfig } from './secrets';

const config = getFirebaseConfig();

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}