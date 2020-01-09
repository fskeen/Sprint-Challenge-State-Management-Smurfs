import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
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
    smurfs: []
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
        
        case POST_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
            /** --- COMMENT ---------------------------------------
             * 
             * The two reducer functions below handle the responses from the server, whether successful or errored out. At THIS point, the temp smurf object I passed into my postData function doesn't even matter, since it's only used in the post request.
             */
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
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