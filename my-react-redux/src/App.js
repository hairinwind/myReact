import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Quote from './features/quotes/Quote';

function App() {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand href="#home">app</Navbar.Brand>
      </Navbar>
      <div className="App">
        <Quote />
      </div>
    </Router>
  );
}

export default App;
