import Reac, {useState} from "react";
import "./Search.css";
// import { Jumbotron, Button} from "react-bootstrap";
import {InputGroup, FormControl, Button, Dropdown, DropdownButton, Row, Col } from  "react-bootstrap";




const Search = (props) =>{

  const [liczba, setLiczba] = useState("");

  const userTyped = (event) => {
   setLiczba(event.target.value);
   //  console.log(event.target.value);


  };

  const userSearch = () =>{

   props.onSearch(liczba)

   // alert("Wyszukaj");
  }

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
      input type = "number"
      min = "0"
      name = "liczbadopoliczenia"
      id = "liczbadopoliczenia"
      placeholder ="no podaj  tę kwotę proszę, bo czekam :)"
      autocomplete = "off"
      onChange={userTyped}
      value={liczba}
    />
  </InputGroup>
  
  </Col>
  <p>{liczba}</p>
  <Col></Col>
  </Row>
    );
    // return <div>Hello</div>
};

export default Search;


