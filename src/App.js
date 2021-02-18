import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Jumbotron, Button} from "react-bootstrap";

const App = () => {
  return (
  <div className="app">
    <Container className="gr5__container">
      <Jumbotron className="gr5__container">
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
      </Jumbotron>
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
