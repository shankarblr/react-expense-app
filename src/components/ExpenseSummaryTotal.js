import React from 'react'
import {connect} from 'react-redux'
import getFilterdExpenses from '../selectors/FilterdExpenses';
import selectExpenseTotal from '../selectors/selectExpenseTotal';
import { Link } from 'react-router-dom';

const ExpenseSummary = (props) => (
    <div className="page-header">
         <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.totalEpenses} </span> totalling <span> ${props.totalAmount} </span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state,props) =>{
    const expenses = getFilterdExpenses(state.expenses,state.filter);
    return {
        
        totalEpenses : expenses.length,
        totalAmount :   parseFloat(selectExpenseTotal(expenses)).toFixed(2)
    };
};
export default connect(mapStateToProps)(ExpenseSummary)

