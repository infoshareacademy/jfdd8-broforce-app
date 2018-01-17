import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA48KznyNkTo7AFbCPWTTFJdRAEntabD-I",
  authDomain: "szamello-app.firebaseapp.com",
  databaseURL: "https://szamello-app.firebaseio.com",
  projectId: "szamello-app",
  storageBucket: "",
  messagingSenderId: "357665956589"
};

export default () => {
  firebase.initializeApp(config);
}