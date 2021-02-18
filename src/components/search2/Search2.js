import React from "react";
import "./Search2.css";
// import { Jumbotron, Button} from "react-bootstrap";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton } from  "react-bootstrap";



const Search2 = () =>{
    return (

<InputGroup>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-primary"
      title="Waluta"
      id="input-group-dropdown-2"
    >
      <Dropdown.Item href="#">Polski Złoty (PLN)</Dropdown.Item>
      <Dropdown.Item href="#">Euro (EUR)</Dropdown.Item>
      <Dropdown.Item href="#">Dolar Amerykański (USD)</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
    );
    // return <div>Hello</div>
};

export default Search2;
