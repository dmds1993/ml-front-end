import { SEARCH_ITEMS } from '../actions/searchItemsActions';

const INITIAL_STATE = {
    items: false
};

const items = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_ITEMS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default items;
