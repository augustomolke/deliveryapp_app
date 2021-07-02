import authServices from "../services/authServices";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import { NavDropdown } from "react-bootstrap";

export default function Logout({ handleLogout }) {
  let hist = useHistory();

  function handleLogoutclick() {
    let headers = authServices.authHeader();
    authServices.logout(headers).then(
      (res) => {
        localStorage.removeItem("user");
        handleLogout();
        hist.push("/");
      },
      (err) => {
        return <label>{err}</label>;
      }
    );
  }

  return (
    <NavDropdown.Item onClick={handleLogoutclick}>Logout</NavDropdown.Item>
  );
}
