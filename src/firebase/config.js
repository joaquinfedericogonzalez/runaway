import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy2rV8TMicSWBc0wY9wqrC8-C6FGXwO6I",
  authDomain: "runaway-3bc18.firebaseapp.com",
  projectId: "runaway-3bc18",
  storageBucket: "runaway-3bc18.appspot.com",
  messagingSenderId: "1072433138753",
  appId: "1:1072433138753:web:f8cba18ae5eff43a640ac0"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}