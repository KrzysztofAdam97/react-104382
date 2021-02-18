import React from "react";
import "./Header.css";
import { Jumbotron, Button} from "react-bootstrap";



const Header = () =>{
    return (
        <Jumbotron className="jumbo">
        <h1>Kantor - wymiana walut</h1>
        <p>
          U nas najtaniej na rynku wymienisz swoją obca walute. 0 prowizji. 0 odsetek. Totalne 0 kosztów.
        </p>
        <p>
          <Button variant="primary">Sprawdź aktualne kursy walut</Button>
        </p>
            </Jumbotron>
    );
    // return <div>Hello</div>
};

export default Header;
