import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {addExpenses} from './../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.onAddExpense(expense)
        this.props.history.push("/")
    };
    render(){
        return(
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit = {this.onSubmit} />
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    onAddExpense : (expense) => dispatch(addExpenses(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage)