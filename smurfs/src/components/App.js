import "./App.css";
import React from "react";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

function App(props) {
  // Display Smurf Form and Smurf List, View village button
  return (
    <div className="App">
      <h1>Smurf's Village!</h1>
      <div>
        <h2>Let's Add Some New Smurfs To Our Village!</h2>
        <SmurfForm />
      </div>
      <button onClick={() => props.getSmurfs()}>View Village</button>
      <SmurfList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurf: state.smurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
