import getFilterdExpenses from '../../selectors/FilterdExpenses'
import moment from 'moment'
import testData from '../fixtures/expensesTestData'

test('Should filter by Text value' , () =>{
    const filter ={
        text :'Rent',
        sortBy :'date',
        startDate :undefined ,
        endDate : undefined
    }
    const result = getFilterdExpenses(testData,filter);
    expect(result).toEqual([testData[0]])


})
 

 test('Should filter by Start Date value' , () =>{
    const filter ={
        text :'',
        sortBy :'date',
        startDate :moment(0) ,
        endDate : undefined//moment(0).add(5,'days').valueOf()
    }

    const result = getFilterdExpenses(testData,filter);
    expect(result).toEqual([testData[0],testData[2] ])


}) 

test('Should filter by End Date value' , () =>{
    const filter ={
        text :'',
        sortBy :'date',
        startDate :undefined ,
        endDate : moment(0).add(5,'days')
    }

    const result = getFilterdExpenses(testData,filter);
    expect(result).toEqual([testData[1],testData[0]])


}) 