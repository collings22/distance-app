import React, { useState, useEffect } from "react";
import List from "../components/List";
import RadiusScale from "../components/RadiusScale";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";

function Home() {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [radius, setRadius] = useState(50);

  function updateRadius(val){
    setRadius(val);
    
    fetch("http://localhost:9000/people/?radius="+val)
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          setError(error);
        }
      );    
  }

  useEffect(() => {
    fetch("http://localhost:9000/people/?radius="+radius)
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      <Alert key={error} variant={'danger'} style={error != null ? {display:'block'} : {display:'none'}}>
        Oops! Something went wrong.
        <p>{error}</p>
      </Alert>
      <Alert key={error} variant={'success'} style={users.length > 0 ? {display:'block'} : {display:'none'}}>
        {users.length} people found within {radius} miles
        <p>{error}</p>
      </Alert>
  
      <RadiusScale data={radius} parentCallback={updateRadius}/>      
      <ListGroup>
          <List data={users}/>
      </ListGroup>
    </div>

  );
}

export default Home;
