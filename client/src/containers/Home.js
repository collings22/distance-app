import React, { useState, useEffect } from "react";
import List from "../components/List";
import RadiusScale from "../components/RadiusScale";
import ListGroup from "react-bootstrap/ListGroup";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [radius, setRadius] = useState(50);

  function updateRadius(val){
    setRadius(val);

    fetch("http://localhost:9000/people/?radius="+radius)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    
  }

  useEffect(() => {
    fetch("http://localhost:9000/people/?radius="+radius)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      <RadiusScale data={radius} parentCallback={updateRadius}/>      
      <ListGroup>
          <List data={users}/>
      </ListGroup>
    </div>

  );
}

export default Home;
