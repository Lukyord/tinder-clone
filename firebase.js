// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDvCaX_uZIaEWlphyZLKXCuKIVbTE6RFf8",
//   authDomain: "tinder-clone-584e7.firebaseapp.com",
//   projectId: "tinder-clone-584e7",
//   storageBucket: "tinder-clone-584e7.appspot.com",
//   messagingSenderId: "587002959558",
//   appId: "1:587002959558:web:e5846ab881e7e4f12da9c7",
// };

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db };
