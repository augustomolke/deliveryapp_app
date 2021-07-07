import { Jumbotron } from "react-bootstrap";
import ResourceCard from "./ResourceCard";
import restimg from "../assets/restimg.jpg";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import restaurantServices from "../services/restaurantServices";
import { useState } from "react";

const ResourceListing = () => {
  const [list, setList] = useState([]);

  const getRests = (name) => {
    restaurantServices.getRestaurants(name, 0, 30).then(
      (res) => {
        console.log(res.data);
        setList(res.data);
      },
      (err) => {
        console.log(err);
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
      <Jumbotron bsPrefix="bg-lighterrose listing jumbotron">
        {list.map((i) => {
          return (
            <ResourceCard
              key={i._id}
              name={i.name}
              img={restimg}
              description="algum texto descritivo sobre  prato ourestaurante"
              rating={i.rating}
              freight={i.freight}
            />
          );
        })}
      </Jumbotron>
    </Jumbotron>
  );
};

export default ResourceListing;
