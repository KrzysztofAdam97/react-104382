import React from "react";
import "./Header.css";
import { Jumbotron, Button, Row} from "react-bootstrap";



const Header = () =>{
    return (
        <Jumbotron className="jumbo">
        <h1>Kantor - wymiana walut</h1>
        <p>
        <Row className="pod">U nas najtaniej na rynku wymienisz swoją obcą walutę 0 prowizji</Row>
        <br></br>
        <Row className="pod2">0% odsetek i totalnie 0 ukrytych kosztów !!!</Row>
        </p>
        {/* <p>
          <Button variant="primary">Sprawdź aktualne kursy walut</Button>
        </p> */}
            </Jumbotron>
    );
    // return <div>Hello</div>
};

export default Header;
