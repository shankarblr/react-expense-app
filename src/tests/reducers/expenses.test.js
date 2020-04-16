import expensesReducer from '../../reducers/expenses'

test('should set default filter',()=>{
    const state = expensesReducer(undefined,{type:'@@INT'})
    expect(state).toEqual([])
    
})
