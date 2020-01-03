import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="site-heading">...</h1>
        <Table />
        <Form />
      </div>
    );
  }
}

export default App;
