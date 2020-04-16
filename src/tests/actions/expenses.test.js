import {addExpenses , editExpenses , removeExpenses } from '../../actions/expenses';

test('should setup remove expense action object',()=>{

    const action = removeExpenses('123');

    expect(action).toEqual({
        type : 'REMOVE_EXPENSES',
        id :'123'
    });
})


test('should setup edit expense action object',() => {

    const action = editExpenses('123',{description : "A" ,note : "B",amount : 10,createdAt : 10});

    expect(action).toEqual({
        type:'EDIT_EXPENSES',
        expenses :{
            id : '123',
            description :'A',
            note :'B',
            amount : 10,
            createdAt: 10
        }
    })
});


test('should setup add expense action objectt',() => {

    const expObj = {
        description : "A" ,
        note : "B",
        amount : 10,
        createdAt : 10
    }

    const action = addExpenses(expObj); 
    
    expect(action).toEqual({
        type:'ADD_EXPENSES',
        expenses :{
            ...expObj,
            id:expect.any(String)
        }

    })
    
})

test('should setup add expense action object with default',() => {

    const action = addExpenses(); 
    
    expect(action).toEqual({
        type:'ADD_EXPENSES',
        expenses :{
            description : "",
            note:  "",
            amount : 0,
            createdAt :0,
            id:expect.any(String)
        }
    })
    
})