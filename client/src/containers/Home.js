import React, { useState, useEffect } from "react";
import List from "../components/List";
import ListGroup from "react-bootstrap/ListGroup";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/people")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <ListGroup>
        <List data={items}/>
    </ListGroup>
  );
}

export default Home;
