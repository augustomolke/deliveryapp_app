import { Jumbotron } from "react-bootstrap";
import ResourceCard from "./ResourceCard";
import restimg from "../assets/restimg.jpg";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const ResourceListing = () => {
  return (
    <Jumbotron bsPrefix="jumbotron listingContainer center bg-lighterrose">
      <InputGroup className="mb-3" size="lg">
        <FormControl
          bsPrefix="searchbar form-control"
          placeholder="What's your craving for today?"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Jumbotron bsPrefix="bg-lighterrose listing jumbotron">
        <ResourceCard
          name="Nome do restaurante/prato"
          img={restimg}
          description="algum texto descritivo sobre  prato ourestaurante"
          rating="4.8"
          price="29,99"
          freight="8.99"
        />
        <ResourceCard
          name="Nome do restaurante/prato"
          img={restimg}
          description="algum texto descritivo sobre  prato ourestaurante"
          rating="4.8"
          price="29,99"
          freight="8.99"
        />
        <ResourceCard
          name="Nome do restaurante/prato"
          img={restimg}
          description="algum texto descritivo sobre  prato ourestaurante"
          rating="4.8"
          price="29,99"
          freight="8.99"
        />
        <ResourceCard
          name="Nome do restaurante/prato"
          img={restimg}
          description="algum texto descritivo sobre  prato ourestaurante"
          rating="4.8"
          price="29,99"
          freight="8.99"
        />
        <ResourceCard
          name="Nome do restaurante/prato"
          img={restimg}
          description="algum texto descritivo sobre  prato ourestaurante"
          rating="4.8"
          price="29,99"
          freight="8.99"
        />
      </Jumbotron>
    </Jumbotron>
  );
};

export default ResourceListing;
