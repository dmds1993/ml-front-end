import { SEARCH_DESCRIPTION } from '../actions/searchDescriptionActions';

const INITIAL_STATE = {
    description: false
};

const description = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_DESCRIPTION:
        console.log('SEARCH_DESCRIPTION', action.payload)
            return { ...state, description: action.payload };
        default:
            return state;
    }
};

export default description;
