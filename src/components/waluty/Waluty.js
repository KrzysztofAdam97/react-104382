import React from "react";
import "./Waluty.css";
import Karta from "../card/Karta";
// import {Row, Col} from "react-bootstrap";
import { waluty } from '../../data';



const Waluty = (props) => {

// props.whatToFind

const getWaluty = (allWaluty, text) => {

    if (text === null || text.lenght ===0) return allWaluty;

    let result = [];
    
    allWaluty.forEach((waluta) => {
     if (waluta.waluta.includes(text) || waluta.skrot.includes(text))   {
         result.push(waluta);
     }
    });
    return result;

};

const selectedWaluty = getWaluty(waluty, props.whatToFind);


    return (
        <div
            className="waluty">
                {selectedWaluty.map(waluta => (
                     <Karta key={waluta.waluta} 
                     nazwaWaluta={waluta.waluta} 
                     skrot={waluta.skrot} 
                     kurs={waluta.kurs}
                     kurs2={waluta.kurs2}/>

                ))}
                {/* <h1>{props.whatToFind}</h1> */}
{/* 
            <Karta nazwaWaluta="Polski Złoty"/>
            <Karta nazwaWaluta="Euro"/>
            <Karta nazwaWaluta="Ruble Rosyjskie"/>
            <Karta nazwaWaluta="Dolar Amerykański"/>
            <Karta nazwaWaluta=""/>
            <Karta nazwaWaluta=""/>
            <Karta nazwaWaluta=""/> */}

{/*   
    "Dolar Kanadyjski",
    "Korony Czeskie",
    "Korony Norweskie",
    "Funty Szterlingi",
    "Frank Szwajcarski",
    "Korony Islandzkie",
    "Kuna",
    "Korona Norweska",
    "Korona Szwedzka",
    "Dolar Australijski",
    "Bat",
    "Jen",
    "Dolar Nowozelandzki",
    "Hrywna",
    "Korony Duńskie",
    "Lej Rumuński",
    "Lew",
    "Rupia Indyjska",
    "Rupia Indonezyjska",
           */}

        {/* <Row>
           <Col className = "waluty_col">
                <Karta/>
           </Col>
           <Col className = "waluty_col">
                {" "}
                <Karta/>
           </Col>
           <Col className = "waluty_col">
                {" "}
                <Karta/>
           </Col>
        </Row>
        <Row>
           <Col className = "waluty_col">
           {" "}
                <Karta/>
           </Col>
           <Col className = "waluty_col">
           {" "}
                <Karta/>
           </Col>
           <Col className = "waluty_col">
           {" "}
                <Karta/>
           </Col>
           
        </Row> */}
        </div>
    );
};

export default Waluty;