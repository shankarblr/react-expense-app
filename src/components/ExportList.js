import React from 'react'
import {connect} from 'react-redux'
import ExpenseItem from './ExpenseListItem'
import FilterdExpenses from './../selectors/FilterdExpenses'
import getFilterdExpenses from './../selectors/FilterdExpenses';

export const ExportList = (props) => (
        <div>
            <h1>Export List </h1>
            {  props.expenses.map((e) =>  <ExpenseItem key={e.id} {...e}/>)        }
        </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : getFilterdExpenses(state.expenses,state.filter)
    };
};


export default connect(mapStateToProps)(ExportList)