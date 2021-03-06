import { useState } from "react";
import userServices from "../services/userServices";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CreateUserForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    console.log(userData);
    e.preventDefault();

    userServices.createUser(userData).then(
      (response) => {
        console.log(response);
      },
      (err) => console.log("deu erro!!!", err)
    );
  }
  return (
    <Card bsPrefix="card createusercard center">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={userData.name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm your Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
