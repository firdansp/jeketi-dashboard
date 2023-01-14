import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

var firebaseConfig = {
  apiKey: "AIzaSyDGLmTYv-0JPhI1dK5WZHob62aIY1vO8cA",
  authDomain: "f4-dev-circle.firebaseapp.com",
  databaseURL: "https://f4-dev-circle.firebaseio.com",
  projectId: "f4-dev-circle",
  storageBucket: "f4-dev-circle.appspot.com",
  messagingSenderId: "529098313057",
  appId: "1:529098313057:web:72a700c1f5a5e4a0958920"
};

firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth());


export default ui;
