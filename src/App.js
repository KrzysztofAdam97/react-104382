import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col, Jumbotron, Button} from "react-bootstrap";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Search2 from "./components/search2/Search2";
import Search3 from "./components/search3/Search3";
import Search5 from "./components/search5/Search5";
import Waluty from "./components/waluty/Waluty";
import Guziczki from "./components/guziczki/Guziczki";
import Szukajka1 from "./components/szukajka1/Szukajka1"
import Szukajka2 from "./components/szukajka2/Szukajka2"


const App = () => {

const [searchData, setsearchData] = useState ("");

const userSearched = (waluta) => {
  setsearchData(waluta);

// alert (waluta);
};

  return (
  <div className="app">
    <Container className="gr5__container">
      <Header />
      <Row className = "Row2">
      <p7 className = "p7">Wyszukiwarka walut</p7>
      </Row>
      <Search5 onSearch={userSearched}/>
    
    
    
      <Row className ="Row">
      <p6 className = "p6">Przelicznik złotówkowy</p6>
      </Row>
  
      
      <Search />
      <Row>
        <Col>
        <p4 className = "p4">Przelicz z:</p4>
        <Szukajka1/>
        </Col>
        <Col>
        <p3 className = "p3">Przelicz na:</p3>
        <Szukajka2/>
        </Col>
        
      </Row>
    
     <br></br>
      <Row>
        <Col>
        <Search2 /></Col>
        <Col>
        <Search3 /></Col>
      </Row>

      <Guziczki/>
{/* 
      <br></br>
      <p5>Wynik:</p5> */}
   
    
      {/* <p4>Przelicz na:</p4> */}
      <Waluty whatToFind={searchData}/>
      
     
       
 

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
