import React from 'react'
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {editExpenses} from './../actions/expenses'
import {removeExpenses} from './../actions/expenses'

export class EditExpensePage extends React.Component{
  onSubmit = (expense) => {
    this.props.editExpenses(this.props.expense.id,expense) 
    this.props.history.push("/")
  };
  onRemove = () => {
    this.props.removeExpenses(this.props.expense.id)
    this.props.history.push("/")
  };
  render(){
      return(
            <div>
              <ExpenseForm expense = {this.props.expense} onSubmit = {this.onSubmit} />
              <button onClick ={this.onRemove}>Remove</button>
            </div>
      )
  };
};

const mapStateToEditExpensePage = (state,props) => {
  return {
    expense : state.expenses.find((e) =>  e.id === props.match.params.id  )
  }
}

const mapDispatchToProps =(dispatch,props) => {
  return {
    editExpenses : (id,expense) => dispatch(editExpenses(id,{...expense})),
    removeExpenses : (id) => dispatch(removeExpenses(id ))
  }
};

export default connect(mapStateToEditExpensePage,mapDispatchToProps)(EditExpensePage)