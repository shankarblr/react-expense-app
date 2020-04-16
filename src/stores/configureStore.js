import {createStore,combineReducers} from 'redux';
import expensesReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';

export default () => {

    const dbstore = createStore(combineReducers({
        expenses:expensesReducer,
        filter : filterReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

    return dbstore
}

