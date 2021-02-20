import React, {useState} from "react";
import "./Guziczki.css";
import { Jumbotron, Button, Row, Col, Alert} from "react-bootstrap";
import { waluty } from '../../data';
import Karta from "../card/Karta";
import waluta from "../search5/Search5";







// import Search from "./components/search/Search";


const Guziczki = ({ileWaluty, kurs}) =>{

    

    const policz = (event) =>{

      alert ("Twoje " + ileWaluty + " PLN = "+ ileWaluty * kurs +" twojej nowej waluty. ");
    
     

  
        };
       
    
    return (
<>
<Row className="Row">
    <Col className="Col1">
    <Button className ="guzik1" button id="licz" variant="success" onClick={policz} >Policz</Button>{' '}
    </Col>
    <Col className="Col2">
    <Button className ="guzik2" button id="licz-clear" variant="danger">Kasuj</Button>
    </Col>
    </Row>
    </>
    );
  
};

export default Guziczki;


