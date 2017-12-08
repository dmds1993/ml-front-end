import { SEARCH_DETAIL } from '../actions/searchDetailActions';

const INITIAL_STATE = {
    detail: false
};

const detail = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_DETAIL:
        console.log('SEARCH_DETAIL', action.payload)
            return { ...state, detail: action.payload.data };
        default:
            return state;
    }
};

export default detail;
