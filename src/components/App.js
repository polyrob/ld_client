import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import NavBar from './NavBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <NavBar />
        <Alert color="info">
          This page is still under development
        </Alert>
      </div>
    );
  }
}

export default App;
