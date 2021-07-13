import { useState } from "react";
import authServices from "../services/authServices";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const CreateProdPage = (handleLogin) => {
  const [userEntry, setUserEntry] = useState({ file: "" });
  const [error, setError] = useState(false);
  const [isPending, setPending] = useState(false);
  let hist = useHistory();

  const handleFile = (e) => {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      if (file.size <= 1000000) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          setUserEntry({
            file:
              "data:" + file.type + ";base64, " + reader.result.split(",")[1],
          });
          console.log(userEntry);
        };
      }
    }
  };

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
      <Card bsPrefix="card logincard center bg-lightergreen melonborder">
        {isPending ? (
          <Spinner animation="border" role="status" variant="success"></Spinner>
        ) : (
          <Form className="center bg-lightergreen" onSubmit={checkCredentials}>
            <Form.Group className="mb-3 center" controlId="formBasicEmail">
              <Form.Label>Img upload</Form.Label>
              <Form.Control
                type="file"
                placeholder="Select your File"
                onChange={handleFile}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
};

export default CreateProdPage;
