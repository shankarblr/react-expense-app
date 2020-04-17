
import uuid from 'uuid';
import database from './../firebase/firebase';

const addExpenses = (expenseData) => ({
    type:'ADD_EXPENSES',
    expenses :expenseData
});

const startAddExpense = (expenseData = {}) =>{
    return (dispatch) => {
        const { description = '',  note = '',  amount = 0,  createdAt = 0 } = expenseData;

        const newExpense = {description ,  note ,  amount ,  createdAt }

       return  database.ref("expenses").push(newExpense).then((ref) => {
            dispatch(addExpenses({id:ref.key,...newExpense}))
        }).catch((e) => { console.log(e)})
    }
};

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

export {addExpenses , editExpenses , removeExpenses , startAddExpense}