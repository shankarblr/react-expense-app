
import uuid from 'uuid';
import database from './../firebase/firebase';

const addExpenses = (expenseData) => ({
    type:'ADD_EXPENSES',
    expenses :expenseData
});

const startAddExpense = (expenseData = {}) =>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid;

        const { description = '',  note = '',  amount = 0,  createdAt = 0 } = expenseData;

        const newExpense = {description ,  note ,  amount ,  createdAt }

       return  database.ref(`users/${uid}/expenses`).push(newExpense).then((ref) => {
            dispatch(addExpenses({id:ref.key,...newExpense}))
        }).catch((e) => { console.log(e)})
    }
};

const editExpenses = (id, updates) => ({
    type:'EDIT_EXPENSES',
    expenses :{
        id,
        ...updates
    }
});

const startEditExpense = (id, updates) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpenses(id,updates))
        }) 

    };
}


const removeExpenses = (id) =>({
    type : 'REMOVE_EXPENSES',
    id
});


const startRemoveExpense = (id) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpenses(id))
        }) 
    }
};


const setExpense = (expenses) => ({
    type : 'SET_EXPENSE',
    expenses
});

const startSetExpense = () => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
         return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) =>{
            const expense = [];
            
            snapshot.forEach((childSnap) => {
                expense.push({
                    id:childSnap.key,
                    ...childSnap.val()
                })
            });

            dispatch(setExpense(expense));
         })
    }
};


export {addExpenses , editExpenses , removeExpenses , startRemoveExpense ,startAddExpense ,setExpense,startSetExpense ,startEditExpense}