import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  const register = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={register}>
      <h3> Register User </h3>
      <input
        placeholder="Enter your first name."
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        placeholder="Enter your last name."
        onChange={(e) => setUserInfo({ ...userInfo, surname: e.target.value })}
      />
      <input
        placeholder="Enter your email address."
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
      />
      <input
        placeholder="Enter your email password."
        type="password"
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button type="submit"> Create User</button>
    </form>
  );
};

export default Register;
