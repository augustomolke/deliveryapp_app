import { Jumbotron, Spinner, Row, Col } from "react-bootstrap";
import ResourceCard from "./ResourceCard";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import restaurantServices from "../services/restaurantServices";
import { useState } from "react";

const ResourceListing = () => {
  const [list, setList] = useState([]);
  const [isPending, setIsPending] = useState(false);
  let imgs = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  const getRests = (name) => {
    setIsPending(true);
    restaurantServices.getRestaurants(name, 0, 30).then(
      (res) => {
        console.log(res.data);
        setList(res.data);
        setIsPending(false);
      },
      (err) => {
        console.log(err);
        setIsPending(false);
      }
    );
  };

  return (
    <Jumbotron bsPrefix="jumbotron listingContainer center bg-lighterrose">
      <InputGroup className="mb-3" size="lg">
        <FormControl
          bsPrefix="searchbar form-control"
          placeholder="What's your craving for today?"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e) => getRests(e.target.value)}
        />
      </InputGroup>
      {isPending ? (
        <Spinner animation="border" role="status" variant="success"></Spinner>
      ) : (
        <Jumbotron bsPrefix="bg-lighterrose listing jumbotron">
          {list.map((i) => {
            return (
              <ResourceCard
                key={i._id}
                name={i.name}
                img={imgs[Math.floor(Math.random() * imgs.length)]}
                description={i.description}
                rating={i.rating}
                freight={i.freight}
                path={i._id}
              />
            );
          })}
        </Jumbotron>
      )}
    </Jumbotron>
  );
};

export default ResourceListing;
