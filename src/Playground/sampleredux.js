const addExpense = ({ description ='' , note ='' , amount = 0 , createdAt =0} = {}) => ({
    type :'ADD_EXPENSE',
    expenses :{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }    
})

const removeExpense =({id = 0}={}) => ({
    type :"REMOVE_EXPENSE",
    id
})

const editExpense =(id ,update) => ({
    type:'EDIT_EXPENSE',
    id,
    update
});


const expensesReducerDefault = []

const expensesReducer = (state = expensesReducerDefault , action) => {
    console.log()
    switch (action.type) {
        case 'ADD_EXPENSE':
            return   [...state,action.expenses]
        case 'EDIT_EXPENSE':
            {
                console.log("edit",action)
                return state.map( (e) => e.id === action.id ? {...e,...action.update} : e  )
            }
        case 'REMOVE_EXPENSE' :
                return  state.filter((f) => f.id !== action.id)
        default:
            return state;
    }

};

const setTextFilter = (text) => ({
    type:'SET_TEXT',
    text
});

const sortByDate = () => ({
    type : "SORT_BY_DATE"
}) 

const sortByAmount =() => ({
    type :'SORT_BY_AMOUNT'
})

const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
});

const filterReducerDefault = {
    text : '',
    sortBy : 'date',
    startDate :undefined,
    endDate :undefined
}

const filerReducer = (state = filterReducerDefault ,action) => {
    switch (action.type) {  
        case 'SET_TEXT':
            return {...state,text:action.text}
        case 'SORT_BY_DATE':
            return {...state,sortBy:'date'} 
        case 'SORT_BY_AMOUNT':
            return {...state,sortBy:'amount'} 
        case 'SET_START_DATE':
            return {...state,startDate:action.startDate}
        case 'SET_END_DATE':
            return {...state,endDate:action.endDate}
        default:
            return state;
    }
};


const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filter :filerReducer
    }) 
)

const getVisibleExpenses =(expenses , {text,sortBy,startDate,endDate}) => {

    return expenses.filter((exp) =>{

        const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || exp.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || exp.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy ==='date'){
            return a.createdAt < b.createdAt ? -1 : 1;
        } else if(sortBy ==='amount'){
            return a.amount < b.amount ? -1 :1;
        }
    });

       
}
    
var st = 111;

store.subscribe(() => {
    const state = store.getState();
    const newExpenses = getVisibleExpenses(state.expenses,state.filter);
    console.log(newExpenses)
})

const exp1 = store.dispatch(addExpense({description:'This is my sss',note:"fadff",createdAt :11000}))
const exp2 = store.dispatch(addExpense({description:'Arya us ',note:"my First",amount:10,createdAt :12000}))
const exp3 = store.dispatch(addExpense({description:'Nikhil',note:"Nihal not ",amount:20,createdAt :-3000}))
const exp4 = store.dispatch(addExpense({description:'Kavitha',note:"House",amount:40,createdAt :-4000}))
//console.log("My Exp1 :",exp1)

//const result = store.dispatch(removeExpense({id:exp1.expenses.id}))

//store.dispatch(editExpense(exp2.expenses.id,{note:"What THE FFFFF",amount:33545}))
//console.log("Search Result :",result)

//store.dispatch(setTextFilter('Arya'))
store.dispatch(sortByDate())
store.dispatch(sortByAmount())
//store.dispatch(setStartDate(15))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(-1500))
//store.dispatch(setEndDate())

const demoExp = {
    expenses : [{
        id : 101,
        description :"Jan rent",
        note : "This is something i'm getting used now",
        amount: 5400,
        createdAt :0
    }],
    filter : {
        text :'rent',
        sortBy :'amount',
        startDate : undefined,
        endDate : undefined
    }
}

