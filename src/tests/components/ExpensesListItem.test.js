import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseItem} from '../../components/ExpenseListItem'
import testData from '../fixtures/expensesTestData'

test('Test Expense List Item',() =>{
    const wrapper = shallow(<ExpenseItem {...testData[0]}/>);
    expect(wrapper).toMatchSnapshot();

});