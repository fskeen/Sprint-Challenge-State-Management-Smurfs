import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMUF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'

export const ADD_SMURF = 'ADD_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'

export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMUF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMUF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

export const titleFX = () => {
    return {
        type: 'FAKE_TITLE'
    }
}

export const getData = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_SMURF_START });
      axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
        //   console.log(res);
          dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response });
        });
    };
};


export const deleteSmurf = (smurf) => {
    console.log("deleteSMURF invoked using: ", smurf)
    return { type: DELETE_SMURF, payload: smurf }
}
/** --- COMMENT ---------------------------------------
 * 
 * This postData action takes in the temp smuf object from my AddSmurfForm. It returns a dispatch that will run that will:
 * 1. set POST_SMURF_START, which basically sets a "loading" condition
 * 2. POST the smurf to the database
 * 3A. handle a successful response and update state accordingly by dispatching POST_SMURF_SUCCESS, or...
 * 3B. handle an error response by dispatching POST_SMURF_FAILURE.
 */
export const postData = (smurf) => { 
    return dispatch => {
      dispatch({ type: POST_SMURF_START });
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
          console.log("res here", res.data);
          dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: POST_SMURF_FAILURE, payload: err.response });
        });
    };
};

export const deleteData = (id) => {
    return dispatch => {
      dispatch({ type: DELETE_SMURF_START });
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
        //   console.log(res);
          dispatch({ type: DELETE_SMURF_SUCCESS, payload: res });
        })
        .catch(err => {
          dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response });
        });
    };
};
  