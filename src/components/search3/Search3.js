import React, {useState} from "react";
import "./Search3.css";
// import { Jumbotron, Button} from "react-bootstrap";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton,Row, Col } from  "react-bootstrap";




const Search3 = (props) =>{

  const [kurs, setKurs] = useState("");

   const userTyped = (event) => {
    setKurs(event.target.value);
    //  console.log(event.target.value);


   };

   const userSearch = () =>{

    props.onSearch(kurs)

    // alert("Wyszukaj");
      
  };
    return (
<Row>
  <Col>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Kurs nr 2</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      input type = "number"
      min = "0"
      name = "liczbpopoliczeniu"
      id = "liczbapopoliczeniu"
      placeholder =" :)"
      autocomplete = "off"
      onChange={userTyped}
      value={kurs}

     
    />
  </InputGroup>

  <p>{kurs}</p>
  </Col>
 
  <Col></Col>
  </Row>
    );
    // return <div>Hello</div>
};

export default Search3;
