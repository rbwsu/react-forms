import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form />
      </div> 
    );
  }
}

export default App;
