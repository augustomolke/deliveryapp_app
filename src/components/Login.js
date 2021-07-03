import { useState } from "react";
import authServices from "../services/authServices";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

export default function Login({ handleLogin }) {
  const [userEntry, setUserEntry] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [isPending, setPending] = useState(false);
  let hist = useHistory();

  const checkCredentials = (e) => {
    setPending(true);
    e.preventDefault();
    authServices.login(userEntry).then(
      (response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        handleLogin();
        hist.push("/");
      },
      (error) => {
        console.log(error.message);
        setError(error.message);
        setPending(false);
      }
    );
  };
  return (
    <>
      <Card bsPrefix="card logincard center melonborder">
        {isPending ? (
          <Spinner animation="border" role="status" variant="success"></Spinner>
        ) : (
          <Form className="center" onSubmit={checkCredentials}>
            <Form.Group className="mb-3 center" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userEntry.email}
                onChange={(e) => {
                  setUserEntry({ ...userEntry, email: e.target.value });
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 center" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userEntry.password}
                onChange={(e) => {
                  setUserEntry({ ...userEntry, password: e.target.value });
                }}
              />
            </Form.Group>
            {error && <Alert variant="danger"> Invalid Credentials!</Alert>}

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Card>
    </>
  );
}
