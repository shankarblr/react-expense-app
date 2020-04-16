import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import {Provider} from 'react-redux'
import configureStore from './stores/configureStore';
import {addExpenses , editExpenses , removeExpenses } from './actions/expenses';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from './actions/filters';
import getFilterdExpenses from './selectors/FilterdExpenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.dispatch(addExpenses({description:"Gas Bill",note:"This is gas bill for month of Jan",amount:2102,createdAt:2100}));
store.dispatch(addExpenses({description:"Water Bill",note:"This is Water bill for month of Feb",amount:2313,createdAt:500}));
store.dispatch(addExpenses({description:"Phone Bill",note:"This is Phone bill for month of Narch",amount:613,createdAt:6500}));


//store.dispatch(setTextFilter("Water"));
store.dispatch(sortByAmount());
const oldData = store.getState();
const newData = getFilterdExpenses(oldData.expenses,oldData.filter);

const jsx = (
    <Provider store ={store}>
         <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));


