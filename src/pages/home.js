import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import breakfastRose from "../assets/undraw_breakfast_psiw.svg";
import hamburguer from "../assets/undraw_Hamburger_8ge6.svg";
import Link from "react-router-dom/Link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  return (
    <>
      <Jumbotron
        className="center"
        bsPrefix="jumbotron bg-lightergreen homecontent"
      >
        <Row>
          <Col sm className="center">
            <h1>Uma frase de efeito!</h1>
            <p>
              Alguma frase legal para atrair leads
              <strong> através de uma informação relevante </strong>e um botão
              para criar conta.
            </p>
            <p>
              <Button
                as={Link}
                to="/createuser"
                bsPrefix="btn"
                variant="success"
              >
                <strong>Sign up!</strong>
              </Button>
            </p>
          </Col>
          <Col sm>
            <img className="img-fluid" src={breakfastRose} />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron bsPrefix="jumbotron bg-lighterrose homecontent">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <img className="img-fluid" src={hamburguer} />
      </Jumbotron>
    </>
  );
};

export default Home;
