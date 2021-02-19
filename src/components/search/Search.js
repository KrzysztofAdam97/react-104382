import React from "react";
import "./Search.css";
// import { Jumbotron, Button} from "react-bootstrap";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton, Row, Col } from  "react-bootstrap";



const Search = () =>{
  const add = () =>{

  };
    return (
<Row>
  <Col>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Podaj kwotę</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  </Col>
  <Col></Col>
  <Col></Col>
  </Row>
    );
    // return <div>Hello</div>
};

export default Search;
