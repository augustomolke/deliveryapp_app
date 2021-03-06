import CreateUserForm from "../components/CreateUserForm";
import { Jumbotron } from "react-bootstrap";
import tasting from "../assets/undraw_tasting_de22.svg";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import Link from "react-router-dom/Link";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Login from "../components/Login";
import icecreamimg from "../assets/undraw_ice_cream_s2rh rose.svg";

export default function CreateUserPage({ handleLoginFunc }) {
  return (
    <>
      <Jumbotron className="center" bsPrefix="jumbotron fullpage bg-rosequartz">
        <Row bsPrefix="toprow bg-lightergreen melonborder row">
          <Col lg={6} bsPrefix="center col">
            <Image bsPrefix="img-fluid overlayimg " fluid src={icecreamimg} />
          </Col>
          <Col lg={6} bsPrefix="center col">
            <h3>Join us today!</h3>
            <CreateUserForm />
            <p>
              Already have an account?
              <OverlayTrigger
                rootClose
                trigger="click"
                overlay={
                  <Popover id="popover-trigger-click-root-close">
                    <Login handleLogin={handleLoginFunc} />
                  </Popover>
                }
              >
                <Link> Click here to sign in!</Link>
              </OverlayTrigger>
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
}
