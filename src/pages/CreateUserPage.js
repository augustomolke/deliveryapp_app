import CreateUserForm from "../components/CreateUserForm";
import { Jumbotron } from "react-bootstrap";
import tasting from "../assets/undraw_tasting_de22.svg";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";

export default function CreateUserPage() {
  return (
    <>
      <Jumbotron className="center" bsPrefix="jumbotron fullpage bg-rosequartz">
        <Col bsPrefix="col containetOverlap">
          <Row sm="2" bsPrefix="row toprow">
            <Col bsPrefix="col center">
              <CreateUserForm />
            </Col>
            <Col bsPrefix="col center">
              <h1>Uma frase de efeito!</h1>
              <p>
                Alguma frase legal para atrair leads
                <strong> através de uma informação relevante </strong>e um botão
                para criar conta.
              </p>
            </Col>
          </Row>
          <Row sm="2" bsPrefix="row overlayrow">
            <Image bsPrefix="img-fluid overlayimg " fluid src={tasting} />
          </Row>
        </Col>
      </Jumbotron>
    </>
  );
}
