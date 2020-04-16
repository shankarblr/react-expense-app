import React from 'react'
import ExportList  from './ExportList'
import ExpenseListFilter from './ExpenseListFilter'

const ExpenseDashboardPage = () =>(
    <div>
        <ExpenseListFilter />
        <ExportList />
    </div>
)

export default ExpenseDashboardPage