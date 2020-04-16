import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should setup default filer values',() => {
    const state = filterReducer(undefined,{type:'@@INT'})

    expect(state).toEqual({
        text :'',
        sortBy :'',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    })

})


test('Should set sortBy to amount',() =>{
    const state = filterReducer(undefined,{type:'SET_SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual("amount")
});

test('Should setup sort by date',()=>{
    const currentState = {
        text :'',
        sortBy :'amount',
        startDate : undefined,
        endDate : undefined
    }

    const action = {type:'SET_SORT_BY_DATE'}

    const state = filterReducer(currentState,action)
    expect(state.sortBy).toEqual("date")    

})