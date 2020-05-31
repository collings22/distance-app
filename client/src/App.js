import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Home from './containers/Home';

function App() {
  
  return (
  <Container>
    <h1>Location App</h1>
    <Home/>
  </Container>
  );
}

export default App;
