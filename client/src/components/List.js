import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Person from "./Person";

function List(items) {
  return items.data.map((item) => (

      <ListGroup.Item key={item.id}>
        <Person data={item}/>
      </ListGroup.Item>
  ));
}

export default List;

