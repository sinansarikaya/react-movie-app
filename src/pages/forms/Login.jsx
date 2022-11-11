import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithGoogle } from "../../auth/firebase";
import {
  Form,
  Aside,
  Button,
  Container,
  Input,
  Label,
  Row,
  Title,
} from "./Form.styled";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = login;

    loginWithEmail(email, password, navigate);
  };

  return (
    <Container>
      <Aside />
      <Form onSubmit={handleLogin}>
        <Title>Login Page</Title>
        <Row>
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="Email..."
            type="text"
            id="email"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            required
          />
        </Row>

        <Row>
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Password..."
            type="password"
            id="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            required
          />
        </Row>
        <Link to="/password-reset">Forgot Password?</Link>
        <Button type="submit">Login</Button>
        <Button onClick={() => loginWithGoogle(navigate)}>
          <FcGoogle /> Continue With Google
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
