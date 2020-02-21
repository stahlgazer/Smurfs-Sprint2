import React, { Component } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf's Village!</h1>
        <div><SmurfForm /></div>
        <div><SmurfList /></div>
      </div>
    );
  }
}

export default App;
