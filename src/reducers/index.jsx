import { combineReducers } from 'redux';
import {homeData} from './homedata-reducers.jsx';
import {searchData} from './searchdata-reducers.jsx';

const rootReducers = combineReducers({
    homeData,
    searchData
})

export default rootReducers