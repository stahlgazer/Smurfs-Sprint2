import React from "react";
import { connect } from "react-redux";

function SmurfList(props) {
  // MAP OVER SMURFS AND DISPLAY SMURF DATA
  return (
    <div className="smurfs-container">
      {props.smurf &&
        !props.isLoading &&
        props.smurf.map(item => (
          <div className="smurfs" key={item.id}>
            <h2>Name: {item.name}</h2>
            <h2>Age: {item.age}</h2>
            <h2>Height: {item.height} CM</h2>
          </div>
        ))}
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

export default connect(mapStateToProps, {})(SmurfList);
