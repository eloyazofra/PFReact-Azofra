// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBxmYuckKkm8qUb-PIYxPMbi6oXNKaKRso",
  authDomain: "floki-disenomadera.firebaseapp.com",
  projectId: "floki-disenomadera",
  storageBucket: "floki-disenomadera.appspot.com",
  messagingSenderId: "91013800770",
  appId: "1:91013800770:web:7a3cbf8cd0f05b786ddedb"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore
export { db };