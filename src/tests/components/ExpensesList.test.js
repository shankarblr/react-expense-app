import React from 'react'
import { shallow } from 'enzyme'
import {ExportList} from '../../components/ExportList'
import testData from '../fixtures/expensesTestData'

test('should render expenses with list',() =>{
    const wrapper =  shallow(<ExportList expenses = {testData}/>)
    expect(wrapper).toMatchSnapshot();
})


