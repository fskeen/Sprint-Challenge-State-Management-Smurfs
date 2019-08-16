import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
} from '../actions'

const initialState = {
    title: "Hmmm, I need a new title.",
    isLoading: false,
    error: '',
    smurfs: [],
    addingSmurf: {
        name: "",
        age: 0,
        height: "",
        id: "" 
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAKE_TITLE':
            return {
                ...state,
                title: "Hello from the Smurf Village!"
            }
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                addingSmurf: action.payload
            }
        
        case POST_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: [...state.smurfs, action.payload]
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: state.smurfs
            }
        default:
            return state;
    }

}