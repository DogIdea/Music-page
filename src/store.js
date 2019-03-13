import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
console.log(createStore())
const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...{thunk})
    )
)


export default store;