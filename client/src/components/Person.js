import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Person(props) {
  
    return (
        <Row id={'person_'+props.data.id}>
        <Col sm={4}>
                        <p><b>Name: </b>{props.data.first_name + ' ' + props.data.last_name}</p>
            <p><b>Email: </b>{props.data.email}</p>
        </Col>
        <Col sm={4}>
            <p><b>Latitude: </b> {props.data.latitude}</p>
            <p><b>Longitude: </b> {props.data.longitude}</p>
        </Col>
        <Col sm={4}>
            <p><b>Miles from London: </b> {props.data.distance}</p>
        </Col>

        </Row>

  );
}

export default Person;

