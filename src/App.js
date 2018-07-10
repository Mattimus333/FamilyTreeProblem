import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createJohn } from './initialFamilyData.js'

class App extends Component {
  render() {
    let firstParent = createJohn();
    return (
      <div className="App">
        <h1>Family Tree</h1>
        <div>{firstParent.name}</div>
      </div>
    );
  }
}

export default App;
