import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: <YOURAPIKEY>,
  authDomain: <YOURAUTHDOAMIN>,
  projectId: <YOURPROJECTID>,
  storageBucket: <YOURSTORAGEBUCKET>,
  messagingSenderId: <YOURMESSAGINGSENDERID>,
  appId: <YOURAPPID>,
  measurementId: <YOURMEASUREMENTID>,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
