import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import testData from '../fixtures/expensesTestData'

test('Test Expense Add Form using Shallow test',() =>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();

})


test('Test Expense Add Form using Shallow test with data',() =>{
    const wrapper = shallow(<ExpenseForm expense ={testData[0]}/>)
    expect(wrapper).toMatchSnapshot();

})