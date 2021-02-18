import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Jumbotron, Button} from "react-bootstrap";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Search2 from "./components/search2/Search2";
const App = () => {
  return (
  <div className="app">
    <Container className="gr5__container">
      <Header />
      <p2>Podaj kwotę</p2>
      <Search />
      <p3>Przelicz na:</p3>
      <Search2 />
      <p5>Wynik:</p5>
      {/* <p4>Przelicz na:</p4> */}

 

      {/* <Jumbotron className="jumbo">
  <h1>Kantor - wymiana walut</h1>
  <p>
    U nas najtaniej na rynku wymienisz swoją obca walute. 0 prowizji. 0 odsetek. Totalne 0 kosztów.
  </p>
  <p>
    <Button variant="primary">Sprawdź aktualne kursy walut</Button>
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
      </Jumbotron> */}
      {/* <Row>
        <Col className="gr5__col1">
          <h1>Baner</h1>
        </Col>
        <Col className="gr5__col2">
          <h1>Baner</h1>
        </Col>
      </Row> */}
    </Container>

  {/* <h1>Wyszukiwarka</h1>
  <h1>Wyniki wyszukiwania</h1> */}
   
    </div>
    );
};

export default App;
