import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf's Village!</h1>
        <div>
          <h2>Let's Add Some New Smurfs!</h2>
          <SmurfForm />
        </div>
        <div>
          <h2>Click To Update Smurf Village</h2>
          <button>Update Village</button>
          <SmurfList />
        </div>
      </div>
    );
  }
}

export default App;
