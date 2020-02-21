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
            <p>Name: {item.name}</p>
            <p>Age: {item.age} years old</p>
            <p>Height: {item.height} Inches</p>
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
