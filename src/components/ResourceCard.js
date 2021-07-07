import { Card, Button, NavItem } from "react-bootstrap";

const ResourceCard = ({ name, img, description, rating, price, freight }) => {
  return (
    <Card bsPrefix="resourcecard card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Rating: {rating}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Footer>
          {freight && <>Freight: {freight} </>}
          {price && <>Price: {price} </>}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
