import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        navigate(-1);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  return (
    <form onSubmit={login}>
      <h3> Login </h3>
      <input
        placeholder="Email..."
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        placeholder="Password..."
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />

      <button type="submit"> Login</button>
      <button onClick={googleLogin}> Continue With Google</button>
    </form>
  );
};

export default Login;
