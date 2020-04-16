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

const jsx = (
    <Provider store ={store}>
         <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));


