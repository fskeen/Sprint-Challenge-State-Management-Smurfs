import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
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
                title: "Hello from the store!"
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
                smurfs: [...state.smurfs, action.payload[0]]
            }

        default:
            return state;
    }

}