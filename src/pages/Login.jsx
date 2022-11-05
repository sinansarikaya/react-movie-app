import { signInWithEmailAndPassword } from "firebase/auth";
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
    </form>
  );
};

export default Login;
