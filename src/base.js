import firebase from 'firebase/app'
import "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp7aKUdkM7aQgNfZRymaNMGF_pn1q44tU",
  authDomain: "audio-visualizer-2a6bf.firebaseapp.com",
  projectId: "audio-visualizer-2a6bf",
  storageBucket: "audio-visualizer-2a6bf.appspot.com",
  messagingSenderId: "555781453383",
  appId: "1:555781453383:web:8e3ee3ef6734589906a362"
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);