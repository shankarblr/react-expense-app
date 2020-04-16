import moment from 'moment'

const getFilterdExpenses = (expenses,{startDate,endDate,text,sortBy}) => {
    
    return expenses.filter((e) => {
        const momentCreatedAt = moment(e.createdAt)

        const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreatedAt,'day')  : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(momentCreatedAt,'day') : true;
        const textMatch = typeof text !== 'string' || e.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch &&  textMatch;
    }).sort((a ,b ) => {
         if(sortBy === 'date'){
             return a.createdAt > b.createdAt ? 1 : -1;
         }else if(sortBy ==='amount') {
            return a.amount > b.amount ? 1 : -1;
         }   
    });
}; 

export default getFilterdExpenses