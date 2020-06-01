import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//https://ip-api.com/docs/ used to get a persons region based on ip address

function Person(props) {
    const [error, setError] = useState(null);
    const [region, setRegion] = useState(null);

    const url = "https://geocode.xyz/"+props.data.latitude+","+props.data.longitude+"?geoit=json";
  
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then(
            (result) => {
              setRegion(result.region);
            },
            (error) => {
              setError(error);
            }
          );
      }, []);

    return (
        <Row id={'person_'+props.data.id}>
        <Col sm={4}>
                        <p><b>Name: </b>{props.data.first_name + ' ' + props.data.last_name}</p>
            <p><b>Email: </b>{props.data.email}</p>
        </Col>
        <Col sm={4}>
            <p><b>Region: </b> {region == null ? 'Region Not Available' : region}</p>
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

