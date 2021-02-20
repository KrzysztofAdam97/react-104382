import React, {useState} from "react";
import "./Search3.css";
// import { Jumbotron, Button} from "react-bootstrap";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton,Row, Col } from  "react-bootstrap";



// const Search = ({changeIloscWaluty}) =>{

//   const [liczba,setLiczba] = useState()

//   const userTyped = (event) => {
//     setLiczba(event.target.value)

//     let ile = parseInt (event.target.value)
//     changeIloscWaluty(ile)

const Search3 = ({changeKurs}) =>{

  const [kursy, setKursy] = useState();

   const userTyped = (event) => {
    setKursy(event.target.value);

    let kurs = parseFloat(event.target.value);
    changeKurs(kurs);

    //  console.log(event.target.value);


  //  };

  //  const userSearch = () =>{

  //   props.onSearch(kurs)

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
      min = "0.001"
      name = "liczbpopoliczeniu"
      id = "liczbapopoliczeniu"
      placeholder =" :)"
      autocomplete = "off"
      onChange={userTyped}
      value={kursy}

     
    />
  </InputGroup>

  {/* <p>{kurs}</p> */}
  </Col>
 
  <Col></Col>
  </Row>
    );
    // return <div>Hello</div>
};

export default Search3;
