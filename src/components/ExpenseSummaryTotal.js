import React from 'react'
import {connect} from 'react-redux'
import getFilterdExpenses from '../selectors/FilterdExpenses';
import selectExpenseTotal from '../selectors/selectExpenseTotal';

const ExpenseSummary = (props) => (
        <div>
            <h1>Viewing {props.totalEpenses} totalling ${props.totalAmount}</h1>
        </div>
);

const mapStateToProps = (state,props) =>{
    const expenses = getFilterdExpenses(state.expenses,state.filter);
    return {
        totalEpenses : expenses.length,
        totalAmount : selectExpenseTotal(expenses)
    };
};
export default connect(mapStateToProps)(ExpenseSummary)

