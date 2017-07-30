import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCQWgp2tvE2Phv_A5Yq9RzvyMf0GDTfuBs",
    authDomain: "planeacion-hidalgo.firebaseapp.com",
    databaseURL: "https://planeacion-hidalgo.firebaseio.com",
    projectId: "planeacion-hidalgo",
    storageBucket: "planeacion-hidalgo.appspot.com",
    messagingSenderId: "679579674763"
  };
  firebase.initializeApp(config);

export default firebase;