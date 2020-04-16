import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters'
import moment from 'moment'

test('Test setup Text Filter',() =>{
    const result = setTextFilter('rent');
    expect(result).toEqual({
        type :'SET_TEXT_FILTER',
        text :'rent'
    });
})

test('Test Set Sort by ',() => {
    const result = sortByDate()
    expect(result).toEqual({
        type:'SET_SORT_BY_DATE'
    })
    
})

test('Test Set Sort by Amount',() => {
    const result = sortByAmount()
    expect(result).toEqual({
        type:'SET_SORT_BY_AMOUNT'
    })
    
})

test('Test Set Start Date',() => {
    const result = setStartDate(moment(0))
    expect(result).toEqual({
        type:'SET_SORT_BY_STARTDATE',
        startDate:moment(0)
    })
    
})

test('Test Set End Date',() => {
    const result = setEndDate(moment(0))
    expect(result).toEqual({
        type:'SET_SORT_BY_ENDDATE',
        endDate:moment(0)
    })
    
})
