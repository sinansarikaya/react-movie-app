import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create a new user
export const createUser = async (name, surname, email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: `${name} ${surname}`,
    });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

// Login Function
export const loginWithEmail = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

// Login With Google
export const loginWithGoogle = async (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// Logout Function
export const logOut = (navigate) => {
  signOut(auth);
  // setCurrentUser(false)
  navigate("/login");
};

// Login Control Function
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, displayName, photoURL })
      );
      console.log("giris yapili");
    } else {
      localStorage.removeItem("currentUser");
      setCurrentUser(false);
      console.log("Cikis yapili");
    }
  });
};

// Reset Function
export const passwordReset = (navigate, email) => {
  console.log(email);
  sendPasswordResetEmail(auth, email)
    .then(() => {
      navigate("/login");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
