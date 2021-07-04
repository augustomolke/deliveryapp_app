import CreateUserForm from "../components/CreateUserForm";
import { Jumbotron } from "react-bootstrap";
import tasting from "../assets/undraw_tasting_de22.svg";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import Link from "react-router-dom/Link";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Login from "../components/Login";

export default function CreateUserPage({ handleLoginFunc }) {
  return (
    <>
      <Jumbotron className="center" bsPrefix="jumbotron fullpage bg-rosequartz">
        <Row bsPrefix="toprow row">
          <Col lg={6} bsPrefix="center col">
            <Image bsPrefix="img-fluid overlayimg " fluid src={tasting} />
          </Col>
          <Col lg={6} bsPrefix="center bg-neongreen melonborder col">
            <h3>Start ordering food today!</h3>
            <CreateUserForm />
            <p>
              Already have an account?
              <OverlayTrigger
                trigger="click"
                placement="auto"
                overlay={
                  <Popover id="popover-basic">
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
