import React, { useState } from "react";
import { addSmurf } from "../actions/index";
import { connect } from "react-redux";

function SmurfForm(props) {
  // NEW SMURF STATE
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  console.log("Our New Smurf:", newSmurf);

  //adding newSmurf to addSmurf action on submit
  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
  };

  //update newSmurf state in order to post
  const onChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        onSubmit={props => {
          handleSubmit(props);
        }}
      >
        <label>Name: </label>
        <input
          autoFocus
          placeholder="New Smurf Name"
          key="name"
          type="text"
          name="name"
          required
          onChange={onChange}
          value={newSmurf.name}
        />
        <label>Age: </label>
        <input
          placeholder="Smurf Age In Years"
          key="age"
          type="text"
          name="age"
          required
          onChange={onChange}
          value={newSmurf.age}
        />
        <label>Height: </label>
        <input
          placeholder="10 cm"
          key="height"
          type="text"
          name="height"
          required
          onChange={onChange}
          value={newSmurf.height}
        />
        <div>
          <button>Add a Smurf to the Village!</button>
        </div>
      </form>
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

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
