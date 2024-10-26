import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDA8LVcBB6ZuFMGtZZLEh_veJ44WGrNRdE',
//   authDomain: 'house-marketplace-app-fb1d0.firebaseapp.com',
//   projectId: 'house-marketplace-app-fb1d0',
//   storageBucket: 'house-marketplace-app-fb1d0.appspot.com',
//   messagingSenderId: '832068369979',
//   appId: '1:832068369979:web:dce177da9bfc60a4b4e61e',
// }

const firebaseConfig = {
  apiKey: "AIzaSyBQd8Doe5m0gjo0wXSCt-UrzoUO5WNV3w4",
  authDomain: "windyhomes-8018a.firebaseapp.com",
  projectId: "windyhomes-8018a",
  storageBucket: "windyhomes-8018a.appspot.com",
  messagingSenderId: "683148403795",
  appId: "1:683148403795:web:4e5f9f23d98ff8e17f12a6",
  measurementId: "G-GFHGGKR55H"
};


// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
