import React from 'react'
import { shallow } from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import testData from '../fixtures/expensesTestData'

let editExpenses ,removeExpenses,history ,wrapper

beforeEach(() =>{
    editExpenses = jest.fn();
    removeExpenses  = jest.fn();
    history = { push : jest.fn()}

    wrapper = shallow(<EditExpensePage expense = {testData[0]} editExpenses = {editExpenses} removeExpenses = {removeExpenses} history = {history} />)
})

test('Test Edit Expense with SnapShot',() =>{
    expect(wrapper).toMatchSnapshot();
});



test('Test Edit Expense with  Submit',() =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(testData[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpenses).toHaveBeenLastCalledWith(testData[0].id,testData[0]);    
});

test('Test Edit Expense with remove',() =>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenses).toHaveBeenLastCalledWith(testData[0].id);    
});