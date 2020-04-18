import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expensesReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';
import thunk from 'redux-thunk'
import authReducer from './../reducers/auth'

const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

    const dbstore = createStore(combineReducers({
        expenses:expensesReducer,
        filter : filterReducer,
        auth :authReducer
    }), composeEhancer(applyMiddleware(thunk)));

    return dbstore
}

