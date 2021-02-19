import React, {useState}  from "react";
import "./Search5.css";
import {InputGroup, FormControl, Button,} from  "react-bootstrap";



const Search5 = (props) =>{

    const [waluta, setWaluta] = useState("");

    const userTyped = (event) => {
      setWaluta(event.target.value);
        // console.log(event.target.value);

    };
    const userSearch = () =>{

      props.onSearch(waluta)

      // alert("Wyszukaj");
        
    };
    return  (
            // <div>Search5</div>
        <>

    <InputGroup className="szukajka">
    <FormControl
      placeholder="Wpisz poszukiwaną walutę"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={userTyped}
      value={waluta}
      />


    <InputGroup.Append>
    <Button onClick={userSearch} variant="danger">Szukaj waluty</Button>
    </InputGroup.Append>
  </InputGroup>

  <p>{waluta}</p>
  </>

    );
    // return <div>Hello</div>
};

export default Search5;
