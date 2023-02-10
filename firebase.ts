import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVoGek4YZ8YGPSl4DxbV_egXWExt_Lg70",
  authDomain: "chatgpt-clone-b96e2.firebaseapp.com",
  projectId: "chatgpt-clone-b96e2",
  storageBucket: "chatgpt-clone-b96e2.appspot.com",
  messagingSenderId: "229304151271",
  appId: "1:229304151271:web:3da74a9510fc4fe1f14642",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
