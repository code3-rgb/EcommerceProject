// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"



const firebaseConfig = {

  apiKey: "AIzaSyDJs3DNe-UZNda65SQRjXTh33G93qpj020",

  authDomain: "ecommerce-app-3883e.firebaseapp.com",

  projectId: "ecommerce-app-3883e",

  storageBucket: "ecommerce-app-3883e.appspot.com",

  messagingSenderId: "563198285811",

  appId: "1:563198285811:web:67a1e7494d7789a926a486"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
