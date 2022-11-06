import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Aside,
  Form,
  Title,
  Row,
  Label,
  Input,
  Button,
} from "./Form.styled";
import { FcGoogle } from "react-icons/fc";

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
        <Title> Login </Title>
        <Row>
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="Email..."
            type="text"
            id="email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            required
          />
        </Row>

        <Row>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Password..."
            type="password"
            id="password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            required
          />
        </Row>

        <Button type="submit"> Login</Button>
        <Button onClick={googleLogin}>
          <FcGoogle /> Continue With Google
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
