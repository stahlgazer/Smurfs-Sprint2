import axios from 'axios';

// ACTION FOR GETTING SMURF DATA
export const getSmurfs = () => dispatch => {
  dispatch({ type: "FETCHING_SMURF_START" });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("surfs data:", res.data);
      dispatch({ type: "FETCHING_SMURF_SUCCESS", payload: res.data });
    })
    .catch(err => {
      dispatch({ type: "FETCHING_SMURF_FAILURE", payload: err.response });
    });
};

// ACTION FOR ADDING NEW SMURF
export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: "FETCHING_SMURF_START", payload: newSmurf });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log("added smurf:", res.data);
      dispatch({ type: 'FETCHING_SMURF_SUCCESS', payload: res.data });
    })
    .catch(err => {
      dispatch({ type: 'FETCHING_SMURF_FAILURE', payload: err.response });
    });
};
