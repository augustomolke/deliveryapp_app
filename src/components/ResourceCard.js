import { Card, Button, NavItem } from "react-bootstrap";
import Link from "react-router-dom/Link";
import { AiFillStar } from "react-icons/ai";

const ResourceCard = ({
  name,
  img,
  description,
  rating,
  price,
  freight,
  path,
}) => {
  return (
    <Link eventKey="1" className="resourcecardLink" to={"/restaurants/" + path}>
      <Card bsPrefix="resourcecard card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
          <Card.Subtitle>
            <b>{rating}</b>
            <AiFillStar size={24} style={{ fill: "yellow" }} />
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Card.Footer>
            {freight > 0 ? (
              <label>
                Fee: <i>$ {freight}</i>
              </label>
            ) : (
              <label>
                Fee: <i style={{ color: "green" }}>Free</i>
              </label>
            )}
            {price && <>Price: $ {price} </>}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ResourceCard;
