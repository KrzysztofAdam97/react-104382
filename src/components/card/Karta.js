import React from "react";
import "./Karta.css";
import { Card} from "react-bootstrap";
import { waluty } from '../../data';


const Karta = (props) => {
    return (
      <Card className="karta">
        <Card.Body>
          <Card.Title>{props.nazwaWaluta}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.skrot}</Card.Subtitle>
          <Card.Text>
          {props.kurs}
          </Card.Text>
          <Card.Link href="#">{props.kurs2}</Card.Link>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    )
}

export default Karta;


