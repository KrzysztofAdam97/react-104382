import React from "react";
import "./Search2.css";
// import { Jumbotron, Button} from "react-bootstrap";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton } from  "react-bootstrap";



const Search2 = () =>{
    return (

<DropdownButton id="dropdown-basic-button" title="Waluta">
  <Dropdown.Item href="#/action-1">Polski Złoty (PLN)</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Dolar Amerykański (USD)</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Euro (EUR)</Dropdown.Item>
</DropdownButton>
    );
    // return <div>Hello</div>
};

export default Search2;
