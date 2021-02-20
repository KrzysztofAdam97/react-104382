import React from "react";
import "./Search2.css";
// import { Jumbotron, Button} from "react-bootstrap";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton,Row,Col } from  "react-bootstrap";




const Search2 = () =>{
    return (
<Row>
  <Col>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Kurs nr 1</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      input type = "number"
      min = "0"
      name = "liczbadopoliczenia"
      id = "liczbadopoliczenia"
      placeholder =" :)"
      autocomplete = "off"
      value = "1.00"
    />
  </InputGroup>
  </Col>
 
  <Col></Col>
  </Row>
    );
    // return <div>Hello</div>
};

export default Search2;
