import React from "react";
import "./Guziczki.css";
import { Jumbotron, Button, Row, Col} from "react-bootstrap";

const Guziczki = () =>{

    const policz = (event) =>{

        alert ("Policz");
    var rates = [ 0.27, 3.70, 0.22, 4.48, 1.21, 0.82 ];
    var PLNUSD = rates[0];
    var USDPLN = rates[1];
    var PLNEUR = rates[2];
    var EURPLN = rates[3];
    var USDEUR = rates[4];
    var EURUSD = rates[5];

    }
    return (
<>
<Row className="Row">
    <Col className="Col1">
    <Button className ="guzik1" variant="success" onClick={policz} >Policz</Button>{' '}
    </Col>
    <Col className="Col2">
    <Button className ="guzik2" variant="danger">Kasuj</Button>
    </Col>
    </Row>
    </>
    );
  
};

export default Guziczki;


