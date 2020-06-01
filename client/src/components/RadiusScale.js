import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function RadiusScale(props) {

  function handleChange(event) {           
    props.parentCallback(event);
  }

  return (
    <div>
        <Form.Group controlId="formBasicRange">
            <Form.Label>Radius: {props.data} miles</Form.Label>
            <Form.Control 
                          onChange={event => handleChange(event.target.value)}
                          type="range" 
                          min={1} max={500} step={1} 
                          value={props.data} />
        </Form.Group>
    </div>

  );
}

export default RadiusScale;

