import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK5rANhakHxUVYfwO9TkD1V7OjPvyHiZY",
  authDomain: "react-movie-app-f9762.firebaseapp.com",
  projectId: "react-movie-app-f9762",
  storageBucket: "react-movie-app-f9762.appspot.com",
  messagingSenderId: "782608383250",
  appId: "1:782608383250:web:2aa5525c447e81368087cb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
