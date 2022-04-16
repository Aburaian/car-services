import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleNavigate = (event) => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container  w-50 mx-auto mt-4">
      <h1 className="text-primary mb-4 text-center">Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            className="mb-3"
            type="text"
            placeholder="Your Name"
            required
          />
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Your Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-2">
        New to Genius Car?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto  text-decoration-none"
          onClick={handleNavigate}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
