
import uuid from 'uuid'

const addExpenses = ({description = "" ,note = "",amount = 0,createdAt = 0} = {}) => ({
    type:'ADD_EXPENSES',
    expenses :{
        id : uuid(),
        description,
        note ,
        amount,
        createdAt
    }
});

const editExpenses = (id, {description = "" ,note = "",amount = 0,createdAt = 0} = {}) => ({
    type:'EDIT_EXPENSES',
    expenses :{
        id,
        description,
        note ,
        amount,
        createdAt
    }
});

const removeExpenses = (id) =>({
    type : 'REMOVE_EXPENSES',
    id
});

export {addExpenses , editExpenses , removeExpenses }