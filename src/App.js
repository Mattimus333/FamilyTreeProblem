import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FamilyTree from "./familyTree"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Family Tree</h1>
        <div>
          <FamilyTree/>
        </div>
      </div>
    );
  }
}

export default App;
