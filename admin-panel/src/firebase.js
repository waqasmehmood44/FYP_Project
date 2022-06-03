// import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
import 'firebase/storage'
 

const firebaseConfig = {
  apiKey: "AIzaSyDQXxN9hLkCEMwGTqvhdDcCoxGmyQd3O3o",
  authDomain: "car-wash-2f9fe.firebaseapp.com",
  databaseURL: "https://car-wash-2f9fe-default-rtdb.firebaseio.com",
  projectId: "car-wash-2f9fe",
  storageBucket: "car-wash-2f9fe.appspot.com",
  messagingSenderId: "734397613167",
  appId: "1:734397613167:web:be4f491a40a22de168f99a",
  measurementId: "G-2X4RPDS8Z1"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth=getAuth()
export default firebase;