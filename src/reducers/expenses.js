const expensesReducerDefault = []

const expensesReducer = (state =expensesReducerDefault ,action) => {
        switch (action.type) {
            case 'ADD_EXPENSES':
                return [...state,action.expenses]
            case 'EDIT_EXPENSES':
                    return state.map((e) => e.id === action.expenses.id ? {...e,...action.expenses} : e);
            case 'REMOVE_EXPENSES':  
                 return state.filter((e) => e.id !== action.id);
             case 'SET_EXPENSE':  
                 return action.expenses;
            default:
                return state;
        }
};

export default expensesReducer