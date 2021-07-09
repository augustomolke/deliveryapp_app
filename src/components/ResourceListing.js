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
import pic9 from "../assets/pic9.jpg";
import pic10 from "../assets/pic10.jpg";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import restaurantServices from "../services/restaurantServices";
import { useState, useEffect } from "react";

const ResourceListing = () => {
  const [list, setList] = useState([]);
  const [isPending, setIsPending] = useState(false);
  let imgs = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

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

  useEffect(() => {
    getRests("");
  }, []);

  return (
    <Jumbotron bsPrefix="jumbotron listingContainer center ">
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
        <Jumbotron bsPrefix=" listing jumbotron">
          {list.map((i) => {
            return (
              <ResourceCard
                key={i._id}
                name={i.name}
                img={(function () {
                  let i = Math.floor(Math.random() * imgs.length);
                  let chosen = imgs[i];
                  imgs.splice(i, 1);
                  return chosen;
                })()}
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
