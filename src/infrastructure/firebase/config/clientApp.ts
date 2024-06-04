import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";
import { initializeApp, getApps } from "firebase/app";

export const firebaseApp = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
