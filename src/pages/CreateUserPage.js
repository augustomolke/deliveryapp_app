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
          <Row bsPrefix="toprow row">
            <Col bsPrefix="center col">
              <CreateUserForm />
            </Col>
            <Col bsPrefix="center col">
              <h1>Uma frase de efeito!</h1>
              <p>
                Alguma frase legal para atrair leads
                <strong> através de uma informação relevante </strong>e um botão
                para criar conta.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse non convallis nisi, quis
                sollicitudin odio. Vivamus sodales convallis imperdiet. Aenean
                dictum tempor eros, ac scelerisque mauris. Proin iaculis augue
                eu sollicitudin interdum. In in magna sed leo tincidunt luctus.
                Proin vel nisl maximus, auctor est quis, sollicitudin magna.
                Nunc pretium lacus imperdiet, faucibus eros eget, consectetur
                mauris. Morbi nec pretium urna. Etiam scelerisque laoreet
                egestas. Nullam pharetra efficitur commodo. Pellentesque eget
                justo cursus, gravida tortor sit amet.
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
