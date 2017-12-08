import { combineReducers } from 'redux';

import searchItems from './reducers/searchItems';
import searchDetail from './reducers/searchDetail';
import searchDecription from './reducers/searchDecription';


const rootReducer = combineReducers({
    items: searchItems,
    objectDetail: searchDetail,
    objectDescription: searchDecription
});

export default rootReducer;
