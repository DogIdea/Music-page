import { combineReducers } from 'redux';
import homeData from './homedata-reducers.jsx';

const rootReducers = combineReducers({
    homeData:homeData
})

export default rootReducers