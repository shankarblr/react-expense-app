import React from 'react'
import ExportList  from './ExportList'
import ExpenseListFilter from './ExpenseListFilter'
import ExpenseSummary from './ExpenseSummaryTotal';

const ExpenseDashboardPage = () =>(
    <div>
        <ExpenseSummary />    
        <ExpenseListFilter />
        <ExportList />
    </div>
)

export default ExpenseDashboardPage