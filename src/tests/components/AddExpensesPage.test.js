import React from 'react'
import { shallow } from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import testData from '../fixtures/expensesTestData'

let onAddExpense ,history ,wrapper 

beforeEach(() =>{ 
    onAddExpense = jest.fn();
     history = {     push  : jest.fn()   } 
     wrapper = shallow(<AddExpensePage onAddExpense = {onAddExpense} history = {history} />)
})


test('Test Add Expense Page with SnapShot',() => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on Submit method' , () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(testData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onAddExpense).toHaveBeenLastCalledWith(testData[1]);    
});