import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/watermelon-icon.png";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Login from "./Login";
import Logout from "./Logout";
import Link from "react-router-dom/Link";

const Nave = ({ authStatus, handleLogout, handleLogin }) => {
  const popLogin = (
    <Popover id="popover-basic">
      <Login handleLogin={handleLogin} />
    </Popover>
  );

  return authStatus ? (
    <Navbar
      bg="green"
      expand="lg"
      variant="dark"
      sticky="top"
      collapseOnSelect="true"
    >
      <Container>
        <Navbar.Brand
          eventKey="1"
          bsPrefix="navbar-brand brandFont"
          as={Link}
          to="/"
        >
          <img src={logo} width="30px" height="30px" />
          Melon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey="1" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey="1" as={Link} to="/restaurants">
              Restaurants
            </Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Change my Data
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <Logout handleLogout={handleLogout} />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <Navbar
      bg="green"
      expand="lg"
      variant="dark"
      sticky="top"
      collapseOnSelect="true"
    >
      <Container>
        <Navbar.Brand
          eventKey="1"
          bsPrefix="navbar-brand brandFont"
          as={Link}
          to="/"
        >
          <img src={logo} width="30px" height="30px" />
          Melon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey="1" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey="1" as={Link} to="/createuser">
              Create an Account
            </Nav.Link>
            <OverlayTrigger
              trigger="focus"
              placement="bottom"
              overlay={popLogin}
            >
              <Nav.Link bsPrefix="loginButton nav-link">Login</Nav.Link>
            </OverlayTrigger>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nave;
