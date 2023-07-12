import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCDElCRG643wqbW6eiOWa93UukIPFBof2Y",
  authDomain: "sample-app-8af36.firebaseapp.com",
  projectId: "sample-app-8af36",
  storageBucket: "sample-app-8af36.appspot.com",
  messagingSenderId: "932036582872",
  appId: "1:932036582872:web:0a8fea935068eaf7e2e6ad"
};


const app = initializeApp(firebaseConfig);
export default getFirestore(app);