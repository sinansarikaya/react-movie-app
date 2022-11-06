import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Aside, Form, Input, Button } from "./Form.styled";

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
    <Container>
      <Aside />
      <Form onSubmit={login}>
        <h3> Login </h3>
        <Input
          placeholder="Email..."
          type="text"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          required
        />
        <Input
          placeholder="Password..."
          type="password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          required
        />

        <Button type="submit"> Login</Button>
        <Button onClick={googleLogin}> Continue With Google</Button>
      </Form>
    </Container>
  );
};

export default Login;
