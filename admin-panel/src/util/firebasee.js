import firebase from 'firebase';
// import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDQXxN9hLkCEMwGTqvhdDcCoxGmyQd3O3o",
    authDomain: "car-wash-2f9fe.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://car-wash-2f9fe-default-rtdb.firebaseio.com",
    projectId: "car-wash-2f9fe",
    storageBucket: "car-wash-2f9fe.appspot.com",
    messagingSenderId: "734397613167",
    appId: "1:734397613167:web:be4f491a40a22de168f99a",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: "G-2X4RPDS8Z1",
  };
  
  firebase.initializeApp(firebaseConfig);
  // export const auth =getAuth();
  // Get a reference to the database service
   

 
  export default firebase;