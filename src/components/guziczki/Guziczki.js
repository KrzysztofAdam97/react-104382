import React, {useState} from "react";
import "./Guziczki.css";
import { Jumbotron, Button, Row, Col} from "react-bootstrap";




// import Search from "./components/search/Search";


const Guziczki = () =>{

    

    const policz = (event) =>{

        alert(5*5);
    }
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


