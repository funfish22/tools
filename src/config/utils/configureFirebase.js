import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyA7IOBDdww2exhbQ87eYad1Yfx3uAFtAqE',
    authDomain: 'link8-79b8b.firebaseapp.com',
    databaseURL: 'https://link8-79b8b-default-rtdb.firebaseio.com',
    projectId: 'link8-79b8b',
    storageBucket: 'link8-79b8b.appspot.com',
    messagingSenderId: '293167850110',
    appId: '1:293167850110:web:799d9520475da77aa3ee2f',
    measurementId: 'G-KR86MEGZXK',
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
