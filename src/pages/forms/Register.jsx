import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser, loginWithGoogle } from "../../auth/firebase";
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

const Register = () => {
  const [register, setRegister] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, surname, email, password } = register;
    createUser(name, surname, email, password);
  };

  return (
    <Container>
      <Aside />
      <Form onSubmit={handleRegister}>
        <Title> Register Page </Title>
        <Row>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            placeholder="Enter your first name."
            type="text"
            id="firstName"
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
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
              setRegister({ ...register, surname: e.target.value })
            }
            required
          />
        </Row>

        <Row>
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="Email..."
            type="text"
            id="email"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
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
              setRegister({ ...register, password: e.target.value })
            }
            required
          />
        </Row>
        <Button type="submit">Register</Button>
        <Button onClick={() => loginWithGoogle(navigate)}>
          <FcGoogle /> Register With Google
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
