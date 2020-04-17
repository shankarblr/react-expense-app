import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expensesReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';
import thunk from 'redux-thunk'
import { connect } from 'react-redux';

const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {

    const dbstore = createStore(combineReducers({
        expenses:expensesReducer,
        filter : filterReducer
    }), composeEhancer(applyMiddleware(thunk)));

    return dbstore
}

