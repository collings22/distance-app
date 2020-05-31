import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Person from "./Person";

function List(items) {
  return items.data.map((item) => (

      <ListGroup.Item>
        <Person data={item}/>
      </ListGroup.Item>
  ));
}

export default List;

