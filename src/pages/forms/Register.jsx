import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../auth/firebase";
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
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const { email, password, name, surname } = userInfo;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: ` ${name} ${surname}`,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Aside />
      <Form onSubmit={register}>
        <Title> Register User </Title>
        <Row>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            placeholder="Enter your first name."
            type="text"
            id="firstName"
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            required
          />
        </Row>
        <Row>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            placeholder="Enter your last name."
            type="text"
            id="lastName"
            onChange={(e) =>
              setUserInfo({ ...userInfo, surname: e.target.value })
            }
            required
          />
        </Row>
        <Row>
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="Enter your email address."
            type="email"
            id="password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            required
          />
        </Row>
        <Row>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Enter your email password."
            type="password"
            id="password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            required
          />
        </Row>

        <Button type="submit"> Create User</Button>
      </Form>
    </Container>
  );
};

export default Register;
