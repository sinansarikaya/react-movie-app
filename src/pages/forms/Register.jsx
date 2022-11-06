import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { Container, Aside, Form, Input, Button } from "./Form.styled";

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
    <Container>
      <Aside />
      <Form onSubmit={register}>
        <h3> Register User </h3>
        <Input
          placeholder="Enter your first name."
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <Input
          placeholder="Enter your last name."
          onChange={(e) =>
            setUserInfo({ ...userInfo, surname: e.target.value })
          }
        />
        <Input
          placeholder="Enter your email address."
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <Input
          placeholder="Enter your email password."
          type="password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <Button type="submit"> Create User</Button>
      </Form>
    </Container>
  );
};

export default Register;
