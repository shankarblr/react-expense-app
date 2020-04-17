const selectExpenseTotal =(expenses) => {
    return expenses.reduce((result, expense)=>{
        return result + expense.amount;
    },0)
};

export default selectExpenseTotal